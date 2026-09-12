> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrunstatus/nonmonotonic](https://developer.apple.com/documentation/coretext/ctrunstatus/nonmonotonic)

# nonMonotonic (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The run isn’t in strictly increasing or decreasing order.

## Declaration

```swift
static var nonMonotonic: CTRunStatus { get }
```

<a id="Discussion"></a>

## Discussion

The run is reordered so that the string indices associated with the glyphs aren’t in strictly increasing (for left-to-right runs) or decreasing (for right-to-left runs) order.

## See Also

### Constants

- [rightToLeft](righttoleft.md): The run proceeds from right to left.
- [hasNonIdentityMatrix](hasnonidentitymatrix.md): The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.

# kCTRunStatusNonMonotonic (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The run isn’t in strictly increasing or decreasing order.

## Declaration

```objectivec
kCTRunStatusNonMonotonic
```

<a id="Discussion"></a>

## Discussion

The run is reordered so that the string indices associated with the glyphs aren’t in strictly increasing (for left-to-right runs) or decreasing (for right-to-left runs) order.

## See Also

### Constants

- [kCTRunStatusNoStatus](kctrunstatusnostatus.md): The run has no special attributes.
- [kCTRunStatusRightToLeft](righttoleft.md): The run proceeds from right to left.
- [kCTRunStatusHasNonIdentityMatrix](hasnonidentitymatrix.md): The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.
