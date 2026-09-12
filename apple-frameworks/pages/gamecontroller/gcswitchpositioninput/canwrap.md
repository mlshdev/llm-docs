> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput/canwrap](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/canwrap)

# canWrap (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.

## Declaration

```swift
var canWrap: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For non-sequential switches, this property is always [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the characteristics

- [positionRange](positionrange.md): The range of possible values for the switch.
- [isSequential](issequential.md): A Boolean value that indicates whether the position change is sequential.

# canWrap (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.

## Declaration

```objectivec
@property (readonly) BOOL canWrap;
```

<a id="Discussion"></a>

## Discussion

For non-sequential switches, this property is always [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting the characteristics

- [positionRange](positionrange.md): The range of possible values for the switch.
- [sequential](issequential.md): A Boolean value that indicates whether the position change is sequential.
