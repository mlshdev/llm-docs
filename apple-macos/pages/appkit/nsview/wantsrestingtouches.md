> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/wantsrestingtouches](https://developer.apple.com/documentation/appkit/nsview/wantsrestingtouches)

# wantsRestingTouches (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether the view wants resting touches.

## Declaration

```swift
var wantsRestingTouches: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A resting touch occurs when a user rests their thumb on a device (for example, the glass trackpad of a MacBook). By default, these touches are not delivered and are not included in the event’s set of touches. Touches may transition in and out of resting at any time. Unless the view wants resting touches, began / ended events are simulated as touches transition from resting to active and vice versa.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates that the view does not want resting touches.

## See Also

### Handling Touch Events

- [allowedTouchTypes](allowedtouchtypes.md): The types of touch interactions the view allows.
- [candidateListTouchBarItem](candidatelisttouchbaritem.md)

# wantsRestingTouches (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value indicating whether the view wants resting touches.

## Declaration

```objectivec
@property BOOL wantsRestingTouches;
```

<a id="Discussion"></a>

## Discussion

A resting touch occurs when a user rests their thumb on a device (for example, the glass trackpad of a MacBook). By default, these touches are not delivered and are not included in the event’s set of touches. Touches may transition in and out of resting at any time. Unless the view wants resting touches, began / ended events are simulated as touches transition from resting to active and vice versa.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which indicates that the view does not want resting touches.

## See Also

### Handling Touch Events

- [allowedTouchTypes](allowedtouchtypes.md): The types of touch interactions the view allows.
- [candidateListTouchBarItem](candidatelisttouchbaritem.md)
