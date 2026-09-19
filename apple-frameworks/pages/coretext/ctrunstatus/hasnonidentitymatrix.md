> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretext/ctrunstatus/hasnonidentitymatrix

# hasNonIdentityMatrix (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.

## Declaration

```swift
static var hasNonIdentityMatrix: CTRunStatus { get }
```

## See Also

### Constants

- [rightToLeft](righttoleft.md): The run proceeds from right to left.
- [nonMonotonic](nonmonotonic.md): The run isn’t in strictly increasing or decreasing order.

# kCTRunStatusHasNonIdentityMatrix (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.

## Declaration

```objectivec
kCTRunStatusHasNonIdentityMatrix
```

## See Also

### Constants

- [kCTRunStatusNoStatus](kctrunstatusnostatus.md): The run has no special attributes.
- [kCTRunStatusRightToLeft](righttoleft.md): The run proceeds from right to left.
- [kCTRunStatusNonMonotonic](nonmonotonic.md): The run isn’t in strictly increasing or decreasing order.
