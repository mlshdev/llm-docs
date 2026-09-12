> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrtreesplitstrategy](https://developer.apple.com/documentation/gameplaykit/gkrtreesplitstrategy)

# GKRTreeSplitStrategy (Swift)

**Framework:** GameplayKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options that control how a tree balances its internal structure when adding elements, used with the [addElement(\_:boundingRectMin:boundingRectMax:splitStrategy:)](gkrtree/addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method.

## Declaration

```swift
enum GKRTreeSplitStrategy
```

## Topics

### Constants

- [GKRTreeSplitStrategy.halve](gkrtreesplitstrategy/halve.md): An option to split groups of elements in half based on the order they were added to the tree in.
- [GKRTreeSplitStrategy.linear](gkrtreesplitstrategy/linear.md): An option to split groups of elements by finding a line that divides space so that half of the elements are on either side.
- [GKRTreeSplitStrategy.quadratic](gkrtreesplitstrategy/quadratic.md): An option to split groups of elements by finding the subgroups that occupy the least area.
- [GKRTreeSplitStrategy.reduceOverlap](gkrtreesplitstrategy/reduceoverlap.md): An option to split groups of elements by finding the subgroups whose areas overlap the least.

### Initializers

- [init(rawValue:)](gkrtreesplitstrategy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# GKRTreeSplitStrategy (Objective-C)

**Framework:** GameplayKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options that control how a tree balances its internal structure when adding elements, used with the [addElement:boundingRectMin:boundingRectMax:splitStrategy:](gkrtree/addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method.

## Declaration

```objectivec
enum GKRTreeSplitStrategy : NSInteger;
```

## Topics

### Constants

- [GKRTreeSplitStrategyHalve](gkrtreesplitstrategy/halve.md): An option to split groups of elements in half based on the order they were added to the tree in.
- [GKRTreeSplitStrategyLinear](gkrtreesplitstrategy/linear.md): An option to split groups of elements by finding a line that divides space so that half of the elements are on either side.
- [GKRTreeSplitStrategyQuadratic](gkrtreesplitstrategy/quadratic.md): An option to split groups of elements by finding the subgroups that occupy the least area.
- [GKRTreeSplitStrategyReduceOverlap](gkrtreesplitstrategy/reduceoverlap.md): An option to split groups of elements by finding the subgroups whose areas overlap the least.
