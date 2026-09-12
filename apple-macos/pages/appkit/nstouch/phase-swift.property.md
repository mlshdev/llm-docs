> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/phase-swift.property](https://developer.apple.com/documentation/appkit/nstouch/phase-swift.property)

# phase (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current phase of the touch.

## Declaration

```swift
var phase: NSTouch.Phase { get }
```

<a id="Discussion"></a>

## Discussion

See [NSTouch.Phase](phase-swift.struct.md) for possible values.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [NSTouch.Phase](phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
- [isResting](isresting.md): The indicator for a resting touch.

# phase (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The current phase of the touch.

## Declaration

```objectivec
@property (readonly) NSTouchPhase phase;
```

<a id="Discussion"></a>

## Discussion

See [NSTouchPhase](phase-swift.struct.md) for possible values.

## See Also

### Using Touch Properties

- [identity](identity.md): The changes to a particular touch during its lifetime.
- [NSTouchPhase](phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
- [resting](isresting.md): The indicator for a resting touch.
