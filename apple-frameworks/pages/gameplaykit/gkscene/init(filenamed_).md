> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkscene/init(filenamed:)](https://developer.apple.com/documentation/gameplaykit/gkscene/init(filenamed:))

# init(fileNamed:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Loads the specified SpriteKit scene file, creating a [GKScene](../gkscene.md) object containing the SpriteKit scene and associated GameplayKit objects.

## Declaration

```swift
convenience init?(fileNamed filename: String)
```

## Parameters

- `filename`: The name of a scene file in your app’s main bundle.

<a id="return-value"></a>

## Return Value

A new GameplayKit scene.

<a id="Discussion"></a>

## Discussion

Use this initializer to load SpriteKit scenes (`.sks` files) created in the Xcode SpriteKit scene editor that contain associated GameplayKit entities, components, and pathfinding graphs.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# sceneWithFileNamed: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Loads the specified SpriteKit scene file, creating a [GKScene](../gkscene.md) object containing the SpriteKit scene and associated GameplayKit objects.

## Declaration

```objectivec
+ (instancetype) sceneWithFileNamed:(NSString *) filename;
```

## Parameters

- `filename`: The name of a scene file in your app’s main bundle.

<a id="return-value"></a>

## Return Value

A new GameplayKit scene.

<a id="Discussion"></a>

## Discussion

Use this initializer to load SpriteKit scenes (`.sks` files) created in the Xcode SpriteKit scene editor that contain associated GameplayKit entities, components, and pathfinding graphs.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).
