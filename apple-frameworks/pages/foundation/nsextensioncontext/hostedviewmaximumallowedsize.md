> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensioncontext/hostedviewmaximumallowedsize](https://developer.apple.com/documentation/foundation/nsextensioncontext/hostedviewmaximumallowedsize)

# hostedViewMaximumAllowedSize (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum size for a Siri hosted view.

## Declaration

```swift
var hostedViewMaximumAllowedSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

Apps can customize the Siri interface using an Intents UI extension. The extension vends a view controller whose view contains the custom content that you want Siri to display. The size of that view controller’s view must be no larger than the size value in this property.

## See Also

### Getting Siri-related information

- [hostedViewMinimumAllowedSize](hostedviewminimumallowedsize.md): The minimum size for a Siri hosted view.
- [interfaceParametersDescription()](interfaceparametersdescription%28%29.md): Returns a human-readable string describing the data that SiriKit displays to the user when you handle an intent.

# hostedViewMaximumAllowedSize (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The maximum size for a Siri hosted view.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGSize hostedViewMaximumAllowedSize;
```

<a id="Discussion"></a>

## Discussion

Apps can customize the Siri interface using an Intents UI extension. The extension vends a view controller whose view contains the custom content that you want Siri to display. The size of that view controller’s view must be no larger than the size value in this property.

## See Also

### Getting Siri-related information

- [hostedViewMinimumAllowedSize](hostedviewminimumallowedsize.md): The minimum size for a Siri hosted view.
- [interfaceParametersDescription](interfaceparametersdescription%28%29.md): Returns a human-readable string describing the data that SiriKit displays to the user when you handle an intent.
