> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-2wsgy](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:requestdisambiguationdialog:inputconnectionbehavior:supportedvalues:)-2wsgy)

# init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:supportedValues:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an app intent parameter.

## Declaration

```swift
convenience init(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, requestValueDialog: IntentDialog? = nil, requestDisambiguationDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, supportedValues: [Value.ValueType] = Array(Value.ValueType.allCases))
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `requestDisambiguationDialog`: A prompt that asks a person to choose among possible parameter values.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `supportedValues`: A list of selectable options for this parameter.

## See Also

### Creating an intent parameter

- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:supportedValues:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_supportedvalues_%29-9lv7y.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.ValueType` conforms to `AppEntity`, and `Value.ValueType` conforms to `AppEnum`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:supportedValues:optionsProvider:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_supportedvalues_optionsprovider_%29-3vfr6.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.ValueType` conforms to `AppEntity`, and `Value.ValueType` conforms to `AppEnum`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:supportedValues:optionsProvider:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_supportedvalues_optionsprovider_%29-4aw32.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEnum`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:supportedValues:resolvers:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_supportedvalues_resolvers_%29-1mxkz.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.ValueType` conforms to `AppEntity`, and `Value.ValueType` conforms to `AppEnum`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:default:requestValueDialog:requestDisambiguationDialog:inputConnectionBehavior:supportedValues:resolvers:)](init%28title_description_default_requestvaluedialog_requestdisambiguationdialog_inputconnectionbehavior_supportedvalues_resolvers_%29-21q7p.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` conforms to `AppEnum`. Creates an app intent parameter that can convert the selected value.
