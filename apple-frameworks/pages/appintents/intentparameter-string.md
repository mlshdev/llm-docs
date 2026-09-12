> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-string](https://developer.apple.com/documentation/appintents/intentparameter-string)

# Strings

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain strings or attributed strings.

## Topics

### Creating an intent parameter for a string

- [init(title:description:default:inputOptions:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_default_inputoptions_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter.
- [init(title:description:default:inputOptions:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_inputoptions_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:inputOptions:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_inputoptions_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:inputOptions:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_inputoptions_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter with a list of selectable options that can convert the selected value.

### Creating an intent parameter for an attributed string

- [init(title:description:default:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_default_requestvaluedialog_inputconnectionbehavior_%29-5ouxs.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `AttributedString`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_requestvaluedialog_inputconnectionbehavior_resolvers_%29-7u5zw.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `AttributedString`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-2i6xs.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `AttributedString`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-7dvis.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `AttributedString`. Creates an app intent parameter with a list of selectable options that can convert the selected value.

### Accessing the input options

- [inputOptions](intentparameter/inputoptions.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`.

## See Also

### Creating an intent parameter for primitive types

- [Integers](intentparameter-int.md): Configure the details for parameter variables that contain integers.
- [Doubles](intentparameter-double.md): Configure the details for parameter variables that contain floating-point values.
- [Booleans](intentparameter-boolean.md): Configure the details for parameter variables that contain Boolean values.
- [URLs](intentparameter-url.md): Configure the details for parameter variables that contain URLs.
