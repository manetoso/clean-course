(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  // type HtmlType = 'input'|'select'|'textarea'|'radio';

  // class HtmlElement {
  //     constructor(
  //         public id: string,
  //         public type: HtmlType,
  //     ) {}
  // }

  // class InputAttributes extends HtmlElement {
  //     constructor(
  //         public value: string,
  //         public placeholder: string,
  //         id: string,
  //     ) {
  //         super(id, 'input');
  //     }
  // }

  // class InputEvents extends InputAttributes {
  //     constructor( value: string, placeholder: string, id: string ) {
  //         super( value, placeholder, id );
  //     }

  //     setFocus() {};
  //     getValue() {};
  //     isActive() {};
  //     removeValue() {};
  // }

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';
  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    public id: string;
    public type: HtmlType;
    constructor({ id, type }: HtmlElementProps) {
      this.id = id;
      this.type = type;
    }
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor({ value, placeholder }: InputAttributesProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {
    constructor() {}

    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

	interface InputElementProps {
		id: string;
		type: HtmlType;
		value: string;
		placeholder: string;
	}

	class InputElement {
		public htmlElement: HtmlElement;
		public inputAttributes: InputAttributes;
		public inputEvents: InputEvents;

		constructor({ id, type, value, placeholder }: InputElementProps) {
			this.htmlElement = new HtmlElement({ id, type });
			this.inputAttributes = new InputAttributes({ value, placeholder });
			this.inputEvents = new InputEvents();
		}
	}

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({id: 'input', placeholder: 'Nombre', type: 'input', value: 'Pepe'});

	nameField.inputEvents.getValue()

  console.log({ nameField });
})();
