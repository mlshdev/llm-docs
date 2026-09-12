> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(title:description:supportedtypeidentifiers:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:)](https://developer.apple.com/documentation/appintents/intentparameter/init(title:description:supportedtypeidentifiers:requestvaluedialog:inputconnectionbehavior:optionsprovider:resolvers:))

# init(title:description:supportedTypeIdentifiers:requestValueDialog:inputConnectionBehavior:optionsProvider:resolvers:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Creates an app intent parameter with a list of selectable options that can convert the selected value.

> Please use the initializer with 'supportedContentTypes'

## Declaration

```swift
convenience init<Spec, OptionsProvider>(title: LocalizedStringResource, description: LocalizedStringResource? = nil, supportedTypeIdentifiers: [String] = ["public.item"], requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, optionsProvider: OptionsProvider, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification, OptionsProvider : DynamicOptionsProvider, OptionsProvider.DefaultValue.ValueType == IntentFile
```

## Parameters

- `title`: A word or short phrase summarizing this parameter.
- `description`: Additional details about this parameter.
- `supportedTypeIdentifiers`: A list of selectable type identifiers for this \[\]. The default value is ‘public.item’.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `optionsProvider`: An object that determines selectable options for this parameter.
- `resolvers`: An object that converts a value of another type to this parameter’s type.

## See Also

### Creating an intent parameter

- [init(title:description:default:supportedTypeIdentifiers:requestValueDialog:inputConnectionBehavior:)](init%28title_description_default_supportedtypeidentifiers_requestvaluedialog_inputconnectionbehavior_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentFile`. Creates an app intent parameter.
- [init(title:description:default:supportedTypeIdentifiers:requestValueDialog:inputConnectionBehavior:resolvers:)](init%28title_description_default_supportedtypeidentifiers_requestvaluedialog_inputconnectionbehavior_resolvers_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentFile`. Creates an app intent parameter that can convert the selected value.
- [init(title:description:supportedTypeIdentifiers:requestValueDialog:inputConnectionBehavior:optionsProvider:)](init%28title_description_supportedtypeidentifiers_requestvaluedialog_inputconnectionbehavior_optionsprovider_%29.md): Deprecated. Conforms when `Value` conforms to `_IntentValue`, `Value` conforms to `Sendable`, and `Value.ValueType` is `IntentFile`. Creates an app intent parameter with a list of selectable options.
