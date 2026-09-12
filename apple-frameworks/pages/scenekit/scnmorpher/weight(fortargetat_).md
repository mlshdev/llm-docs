> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorpher/weight(fortargetat:)](https://developer.apple.com/documentation/scenekit/scnmorpher/weight(fortargetat:))

# weight(forTargetAt:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the weight value for the specified target index.

## Declaration

```swift
func weight(forTargetAt targetIndex: Int) -> CGFloat
```

## Parameters

- `targetIndex`: The index of a geometry in the morpher’s [targets](targets.md) array.

<a id="return-value"></a>

## Return Value

A number indicating the contribution of the target geometry to the blended surface, generally between `0.0` and `1.0`.

<a id="Discussion"></a>

## Discussion

Target geometries and their weights determine the current form of the surface produced by the morpher. For example, if a morpher has one target whose weight is `0.5`, the form of the resulting surface will be halfway between those of the base geometry and the target geometry.

## See Also

### Blending between Morph Targets

- [setWeight(\_:forTargetAt:)](setweight%28__fortargetat_%29.md): Specifies a weight value at a specified target index.

# weightForTargetAtIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Returns the weight value for the specified target index.

## Declaration

```objectivec
- (CGFloat) weightForTargetAtIndex:(NSUInteger) targetIndex;
```

## Parameters

- `targetIndex`: The index of a geometry in the morpher’s [targets](targets.md) array.

<a id="return-value"></a>

## Return Value

A number indicating the contribution of the target geometry to the blended surface, generally between `0.0` and `1.0`.

<a id="Discussion"></a>

## Discussion

Target geometries and their weights determine the current form of the surface produced by the morpher. For example, if a morpher has one target whose weight is `0.5`, the form of the resulting surface will be halfway between those of the base geometry and the target geometry.

## See Also

### Blending between Morph Targets

- [setWeight:forTargetAtIndex:](setweight%28__fortargetat_%29.md): Specifies a weight value at a specified target index.
