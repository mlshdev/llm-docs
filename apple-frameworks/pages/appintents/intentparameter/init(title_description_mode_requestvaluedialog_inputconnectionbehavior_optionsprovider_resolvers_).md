> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:mode:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))

# init(title:description:mode:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an app intent parameter with a list of selectable options that can convert the selected value.

## Declaration

```swift
convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, mode: IntentPerson.ParameterMode = .contact, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, optionsProvider: OptionsProvider, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification, OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == IntentPerson
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `mode`: The user interface that appears when a person chooses a value for this parameter. Default value is `.contact`.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `optionsProvider`: An object that determines selectable options for this parameter.
- `resolvers`: An object that converts a value of another type to this parameter’s type.

## See Also

### Creating an intent parameter

- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:mode:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_mode_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:mode:size:inputConnectionBehavior:)](init%28title_description_mode_size_inputconnectionbehavior_%29-1i2sn.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter for an array with a specified size per widget family.
- [init(title:description:mode:size:inputConnectionBehavior:)](init%28title_description_mode_size_inputconnectionbehavior_%29-6efsz.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, `Value.UnwrappedType` conforms to `Collection`, and `Value.ValueType` is `IntentPerson`. Creates an app intent parameter for an array with a specified size.
