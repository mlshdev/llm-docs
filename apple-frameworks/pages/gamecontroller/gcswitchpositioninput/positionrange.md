> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcswitchpositioninput/positionrange

# positionRange (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The range of possible values for the switch.

## Declaration

```swift
var positionRange: NSRange { get }
```

## See Also

### Getting the characteristics

- [isSequential](issequential.md): A Boolean value that indicates whether the position change is sequential.
- [canWrap](canwrap.md): A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.

# positionRange (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The range of possible values for the switch.

## Declaration

```objectivec
@property (readonly) NSRange positionRange;
```

## See Also

### Getting the characteristics

- [sequential](issequential.md): A Boolean value that indicates whether the position change is sequential.
- [canWrap](canwrap.md): A Boolean value that indicates whether the position value wraps when it reaches the range’s minimum or maximum value.
