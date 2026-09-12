> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/interfaceparametersdescription()](https://developer.apple.com/documentation/foundation/nsextensioncontext/interfaceparametersdescription())

# interfaceParametersDescription() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a human-readable string describing the data that SiriKit displays to the user when you handle an intent.

## Declaration

```swift
func interfaceParametersDescription() -> String
```

<a id="Discussion"></a>

## Discussion

If you provide an Intents UI app extension, you can customize all or some of the interface that SiriKit displays to the user for a given intent. The information displayed by SiriKit is different for each intent, and can change in the future. During development, use this method to retrieve a human-readable description of the contents of the [INParameter](../../intents/inparameter.md) objects that SiriKit intends to display for the current intent. Use that information to plan your custom interface.

For information about customizing the Siri and Maps interfaces, see [Creating an Intents App Extension](../../sirikit/creating-an-intents-app-extension.md).

## See Also

### Getting Siri-related information

- [hostedViewMinimumAllowedSize](hostedviewminimumallowedsize.md): The minimum size for a Siri hosted view.
- [hostedViewMaximumAllowedSize](hostedviewmaximumallowedsize.md): The maximum size for a Siri hosted view.

# interfaceParametersDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a human-readable string describing the data that SiriKit displays to the user when you handle an intent.

## Declaration

```objectivec
- (NSString *) interfaceParametersDescription;
```

<a id="Discussion"></a>

## Discussion

If you provide an Intents UI app extension, you can customize all or some of the interface that SiriKit displays to the user for a given intent. The information displayed by SiriKit is different for each intent, and can change in the future. During development, use this method to retrieve a human-readable description of the contents of the [INParameter](../../intents/inparameter.md) objects that SiriKit intends to display for the current intent. Use that information to plan your custom interface.

For information about customizing the Siri and Maps interfaces, see [Creating an Intents App Extension](../../sirikit/creating-an-intents-app-extension.md).

## See Also

### Getting Siri-related information

- [hostedViewMinimumAllowedSize](hostedviewminimumallowedsize.md): The minimum size for a Siri hosted view.
- [hostedViewMaximumAllowedSize](hostedviewmaximumallowedsize.md): The maximum size for a Siri hosted view.
