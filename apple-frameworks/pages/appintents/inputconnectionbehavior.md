> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/inputconnectionbehavior](https://developer.apple.com/documentation/appintents/inputconnectionbehavior)

# InputConnectionBehavior

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Describes the input behaviors for connecting a parameter to the output of the previous App Intent.

## Declaration

```swift
enum InputConnectionBehavior
```

## Topics

### Getting the connection behaviors

- [InputConnectionBehavior.default](inputconnectionbehavior/default.md): A behavior that allows the system to determine if the parameter accepts the output.
- [InputConnectionBehavior.never](inputconnectionbehavior/never.md): A behavior that prohibits the parameter from accepting the output.
- [InputConnectionBehavior.connectToPreviousIntentResult](inputconnectionbehavior/connecttopreviousintentresult.md): A behavior that permits the parameter to accept the output.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Parameters

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md): Enable people to configure app intents with their custom input values.
- [IntentParameter](intentparameter.md): A property wrapper that indicates the associated property is an input argument of the app intent.
- [IntentParameterDependency](intentparameterdependency.md): A property wrapper that represents an app intent dependency you use to provide dynamic options.
- [IntentParameterContext](intentparametercontext.md): A type that provides information about an associated parameter during value resolution.
- [DynamicOptionsProvider](dynamicoptionsprovider.md): An interface for providing a dynamic list of options for a parameter of your app intent.
- [Resolvers](resolvers.md): Resolve the parameters of your app intents, and extend the standard resolution types to include your app’s custom types.
