> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertouchbaritem/isenabled](https://developer.apple.com/documentation/appkit/nssharingservicepickertouchbaritem/isenabled)

# isEnabled (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that specifies whether the sharing service picker item is enabled.

## Declaration

```swift
var isEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the sharing button is enabled.

If the sharing popover is currently visible when this property is changed to [false](https://developer.apple.com/documentation/swift/false), the popover is dismissed.

# enabled (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that specifies whether the sharing service picker item is enabled.

## Declaration

```objectivec
@property (getter=isEnabled) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the sharing button is enabled.

If the sharing popover is currently visible when this property is changed to [false](https://developer.apple.com/documentation/swift/false), the popover is dismissed.
