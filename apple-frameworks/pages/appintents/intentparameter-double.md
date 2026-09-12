> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter-double](https://developer.apple.com/documentation/appintents/intentparameter-double)

# Doubles

**Framework:** App Intents  
**Kind:** API Collection

Configure the details for parameter variables that contain floating-point values.

## Topics

### Creating an intent parameter

- [init(title:description:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:optionsProvider:)](intentparameter/init%28title_description_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-3la41.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](intentparameter/init%28title_description_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-2iugu.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:default:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:)](intentparameter/init%28title_description_default_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_%29-4mc52.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`. Creates an app intent parameter.
- [init(title:description:default:controlStyle:inclusiveRange:requestValueDialog:inputConnectionBehavior:resolvers:)](intentparameter/init%28title_description_default_controlstyle_inclusiverange_requestvaluedialog_inputconnectionbehavior_resolvers_%29-9yclx.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`. Creates an app intent parameter that can convert the selected value.
- [IntentParameter.InclusiveRange](intentparameter/inclusiverange-swift.typealias.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`.

### Accessing the control style

- [controlStyle](intentparameter/controlstyle-5ryd1.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Double`.
- [IntentParameter.DoubleControlStyle](intentparameter/doublecontrolstyle.md): Conforms when `Value` conforms to `_IntentValue` and `Sendable`. An enum that describes the control style of a Double parameter.

## See Also

### Creating an intent parameter for primitive types

- [Integers](intentparameter-int.md): Configure the details for parameter variables that contain integers.
- [Booleans](intentparameter-boolean.md): Configure the details for parameter variables that contain Boolean values.
- [Strings](intentparameter-string.md): Configure the details for parameter variables that contain strings or attributed strings.
- [URLs](intentparameter-url.md): Configure the details for parameter variables that contain URLs.
