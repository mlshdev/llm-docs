> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/identity](https://developer.apple.com/documentation/appkit/nstouch/identity)

# identity (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The changes to a particular touch during its lifetime.

## Declaration

```swift
var identity: any NSCopying & NSObjectProtocol { get }
```

<a id="Discussion"></a>

## Discussion

While touch identities may be re-used, they are unique during the life of the touch, even when multiple devices are present.

Identity objects implement the [NSCopying](https://developer.apple.com/documentation/foundation/nscopying) protocol so that they may be used as keys in an [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary). Use isEqual: to compare two touch identities.

## See Also

### Using Touch Properties

- [phase](phase-swift.property.md): The current phase of the touch.
- [NSTouch.Phase](phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
- [isResting](isresting.md): The indicator for a resting touch.

# identity (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The changes to a particular touch during its lifetime.

## Declaration

```objectivec
@property (strong, readonly) id<NSCopying,NSObject> identity;
```

<a id="Discussion"></a>

## Discussion

While touch identities may be re-used, they are unique during the life of the touch, even when multiple devices are present.

Identity objects implement the [NSCopying](https://developer.apple.com/documentation/foundation/nscopying) protocol so that they may be used as keys in an [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary). Use isEqual: to compare two touch identities.

## See Also

### Using Touch Properties

- [phase](phase-swift.property.md): The current phase of the touch.
- [NSTouchPhase](phase-swift.struct.md): The possible phases of a touch.
- [normalizedPosition](normalizedposition.md): The normalized position of the touch.
- [resting](isresting.md): The indicator for a resting touch.
