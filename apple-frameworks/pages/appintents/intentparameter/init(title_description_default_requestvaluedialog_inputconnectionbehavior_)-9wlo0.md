> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-9wlo0](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:requestvaluedialog:inputconnectionbehavior:)-9wlo0)

# init(title:description:default:requestValueDialog:inputConnectionBehavior:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates an app intent parameter.

## Declaration

```swift
convenience init(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: [Value.ValueType?], requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default)
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.

## See Also

### Creating an intent parameter

- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-17a31.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `URL`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:default:requestValueDialog:inputConnectionBehavior:)](init%28title_description_default_requestvaluedialog_inputconnectionbehavior_%29-518bz.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `URL`. Creates an app intent parameter.
- [init(title:description:default:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_default_requestvaluedialog_inputconnectionbehavior_resolvers_%29-6mfw6.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` is `URL`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:default:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_default_requestvaluedialog_inputconnectionbehavior_resolvers_%29-7lt0.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `URL`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29-17a31.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `URL`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](init%28title_description_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-8g3g7.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `URL`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
