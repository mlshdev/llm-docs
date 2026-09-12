> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxparameterretrievalapi_v7/imagesize(_:fromparameter:at:)](https://developer.apple.com/documentation/professional_video_applications/fxparameterretrievalapi_v7/imagesize(_:fromparameter:at:))

# imageSize(\_:fromParameter:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2+

Provides the dimensions of the image well image when it is at 100-percent scale and has square pixels.

## Declaration

```swift
func imageSize(_ imageSize: UnsafeMutablePointer<CGSize>, fromParameter parameterID: UInt32, at time: CMTime) throws
```

## Parameters

- `imageSize`: The size of the image in image space.
- `parameterID`: The ID of the image parameter for which you want to retrieve size.
- `time`: The time at which you want to get the image size.

<a id="discussion"></a>

## Discussion

Removes the effects of pixel aspect ratio, fields, proxy resolution scaling, or user scaling, and provides the dimensions of the image well image in image space.

# imageSize:fromParameter:atTime:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides the dimensions of the image well image when it is at 100-percent scale and has square pixels.

## Declaration

```objectivec
- (BOOL) imageSize:(CGSize *) imageSize fromParameter:(UInt32) parameterID atTime:(CMTime) time error:(NSError * *) error;
```

## Parameters

- `imageSize`: The size of the image in image space.
- `parameterID`: The ID of the image parameter for which you want to retrieve size.
- `time`: The time at which you want to get the image size.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

Returns `YES` if it successfully retrieves the image dimensions. Returns `NO` otherwise and sets the error to the reason for the failure.

<a id="discussion"></a>

## Discussion

Removes the effects of pixel aspect ratio, fields, proxy resolution scaling, or user scaling, and provides the dimensions of the image well image in image space.
