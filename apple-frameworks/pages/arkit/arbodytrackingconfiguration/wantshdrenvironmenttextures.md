> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arbodytrackingconfiguration/wantshdrenvironmenttextures](https://developer.apple.com/documentation/arkit/arbodytrackingconfiguration/wantshdrenvironmenttextures)

# wantsHDREnvironmentTextures (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that instructs ARKit to create environment textures in HDR format.

## Declaration

```swift
var wantsHDREnvironmentTextures: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If your renderer supports HDR environment textures, this feature effects more realistic reflections.

![Screenshot showing low and high dynamic range environment textures in a side by side comparison.](https://developer.apple.com/images/com.apple.arkit/media-3281347@2x.png)

RealityKit and SceneKit both support HDR environment textures. For more information, see [Adding realistic reflections to an AR experience](../adding-realistic-reflections-to-an-ar-experience.md).

## See Also

### Adding Realistic Reflections

- [environmentTexturing](environmenttexturing.md): The behavior ARKit uses for generating environment textures.

# wantsHDREnvironmentTextures (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A flag that instructs ARKit to create environment textures in HDR format.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL wantsHDREnvironmentTextures;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). If your renderer supports HDR environment textures, this feature effects more realistic reflections.

![Screenshot showing low and high dynamic range environment textures in a side by side comparison.](https://developer.apple.com/images/com.apple.arkit/media-3281347@2x.png)

RealityKit and SceneKit both support HDR environment textures. For more information, see [Adding realistic reflections to an AR experience](../adding-realistic-reflections-to-an-ar-experience.md).

## See Also

### Adding Realistic Reflections

- [environmentTexturing](environmenttexturing.md): The behavior ARKit uses for generating environment textures.
