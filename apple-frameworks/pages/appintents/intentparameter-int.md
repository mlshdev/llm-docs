> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-int](https://developer.apple.com/documentation/appintents/intentparameter-int)

# Integers

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain integers.

## Topics

### Creating an intent parameter

- [init(title:description:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-86n3q.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-8ej37.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:default:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_default_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_%29-2wjbq.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`. Creates an app intent parameter.
- [init(title:description:default:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_resolvers_%29-83igq.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`. Creates an app intent parameter that can convert the selected value.
- [IntentParameter.InclusiveRange](intentparameter/inclusiverange-swift.typealias.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`.

### Accessing the control style

- [controlStyle](intentparameter/controlstyle-4q1s9.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Int`.
- [IntentParameter.IntControlStyle](intentparameter/intcontrolstyle.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. An enum that describes the control style of an Integer parameter.

## See Also

### Creating an intent parameter for primitive types

- [Doubles](intentparameter-double.md): Configure the details for parameter variables that contain floating-point values.
- [Booleans](intentparameter-boolean.md): Configure the details for parameter variables that contain Boolean values.
- [Strings](intentparameter-string.md): Configure the details for parameter variables that contain strings or attributed strings.
- [URLs](intentparameter-url.md): Configure the details for parameter variables that contain URLs.
