> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnhorizonobservation/transform(forimagewidth:height:)](https://developer.apple.com/documentation/vision/vnhorizonobservation/transform(forimagewidth:height:))

# transform(forImageWidth:height:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an affine transform for the specified image width and height.

## Declaration

```swift
func transform(forImageWidth width: Int, height: Int) -> CGAffineTransform
```

## Parameters

- `width`: The width of the image.
- `height`: The height of the image.

<a id="return-value"></a>

## Return Value

An affine transform.

## See Also

### Evaluating the Horizon

- [angle](angle.md): The angle of the observed horizon.
- [transform](transform.md): The transform to apply to the detected horizon.

# transformForImageWidth:height: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an affine transform for the specified image width and height.

## Declaration

```objectivec
- (CGAffineTransform) transformForImageWidth:(size_t) width height:(size_t) height;
```

## Parameters

- `width`: The width of the image.
- `height`: The height of the image.

<a id="return-value"></a>

## Return Value

An affine transform.

## See Also

### Evaluating the Horizon

- [angle](angle.md): The angle of the observed horizon.
- [transform](transform.md): The transform to apply to the detected horizon.
