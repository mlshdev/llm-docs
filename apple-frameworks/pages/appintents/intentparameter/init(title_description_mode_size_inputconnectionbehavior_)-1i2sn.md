> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:mode:size:inputconnectionbehavior:)-1i2sn](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:mode:size:inputconnectionbehavior:)-1i2sn)

# init(title:description:mode:size:inputConnectionBehavior:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS · watchOS 10.0+

Creates an app intent parameter for an array with a specified size per widget family.

## Declaration

```swift
convenience init(title: LocalizedStringResource, description: LocalizedStringResource? = nil, mode: IntentPerson.ParameterMode = .contact, size: [IntentWidgetFamily : IntentCollectionSize], inputConnectionBehavior: InputConnectionBehavior = .default)
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `mode`: The user interface that appears when a person chooses a value for this parameter. Default value is `.contact`.
- `size`: The size of the array for a widget family. Use this to limit the amount of values.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.

## See Also

### Creating an intent parameter

- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:mode:size:inputConnectionBehavior:)](init%28title_description_mode_size_inputconnectionbehavior_%29-6efsz.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter for an array with a specified size.
