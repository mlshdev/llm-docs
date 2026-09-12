> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage/physicalsize](https://developer.apple.com/documentation/arkit/arreferenceimage/physicalsize)

# physicalSize (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The real-world dimensions, in meters, of the image.

## Declaration

```swift
var physicalSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

To accurately recognize the position and orientation of an image in the AR environment, ARKit must know the image’s physical size. You provide this information when creating an AR reference image in your Xcode project’s asset catalog, or when programmatically creating an [ARReferenceImage](../arreferenceimage.md).

When you want to recognize different-sized versions of a reference image, you set [automaticImageScaleEstimationEnabled](../arworldtrackingconfiguration/automaticimagescaleestimationenabled.md) to [true](https://developer.apple.com/documentation/swift/true), and in this case, ARKit disregards `physicalSize`.

## See Also

### Examining a Reference Image

- [name](name.md): A descriptive name for the image.
- [resourceGroupName](resourcegroupname.md): The AR resource group name for this image.

# physicalSize (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The real-world dimensions, in meters, of the image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize physicalSize;
```

<a id="Discussion"></a>

## Discussion

To accurately recognize the position and orientation of an image in the AR environment, ARKit must know the image’s physical size. You provide this information when creating an AR reference image in your Xcode project’s asset catalog, or when programmatically creating an [ARReferenceImage](../arreferenceimage.md).

When you want to recognize different-sized versions of a reference image, you set [automaticImageScaleEstimationEnabled](../arworldtrackingconfiguration/automaticimagescaleestimationenabled.md) to [true](https://developer.apple.com/documentation/swift/true), and in this case, ARKit disregards `physicalSize`.

## See Also

### Examining a Reference Image

- [name](name.md): A descriptive name for the image.
- [resourceGroupName](resourcegroupname.md): The AR resource group name for this image.
