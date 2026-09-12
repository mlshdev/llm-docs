> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arworldtrackingconfiguration/detectionimages](https://developer.apple.com/documentation/arkit/arworldtrackingconfiguration/detectionimages)

# detectionImages (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A set of images that ARKit searches for in the user’s environment.

## Declaration

```swift
var detectionImages: Set<ARReferenceImage>! { get set }
```

<a id="Discussion"></a>

## Discussion

Add members to this set for each image that ARKit searches for in the user’s environment. When ARKit *detects* a matching image, the framework creates an [ARImageAnchor](../arimageanchor.md) object and adds it to the session.

To define the reference images that this property contains, create an asset catalog in Xcode or create [ARReferenceImage](../arreferenceimage.md) objects programmatically. For more information, see [Detecting Images in an AR Experience](../detecting-images-in-an-ar-experience.md).

If you set a nonzero value for [maximumNumberOfTrackedImages](maximumnumberoftrackedimages.md), ARKit enables image *tracking*, which continuously updates the transform for up to four of the reference image anchors as the session progresses. For an example, see [Tracking and altering images](../tracking-and-altering-images.md).

<a id="Limit-Reference-Images-for-Performance"></a>

### Limit Reference Images for Performance

Image detection accuracy and performance may decline as the number of images in this set increases. For best results, limit your detection image count to no more than around 100.

To detect more than 100 images, your app can allocate a certain amount of time for the first 100 images before moving on to the next 100, and so on. When you update the contents of this property, call [run(\_:options:)](../arsession/run%28__options_%29.md) again with your app’s configuration to effect the change.

## See Also

### Detecting or Tracking Images

- [maximumNumberOfTrackedImages](maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.
- [automaticImageScaleEstimationEnabled](automaticimagescaleestimationenabled.md): A flag that instructs the framework to estimate and set the scale of a detected or tracked image on your behalf.

# detectionImages (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A set of images that ARKit searches for in the user’s environment.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSSet<ARReferenceImage *> * detectionImages;
```

<a id="Discussion"></a>

## Discussion

Add members to this set for each image that ARKit searches for in the user’s environment. When ARKit *detects* a matching image, the framework creates an [ARImageAnchor](../arimageanchor.md) object and adds it to the session.

To define the reference images that this property contains, create an asset catalog in Xcode or create [ARReferenceImage](../arreferenceimage.md) objects programmatically. For more information, see [Detecting Images in an AR Experience](../detecting-images-in-an-ar-experience.md).

If you set a nonzero value for [maximumNumberOfTrackedImages](maximumnumberoftrackedimages.md), ARKit enables image *tracking*, which continuously updates the transform for up to four of the reference image anchors as the session progresses. For an example, see [Tracking and altering images](../tracking-and-altering-images.md).

<a id="Limit-Reference-Images-for-Performance"></a>

### Limit Reference Images for Performance

Image detection accuracy and performance may decline as the number of images in this set increases. For best results, limit your detection image count to no more than around 100.

To detect more than 100 images, your app can allocate a certain amount of time for the first 100 images before moving on to the next 100, and so on. When you update the contents of this property, call [runWithConfiguration:options:](../arsession/run%28__options_%29.md) again with your app’s configuration to effect the change.

## See Also

### Detecting or Tracking Images

- [maximumNumberOfTrackedImages](maximumnumberoftrackedimages.md): The number of image anchors to monitor closely for position and orientation updates.
- [automaticImageScaleEstimationEnabled](automaticimagescaleestimationenabled.md): A flag that instructs the framework to estimate and set the scale of a detected or tracked image on your behalf.
