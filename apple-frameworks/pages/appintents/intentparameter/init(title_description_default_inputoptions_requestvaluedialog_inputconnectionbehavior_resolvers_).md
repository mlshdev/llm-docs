> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:resolvers:)](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:default:inputoptions:requestvaluedialog:inputconnectionbehavior:resolvers:))

# init(title:description:default:inputOptions:requestValueDialog:inputConnectionBehavior:resolvers:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an app intent parameter that can convert the selected value.

## Declaration

```swift
convenience init<Spec>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, inputOptions: String.IntentInputOptions? = nil, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `inputOptions`: An object that describes how a person can input the value.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `resolvers`: An object that converts a value of another type to this parameter’s type.

## See Also

### Creating an intent parameter for a string

- [init(title:description:default:inputOptions:requestValueDialog:inputConnectionBehavior:)](init%28title_description_default_inputoptions_requestvaluedialog_inputconnectionbehavior_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter.
- [init(title:description:inputOptions:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_inputoptions_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter with a list of selectable options.
- [init(title:description:inputOptions:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)](init%28title_description_inputoptions_requestvaluedialog_inputconnectionbehavior_optionsprovider_resolvers_%29.md): Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `String`. Creates an app intent parameter with a list of selectable options that can convert the selected value.
