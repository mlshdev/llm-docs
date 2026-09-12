> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/normalizedposition](https://developer.apple.com/documentation/appkit/nstouch/normalizedposition)

# normalizedPosition (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The normalized position of the touch.

## Declaration

```swift
var normalizedPosition: NSPoint { get }
```

<a id="Discussion"></a>

## Discussion

The normalized position is a scaled value between (0.0) and (1.0,1.0), where (0.0,0.0) is the lower-left position on the touch device.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [phase](phase-swift.property.md): The current phase of the touch.
- [NSTouch.Phase](phase-swift.struct.md): The possible phases of a touch.
- [isResting](isresting.md): The indicator for a resting touch.

# normalizedPosition (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The normalized position of the touch.

## Declaration

```objectivec
@property (readonly) NSPoint normalizedPosition;
```

<a id="Discussion"></a>

## Discussion

The normalized position is a scaled value between (0.0) and (1.0,1.0), where (0.0,0.0) is the lower-left position on the touch device.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [phase](phase-swift.property.md): The current phase of the touch.
- [NSTouchPhase](phase-swift.struct.md): The possible phases of a touch.
- [resting](isresting.md): The indicator for a resting touch.
