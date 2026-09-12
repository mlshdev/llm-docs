> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkscene/entities](https://developer.apple.com/documentation/gameplaykit/gkscene/entities)

# entities (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The list of GameplayKit entities managed by the scene.

## Declaration

```swift
var entities: [GKEntity] { get }
```

<a id="Discussion"></a>

## Discussion

When you add entities (and their components) to a scene in the Xcode SpriteKit scene editor, Xcode automatically adds them to this array.

## See Also

### Managing Entities and Components

- [addEntity(\_:)](addentity%28__%29.md): Adds a GameplayKit entity to the list of entities managed by the scene.
- [removeEntity(\_:)](removeentity%28__%29.md): Removes a GameplayKit entity from the list of entities managed by the scene.

# entities (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The list of GameplayKit entities managed by the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<GKEntity *> * entities;
```

<a id="Discussion"></a>

## Discussion

When you add entities (and their components) to a scene in the Xcode SpriteKit scene editor, Xcode automatically adds them to this array.

## See Also

### Managing Entities and Components

- [addEntity:](addentity%28__%29.md): Adds a GameplayKit entity to the list of entities managed by the scene.
- [removeEntity:](removeentity%28__%29.md): Removes a GameplayKit entity from the list of entities managed by the scene.
