> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:)](https://developer.apple.com/documentation/appintents/intentparameter/init(description:default:displaystyle:requestvaluedialog:inputconnectionbehavior:resolvers:))

# init(description:default:displayStyle:requestValueDialog:inputConnectionBehavior:resolvers:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates an app intent parameter that can convert the selected value.

## Declaration

```swift
convenience init<Spec>(description: LocalizedStringResource? = nil, default defaultValue: Value.UnwrappedType? = nil, displayStyle: IntentParameter<Value>.PlacemarkDisplayStyle = .name, requestValueDialog: IntentDialog? = nil, inputConnectionBehavior: InputConnectionBehavior = .default, @ResolverSpecificationBuilder<Value.UnwrappedType> resolvers: @escaping () -> Spec) where Spec : ResolverSpecification
```

## Parameters

- `description`: Additional details about this parameter.
- `defaultValue`: The default value for this parameter. People can specify a different value.
- `displayStyle`: The component of a selected location to display, such as a city or street address.
- `requestValueDialog`: A prompt that asks a person to provide the parameter value.
- `inputConnectionBehavior`: An enum that indicates how this parameter receives the output from a preceding app intent.
- `resolvers`: An object that converts a value of another type to this parameter’s type.
