> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrunstatus/righttoleft](https://developer.apple.com/documentation/coretext/ctrunstatus/righttoleft)

# rightToLeft (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The run proceeds from right to left.

## Declaration

```swift
static var rightToLeft: CTRunStatus { get }
```

## See Also

### Constants

- [nonMonotonic](nonmonotonic.md): The run isn’t in strictly increasing or decreasing order.
- [hasNonIdentityMatrix](hasnonidentitymatrix.md): The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.

# kCTRunStatusRightToLeft (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The run proceeds from right to left.

## Declaration

```objectivec
kCTRunStatusRightToLeft
```

## See Also

### Constants

- [kCTRunStatusNoStatus](kctrunstatusnostatus.md): The run has no special attributes.
- [kCTRunStatusNonMonotonic](nonmonotonic.md): The run isn’t in strictly increasing or decreasing order.
- [kCTRunStatusHasNonIdentityMatrix](hasnonidentitymatrix.md): The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.
