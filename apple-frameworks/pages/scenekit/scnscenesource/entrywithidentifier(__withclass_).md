> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/entrywithidentifier(_:withclass:)](https://developer.apple.com/documentation/scenekit/scnscenesource/entrywithidentifier(_:withclass:))

# entryWithIdentifier(\_:withClass:)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads and returns a specific object in the scene source.

## Declaration

```swift
func entryWithIdentifier<T>(_ uid: String, withClass entryClass: T.Type) -> T? where T : AnyObject
```

## Parameters

- `uid`: The unique identifier of an object in the scene source.
- `entryClass`: The class of object to load.

<a id="return-value"></a>

## Return Value

A new SceneKit object (of the specified class) containing the requested scene source entry, or `nil` if no such object exists in the scene source.

<a id="Discussion"></a>

## Discussion

SceneKit recognizes objects of the following classes in scene files:

- [CAAnimation](../../quartzcore/caanimation.md)
- [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (macOS) or [UIImage](../../uikit/uiimage.md) (iOS/watchOS/tvOS)
- [SCNCamera](../scncamera.md)
- [SCNGeometry](../scngeometry.md)
- [SCNLight](../scnlight.md)
- [SCNMaterial](../scnmaterial.md)
- [SCNMorpher](../scnmorpher.md)
- [SCNNode](../scnnode.md)
- [SCNScene](../scnscene.md)
- [SCNSkinner](../scnskinner.md)

Each object in a scene file has an identifier that is unique for its class. These identifiers are determined by the software that created the scene file—for example, they may be descriptive names assigned by an artist using 3D authoring tools. For SceneKit classes with a `name` property (such as nodes and geometries), the name of an object loaded from a scene file is based on its identifier in the scene file.

If you don’t have the identifier for an object you want to load, use the [identifiersOfEntries(withClass:)](identifiersofentries%28withclass_%29.md) method to find the identifiers for objects in a scene file. You can also see the identifier for each object in a scene file when viewing it in Xcode’s scene editor.

Calling this method instantiates an object of the specified SceneKit class and loads all content from the scene file corresponding to the requested entry. Keep in mind that loading one SceneKit object may also load other objects and their contents, such as the lights, cameras, or geometries attached to a node.

For example, the following method finds the identifier for a geometry and then loads it (and any animations or materials attached to it):

```swift
func loadSpaceship(from sceneSource: SCNSceneSource) -> SCNGeometry? {
    let identifiers = sceneSource.identifiersOfEntries(withClass: SCNGeometry.self)
    guard let identifier = identifiers.filter({ $0.contains("spaceship") }).first
        else { return nil } // no matching identifier
    return sceneSource.entryWithIdentifier(identifier, withClass: SCNGeometry.self)
}
```

## See Also

### Loading and Inspecting Scene Elements

- [identifiersOfEntries(withClass:)](identifiersofentries%28withclass_%29.md): Returns the identifiers for all objects in the scene source of the specified class.
- [entries(passingTest:)](entries%28passingtest_%29.md): Loads and returns all objects in the scene source that pass the test in a given block.
