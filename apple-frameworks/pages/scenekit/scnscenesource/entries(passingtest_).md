> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenesource/entries(passingtest:)](https://developer.apple.com/documentation/scenekit/scnscenesource/entries(passingtest:))

# entries(passingTest:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Loads and returns all objects in the scene source that pass the test in a given block.

## Declaration

```swift
func entries(passingTest predicate: (Any, String, UnsafeMutablePointer<ObjCBool>) -> Bool) -> [Any]
```

## Parameters

- `predicate`: The block to be applied to each object in the scene source.

  The block takes three parameters:

  - **entry**: The object to be tested.
  - **identifier**: The unique identifier of the object in the scene source.
  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) within the block to abort further processing of the scene source’s contents.

  The block returns a Boolean value indicating whether the entry object passed the test and should be included in the method’s returned array.

<a id="return-value"></a>

## Return Value

An array of SceneKit objects from the scene source that pass the test.

<a id="Discussion"></a>

## Discussion

SceneKit recognizes objects of the following classes in scene files:

- [CAAnimation](../../quartzcore/caanimation.md)
- [NSImage](https://developer.apple.com/documentation/appkit/nsimage)
- [SCNCamera](../scncamera.md)
- [SCNGeometry](../scngeometry.md)
- [SCNLight](../scnlight.md)
- [SCNMaterial](../scnmaterial.md)
- [SCNMorpher](../scnmorpher.md)
- [SCNNode](../scnnode.md)
- [SCNScene](../scnscene.md)
- [SCNSkinner](../scnskinner.md)

Each object in a scene file has an identifier that is unique for its class. These identifiers are determined by the software that created the scene file—for example, they may be descriptive names assigned by an artist using 3D authoring tools. For SceneKit classes with a [name](../scnnode/name.md) property (such as nodes and geometries), the name of an object loaded from a scene file is based on its identifier in the scene file.

Use this method to selectively load objects from a scene source matching criteria you specify. For example, the following code loads from a scene file only the nodes that have attached geometry:

```objc
NSArray *geometryNodes = [sceneSource entriesPassingTest:^BOOL(id entry, NSString *identifier, BOOL *stop) {
    if ([entry isKindOfClass:[SCNNode class]]) {
        SCNNode *node = (SCNNode *)entry;
        return (node.geometry != nil);
    } else {
        return NO;
    }
}];
```

## See Also

### Loading and Inspecting Scene Elements

- [identifiersOfEntries(withClass:)](identifiersofentries%28withclass_%29.md): Returns the identifiers for all objects in the scene source of the specified class.
- [entryWithIdentifier(\_:withClass:)](entrywithidentifier%28__withclass_%29.md): Deprecated. Loads and returns a specific object in the scene source.

# entriesPassingTest: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Loads and returns all objects in the scene source that pass the test in a given block.

## Declaration

```objectivec
- (NSArray<id> *) entriesPassingTest:(BOOL (^)(id entry, NSString *identifier, BOOL *stop)) predicate;
```

## Parameters

- `predicate`: The block to be applied to each object in the scene source.

  The block takes three parameters:

  - **entry**: The object to be tested.
  - **identifier**: The unique identifier of the object in the scene source.
  - **stop**: A reference to a Boolean value. Set `*stop` to [true](https://developer.apple.com/documentation/swift/true) within the block to abort further processing of the scene source’s contents.

  The block returns a Boolean value indicating whether the entry object passed the test and should be included in the method’s returned array.

<a id="return-value"></a>

## Return Value

An array of SceneKit objects from the scene source that pass the test.

<a id="Discussion"></a>

## Discussion

SceneKit recognizes objects of the following classes in scene files:

- [CAAnimation](../../quartzcore/caanimation.md)
- [NSImage](https://developer.apple.com/documentation/appkit/nsimage)
- [SCNCamera](../scncamera.md)
- [SCNGeometry](../scngeometry.md)
- [SCNLight](../scnlight.md)
- [SCNMaterial](../scnmaterial.md)
- [SCNMorpher](../scnmorpher.md)
- [SCNNode](../scnnode.md)
- [SCNScene](../scnscene.md)
- [SCNSkinner](../scnskinner.md)

Each object in a scene file has an identifier that is unique for its class. These identifiers are determined by the software that created the scene file—for example, they may be descriptive names assigned by an artist using 3D authoring tools. For SceneKit classes with a [name](../scnnode/name.md) property (such as nodes and geometries), the name of an object loaded from a scene file is based on its identifier in the scene file.

Use this method to selectively load objects from a scene source matching criteria you specify. For example, the following code loads from a scene file only the nodes that have attached geometry:

```objc
NSArray *geometryNodes = [sceneSource entriesPassingTest:^BOOL(id entry, NSString *identifier, BOOL *stop) {
    if ([entry isKindOfClass:[SCNNode class]]) {
        SCNNode *node = (SCNNode *)entry;
        return (node.geometry != nil);
    } else {
        return NO;
    }
}];
```

## See Also

### Loading and Inspecting Scene Elements

- [identifiersOfEntriesWithClass:](identifiersofentries%28withclass_%29.md): Returns the identifiers for all objects in the scene source of the specified class.
- [entryWithIdentifier:withClass:](entrywithidentifier_withclass_.md): Deprecated. Loads and returns a specific object in the scene source.
