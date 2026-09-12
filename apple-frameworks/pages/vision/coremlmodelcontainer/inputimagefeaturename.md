> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/coremlmodelcontainer/inputimagefeaturename](https://developer.apple.com/documentation/vision/coremlmodelcontainer/inputimagefeaturename)

# inputImageFeatureName

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The name of the feature value that Vision sets from the request handler.

## Declaration

```swift
var inputImageFeatureName: String
```

<a id="Discussion"></a>

## Discussion

By default, Vision uses the first input found, but you can manually set that input to another feature name instead.
