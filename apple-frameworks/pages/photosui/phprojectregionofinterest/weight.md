> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectregionofinterest/weight](https://developer.apple.com/documentation/photosui/phprojectregionofinterest/weight)

# weight (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The face region’s weight.

## Declaration

```swift
var weight: Double { get }
```

<a id="Discussion"></a>

## Discussion

The `weight` of a region of interest represents the pervasiveness of the face across the project as a whole. All regions of interest with the same identifier share the same weight. The values range between `0` and `1`. The default value is `0.5`.

![Four photos containing five different human faces, each showing up at different frequencies](https://developer.apple.com/images/com.apple.photokit/media-3030188@2x.png)

For projects focused on animation or transition between assets, focus on the regions with the highest weight to ensure that your presentation features areas of greatest interest to the user.

## See Also

### Determining Region Properties

- [rect](rect.md): The rectangle representing the region’s location.
- [identifier](identifier-swift.property.md): The region’s unique identifier.
- [quality](quality.md): The region’s quality.

# weight (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

The face region’s weight.

## Declaration

```objectivec
@property (nonatomic, readonly) double weight;
```

<a id="Discussion"></a>

## Discussion

The `weight` of a region of interest represents the pervasiveness of the face across the project as a whole. All regions of interest with the same identifier share the same weight. The values range between `0` and `1`. The default value is `0.5`.

![Four photos containing five different human faces, each showing up at different frequencies](https://developer.apple.com/images/com.apple.photokit/media-3030188@2x.png)

For projects focused on animation or transition between assets, focus on the regions with the highest weight to ensure that your presentation features areas of greatest interest to the user.

## See Also

### Determining Region Properties

- [rect](rect.md): The rectangle representing the region’s location.
- [identifier](identifier-swift.property.md): The region’s unique identifier.
- [quality](quality.md): The region’s quality.
