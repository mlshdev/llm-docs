> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorpher/setweight(_:fortargetat:)](https://developer.apple.com/documentation/scenekit/scnmorpher/setweight(_:fortargetat:))

# setWeight(\_:forTargetAt:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Specifies a weight value at a specified target index.

## Declaration

```swift
func setWeight(_ weight: CGFloat, forTargetAt targetIndex: Int)
```

## Parameters

- `weight`: A number specifying the contribution of the target geometry to the blended surface, generally between `0.0` and `1.0`.
- `targetIndex`: The index of a geometry in the morpher’s [targets](targets.md) array.

<a id="Discussion"></a>

## Discussion

Target geometries and their weights determine the current form of the surface produced by the morpher. For example, if a morpher has one target whose weight is `0.5`, the form of the resulting surface will be halfway between those of the base geometry and the target geometry.

You can also animate weights implicitly or explicitly using the keypath `weights[index]`, where `index` corresponds to the `targetIndex` parameter of this method.

## See Also

### Blending between Morph Targets

- [weight(forTargetAt:)](weight%28fortargetat_%29.md): Returns the weight value for the specified target index.

# setWeight:forTargetAtIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Specifies a weight value at a specified target index.

## Declaration

```objectivec
- (void) setWeight:(CGFloat) weight forTargetAtIndex:(NSUInteger) targetIndex;
```

## Parameters

- `weight`: A number specifying the contribution of the target geometry to the blended surface, generally between `0.0` and `1.0`.
- `targetIndex`: The index of a geometry in the morpher’s [targets](targets.md) array.

<a id="Discussion"></a>

## Discussion

Target geometries and their weights determine the current form of the surface produced by the morpher. For example, if a morpher has one target whose weight is `0.5`, the form of the resulting surface will be halfway between those of the base geometry and the target geometry.

You can also animate weights implicitly or explicitly using the keypath `weights[index]`, where `index` corresponds to the `targetIndex` parameter of this method.

## See Also

### Blending between Morph Targets

- [weightForTargetAtIndex:](weight%28fortargetat_%29.md): Returns the weight value for the specified target index.
