> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phprojectregionofinterest/quality](https://developer.apple.com/documentation/photosui/phprojectregionofinterest/quality)

# quality (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The region’s quality.

## Declaration

```swift
var quality: Double { get }
```

<a id="Discussion"></a>

## Discussion

The `quality` score represents the quality of the region of interest in the individual asset, based on factors like sharpness, visibility, and prominence in the photo. Values range from `0` to `1`, with a default of `0.5`. Different regions of interest with the same identifier may have different quality values. If a project must choose between multiple assets containing the same region of interest, use the `quality` metric to choose the best representative.

![Two photos containing the same human faces, one with low quality, the other with high quality](https://developer.apple.com/images/com.apple.photokit/media-3030183@2x.png)

## See Also

### Determining Region Properties

- [rect](rect.md): The rectangle representing the region’s location.
- [identifier](identifier-swift.property.md): The region’s unique identifier.
- [weight](weight.md): The face region’s weight.

# quality (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The region’s quality.

## Declaration

```objectivec
@property (nonatomic, readonly) double quality;
```

<a id="Discussion"></a>

## Discussion

The `quality` score represents the quality of the region of interest in the individual asset, based on factors like sharpness, visibility, and prominence in the photo. Values range from `0` to `1`, with a default of `0.5`. Different regions of interest with the same identifier may have different quality values. If a project must choose between multiple assets containing the same region of interest, use the `quality` metric to choose the best representative.

![Two photos containing the same human faces, one with low quality, the other with high quality](https://developer.apple.com/images/com.apple.photokit/media-3030183@2x.png)

## See Also

### Determining Region Properties

- [rect](rect.md): The rectangle representing the region’s location.
- [identifier](identifier-swift.property.md): The region’s unique identifier.
- [weight](weight.md): The face region’s weight.
