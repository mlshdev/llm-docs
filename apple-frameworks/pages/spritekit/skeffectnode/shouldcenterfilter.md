> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skeffectnode/shouldcenterfilter](https://developer.apple.com/documentation/spritekit/skeffectnode/shouldcenterfilter)

# shouldCenterFilter (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the effect node automatically sets the filter’s image center.

## Declaration

```swift
var shouldCenterFilter: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the filter has an `inputCenter` parameter, the effect node automatically sets the filter’s input center to the effect node’s origin. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Applying Core Image Filters with an Effect Node

- [Applying Special Effects to a Node’s Children](../applying-special-effects-to-a-node-s-children.md): Apply the Core Image suite of filters to child nodes of an effect node.
- [filter](filter.md): The Core Image filter to apply.
- [shouldEnableEffects](shouldenableeffects.md): A Boolean value that determines whether the effect node applies the filter to its children as they are drawn.

# shouldCenterFilter (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether the effect node automatically sets the filter’s image center.

## Declaration

```objectivec
@property (nonatomic) BOOL shouldCenterFilter;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is [true](https://developer.apple.com/documentation/swift/true) and the filter has an `inputCenter` parameter, the effect node automatically sets the filter’s input center to the effect node’s origin. The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Applying Core Image Filters with an Effect Node

- [Applying Special Effects to a Node’s Children](../applying-special-effects-to-a-node-s-children.md): Apply the Core Image suite of filters to child nodes of an effect node.
- [filter](filter.md): The Core Image filter to apply.
- [shouldEnableEffects](shouldenableeffects.md): A Boolean value that determines whether the effect node applies the filter to its children as they are drawn.
