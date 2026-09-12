> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/levelsofdetail](https://developer.apple.com/documentation/scenekit/scngeometry/levelsofdetail)

# levelsOfDetail (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An array of [SCNLevelOfDetail](../scnlevelofdetail.md) objects for managing the geometry’s appearance when viewed from far away.

## Declaration

```swift
var levelsOfDetail: [SCNLevelOfDetail]? { get set }
```

<a id="Discussion"></a>

## Discussion

Because rendering a complex geometry incurs a performance cost, you can use level-of-detail objects to substitute simpler geometries in its place as its distance from the point of view camera increases (or its apparent size decreases). For details, see [SCNLevelOfDetail](../scnlevelofdetail.md).

## See Also

### Optimizing Level of Detail

- [SCNLevelOfDetail](../scnlevelofdetail.md): An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.

# levelsOfDetail (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

An array of [SCNLevelOfDetail](../scnlevelofdetail.md) objects for managing the geometry’s appearance when viewed from far away.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<SCNLevelOfDetail *> * levelsOfDetail;
```

<a id="Discussion"></a>

## Discussion

Because rendering a complex geometry incurs a performance cost, you can use level-of-detail objects to substitute simpler geometries in its place as its distance from the point of view camera increases (or its apparent size decreases). For details, see [SCNLevelOfDetail](../scnlevelofdetail.md).

## See Also

### Optimizing Level of Detail

- [SCNLevelOfDetail](../scnlevelofdetail.md): An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.
