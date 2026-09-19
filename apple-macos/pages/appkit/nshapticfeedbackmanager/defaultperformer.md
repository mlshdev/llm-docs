> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nshapticfeedbackmanager/defaultperformer

# defaultPerformer (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Requests a haptic feedback performer object that is based on the current input device, accessibility settings, and user preferences.

## Declaration

```swift
class var defaultPerformer: any NSHapticFeedbackPerformer { get }
```

<a id="Discussion"></a>

## Discussion

This method returns a haptic feedback performer object of type `NSHapticFeedbackPerformer` that is based on the current input device, accessibility settings, and user preferences. Because the current input device may change at any time, you should request the default performer whenever you need to provide haptic feedback to the user.

## See Also

### Related Documentation

- [NSHapticFeedbackPerformer](../nshapticfeedbackperformer.md): A set of methods and constants that a haptic feedback performer implements.

# defaultPerformer (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Requests a haptic feedback performer object that is based on the current input device, accessibility settings, and user preferences.

## Declaration

```objectivec
@property (class, strong, readonly) id<NSHapticFeedbackPerformer> defaultPerformer;
```

<a id="Discussion"></a>

## Discussion

This method returns a haptic feedback performer object of type `NSHapticFeedbackPerformer` that is based on the current input device, accessibility settings, and user preferences. Because the current input device may change at any time, you should request the default performer whenever you need to provide haptic feedback to the user.

## See Also

### Related Documentation

- [NSHapticFeedbackPerformer](../nshapticfeedbackperformer.md): A set of methods and constants that a haptic feedback performer implements.
