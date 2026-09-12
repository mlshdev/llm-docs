> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrandomsource/init()](https://developer.apple.com/documentation/gameplaykit/gkrandomsource/init())

# init() (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new random source object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

An independent random source.

<a id="Discussion"></a>

## Discussion

This initializer returns a new random source instance that does not share state with any other randomizer and is suitable for most gameplay uses. Which random source class this initializer creates is may change between OS releases (currently, this initializer returns a [GKARC4RandomSource](../gkarc4randomsource.md) instance). Use this initializer when the choice of randomization algorithm does not matter. If you need a specific randomization algorithm, call the initializer for a specific [GKRandomSource](../gkrandomsource.md) subclass.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# init (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new random source object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

An independent random source.

<a id="Discussion"></a>

## Discussion

This initializer returns a new random source instance that does not share state with any other randomizer and is suitable for most gameplay uses. Which random source class this initializer creates is may change between OS releases (currently, this initializer returns a [GKARC4RandomSource](../gkarc4randomsource.md) instance). Use this initializer when the choice of randomization algorithm does not matter. If you need a specific randomization algorithm, call the initializer for a specific [GKRandomSource](../gkrandomsource.md) subclass.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).
