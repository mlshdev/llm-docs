> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrunstatus](https://developer.apple.com/documentation/coretext/ctrunstatus)

# CTRunStatus (Swift)

**Framework:** Core Text  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A bitfield that represents the disposition of the run.

## Declaration

```swift
struct CTRunStatus
```

<a id="overview"></a>

## Overview

The [CTRunGetStatus(\_:)](ctrungetstatus%28__%29.md) function passes back this bitfield to indicate the disposition of the run.

## Topics

### Constants

- [rightToLeft](ctrunstatus/righttoleft.md): The run proceeds from right to left.
- [nonMonotonic](ctrunstatus/nonmonotonic.md): The run isn’t in strictly increasing or decreasing order.
- [hasNonIdentityMatrix](ctrunstatus/hasnonidentitymatrix.md): The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.

### Initializers

- [init(rawValue:)](ctrunstatus/init%28rawvalue_%29.md): Creates a run status structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# CTRunStatus (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A bitfield that represents the disposition of the run.

## Declaration

```objectivec
enum CTRunStatus : uint32_t;
```

<a id="overview"></a>

## Overview

The [CTRunGetStatus](ctrungetstatus%28__%29.md) function passes back this bitfield to indicate the disposition of the run.

## Topics

### Constants

- [kCTRunStatusNoStatus](ctrunstatus/kctrunstatusnostatus.md): The run has no special attributes.
- [kCTRunStatusRightToLeft](ctrunstatus/righttoleft.md): The run proceeds from right to left.
- [kCTRunStatusNonMonotonic](ctrunstatus/nonmonotonic.md): The run isn’t in strictly increasing or decreasing order.
- [kCTRunStatusHasNonIdentityMatrix](ctrunstatus/hasnonidentitymatrix.md): The run requires a specific text matrix to be set in the current Core Graphics context for proper drawing.
