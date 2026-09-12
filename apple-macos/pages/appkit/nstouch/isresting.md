> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/isresting](https://developer.apple.com/documentation/appkit/nstouch/isresting)

# isResting (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The indicator for a resting touch.

## Declaration

```swift
var isResting: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Resting touches occur when a user simply rests their thumb on the trackpad device.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [phase](phase-swift.property.md): The current phase of the touch.
- [NSTouch.Phase](phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.

# resting (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The indicator for a resting touch.

## Declaration

```objectivec
@property (readonly, getter=isResting) BOOL resting;
```

<a id="Discussion"></a>

## Discussion

Resting touches occur when a user simply rests their thumb on the trackpad device.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [phase](phase-swift.property.md): The current phase of the touch.
- [NSTouchPhase](phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
