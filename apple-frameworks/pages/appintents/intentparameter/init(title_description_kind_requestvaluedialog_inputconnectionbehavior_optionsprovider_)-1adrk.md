> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-1adrk](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:kind:requestvaluedialog:inputconnectionbehavior:optionsprovider:)-1adrk)

# init(title:description:kind:requestValueDialog:inputConnectionBehavior:optionsProvider:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an app intent parameter with a list of selectable options.

## Declaration

```swift
convenience init<OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, kind: IntentParameter<Value>.DateKind = .dateTime, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, optionsProvider: OptionsProvider) where OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == Date
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `kind`: A value that indicates whether this parameter includes date or time.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `optionsProvider`: An object that determines selectable options for this parameter.

## See Also

### Creating an intent parameter

- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:)](init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_%29-97fq8.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Date`. Creates an app intent parameter.
- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29-3hg6n.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Date`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:kind:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_kind_requestvaluedialog_inputconnectionbehavior_resolvers_%29-6834b.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `Date`. Creates an app intent parameter that can convert the selected value.
