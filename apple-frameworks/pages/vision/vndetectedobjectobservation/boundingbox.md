> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectedobjectobservation/boundingbox](https://developer.apple.com/documentation/vision/vndetectedobjectobservation/boundingbox)

# boundingBox (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The bounding box of the object that the request detects.

## Declaration

```swift
var boundingBox: CGRect { get }
```

<a id="Discussion"></a>

## Discussion

The system normalizes the coordinates to the dimensions of the processed image, with the origin at the lower-left corner of the image.

# boundingBox (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The bounding box of the object that the request detects.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGRect boundingBox;
```

<a id="Discussion"></a>

## Discussion

The system normalizes the coordinates to the dimensions of the processed image, with the origin at the lower-left corner of the image.
