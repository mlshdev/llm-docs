> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusguide/isenabled](https://developer.apple.com/documentation/uikit/uifocusguide/isenabled)

# isEnabled (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the guide is focusable.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), then the guide may be focusable. Some conditions, defined by the system, may prevent the guide from being focusable even if it’s enabled, such as when the guide’s frame overlaps with the currently focused view. However, if this property is set to [false](https://developer.apple.com/documentation/swift/false), then the guide isn’t focusable.

## See Also

### Enabling focus

- [preferredFocusEnvironments](preferredfocusenvironments.md): An array of focus environments to which the guide directs focus, ordered by priority.
- [preferredFocusedView](preferredfocusedview.md): Deprecated. The view that the focus will be redirected to if this guide is focused.

# enabled (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the guide is focusable.

## Declaration

```objectivec
@property (nonatomic, getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) (the default), then the guide may be focusable. Some conditions, defined by the system, may prevent the guide from being focusable even if it’s enabled, such as when the guide’s frame overlaps with the currently focused view. However, if this property is set to [false](https://developer.apple.com/documentation/swift/false), then the guide isn’t focusable.

## See Also

### Enabling focus

- [preferredFocusEnvironments](preferredfocusenvironments.md): An array of focus environments to which the guide directs focus, ordered by priority.
- [preferredFocusedView](preferredfocusedview.md): Deprecated. The view that the focus will be redirected to if this guide is focused.
