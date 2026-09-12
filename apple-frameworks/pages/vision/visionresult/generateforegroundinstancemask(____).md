> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionresult/generateforegroundinstancemask(_:_:)](https://developer.apple.com/documentation/vision/visionresult/generateforegroundinstancemask(_:_:))

# VisionResult.generateForegroundInstanceMask(\_:\_:)

**Framework:** Vision  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A result from performing a generate foreground instance mask request.

## Declaration

```swift
case generateForegroundInstanceMask(GenerateForegroundInstanceMaskRequest, InstanceMaskObservation?)
```

## See Also

### Getting the image alignment, feature print, and background removal result

- [VisionResult.trackTranslationalImageRegistration(\_:\_:)](tracktranslationalimageregistration%28____%29.md): A result from performing a track translational image request.
- [VisionResult.trackHomographicImageRegistration(\_:\_:)](trackhomographicimageregistration%28____%29.md): A result from performing a track homographic image request.
- [VisionResult.generateImageFeaturePrint(\_:\_:)](generateimagefeatureprint%28____%29.md): A result from performing a generate image feature print request.
