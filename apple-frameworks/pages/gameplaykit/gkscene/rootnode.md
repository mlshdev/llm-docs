> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkscene/rootnode](https://developer.apple.com/documentation/gameplaykit/gkscene/rootnode)

# rootNode (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The SpriteKit scene managed by this [GKScene](../gkscene.md) object.

## Declaration

```swift
var rootNode: (any GKSceneRootNodeType)? { get set }
```

<a id="Discussion"></a>

## Discussion

The [GKSceneRootNodeType](../gkscenerootnodetype.md) protocol is an indirect type for game scene classes that the [GKScene](../gkscene.md) class can load. [SKScene](../../spritekit/skscene.md) is the only class currently supported for loading with the [GKScene](../gkscene.md) class.

# rootNode (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The SpriteKit scene managed by this [GKScene](../gkscene.md) object.

## Declaration

```objectivec
@property (nonatomic, nullable) id<GKSceneRootNodeType> rootNode;
```

<a id="Discussion"></a>

## Discussion

The [GKSceneRootNodeType](../gkscenerootnodetype.md) protocol is an indirect type for game scene classes that the [GKScene](../gkscene.md) class can load. [SKScene](../../spritekit/skscene.md) is the only class currently supported for loading with the [GKScene](../gkscene.md) class.
