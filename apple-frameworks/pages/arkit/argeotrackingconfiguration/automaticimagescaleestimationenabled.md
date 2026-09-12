> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/argeotrackingconfiguration/automaticimagescaleestimationenabled](https://developer.apple.com/documentation/arkit/argeotrackingconfiguration/automaticimagescaleestimationenabled)

# automaticImageScaleEstimationEnabled (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A flag that instructs the framework to estimate and set the scale of a detected or tracked image on your behalf.

## Declaration

```swift
var automaticImageScaleEstimationEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true), ARKit uses its knowledge of the world to set an image anchor’s [estimatedScaleFactor](../arimageanchor/estimatedscalefactor.md) property, which corrects the image anchor’s position in the physical environment.

Enable this property when you want to detect different-sized versions of a reference image. ARKit must know the physical size of an image in the real world to accurately estimate its real-world position. Enable this property to tell ARKit to estimate a recognized image’s physical size before it calculates the real-world position.

## See Also

### Detecting or tracking images

- [detectionImages](detectionimages.md): A set of images that ARKit searches for in the user’s environment.
- [maximumNumberOfTrackedImages](maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.

# automaticImageScaleEstimationEnabled (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+

A flag that instructs the framework to estimate and set the scale of a detected or tracked image on your behalf.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL automaticImageScaleEstimationEnabled;
```

<a id="Discussion"></a>

## Discussion

If set to [true](https://developer.apple.com/documentation/swift/true), ARKit uses its knowledge of the world to set an image anchor’s [estimatedScaleFactor](../arimageanchor/estimatedscalefactor.md) property, which corrects the image anchor’s position in the physical environment.

Enable this property when you want to detect different-sized versions of a reference image. ARKit must know the physical size of an image in the real world to accurately estimate its real-world position. Enable this property to tell ARKit to estimate a recognized image’s physical size before it calculates the real-world position.

## See Also

### Detecting or tracking images

- [detectionImages](detectionimages.md): A set of images that ARKit searches for in the user’s environment.
- [maximumNumberOfTrackedImages](maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.
