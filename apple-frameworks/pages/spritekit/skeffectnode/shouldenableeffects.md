> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skeffectnode/shouldenableeffects](https://developer.apple.com/documentation/spritekit/skeffectnode/shouldenableeffects)

# shouldEnableEffects (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the effect node applies the filter to its children as they are drawn.

## Declaration

```swift
var shouldEnableEffects: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the effect node applies the filter and blends the results. If the value is [false](https://developer.apple.com/documentation/swift/false), the effect node is ignored and its children are rendered normally. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Applying Core Image Filters with an Effect Node

- [Applying Special Effects to a Node’s Children](../applying-special-effects-to-a-node-s-children.md): Apply the Core Image suite of filters to child nodes of an effect node.
- [filter](filter.md): The Core Image filter to apply.
- [shouldCenterFilter](shouldcenterfilter.md): A Boolean value that determines whether the effect node automatically sets the filter’s image center.

# shouldEnableEffects (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the effect node applies the filter to its children as they are drawn.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldEnableEffects;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true), the effect node applies the filter and blends the results. If the value is [false](https://developer.apple.com/documentation/swift/false), the effect node is ignored and its children are rendered normally. The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Applying Core Image Filters with an Effect Node

- [Applying Special Effects to a Node’s Children](../applying-special-effects-to-a-node-s-children.md): Apply the Core Image suite of filters to child nodes of an effect node.
- [filter](filter.md): The Core Image filter to apply.
- [shouldCenterFilter](shouldcenterfilter.md): A Boolean value that determines whether the effect node automatically sets the filter’s image center.
