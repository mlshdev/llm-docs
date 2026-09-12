> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcswitchpositioninput/issequential](https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/issequential)

# isSequential (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the position change is sequential.

## Declaration

```swift
var isSequential: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A sequential gear shift requires the user to move through the gears in sequence.

## See Also

### Getting the characteristics

- [positionRange](positionrange.md): The range of possible values for the switch.
- [canWrap](canwrap.md): A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.

# sequential (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the position change is sequential.

## Declaration

```objectivec
@property (readonly, getter=isSequential) BOOL sequential;
```

<a id="Discussion"></a>

## Discussion

A sequential gear shift requires the user to move through the gears in sequence.

## See Also

### Getting the characteristics

- [positionRange](positionrange.md): The range of possible values for the switch.
- [canWrap](canwrap.md): A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.
