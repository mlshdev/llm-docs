> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/targetedimagerequesthandler/init(source:target:orientation:)-1nk14](https://developer.apple.com/documentation/vision/targetedimagerequesthandler/init(source:target:orientation:)-1nk14)

# init(source:target:orientation:)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Creates a handler for performing requests on Core Image images.

## Declaration

```swift
convenience init(source: CIImage, target: CIImage, orientation: CGImagePropertyOrientation? = nil)
```

## See Also

### Creating a request handler

- [init(sourceURL:targetURL:orientation:)](init%28sourceurl_targeturl_orientation_%29.md): Creates a handler for performing requests on an image at the specified URL.
- [init(source:target:orientation:)](init%28source_target_orientation_%29-4wr1c.md): Creates a handler for performing requests on an image contained in a data object.
- [init(source:target:orientation:)](init%28source_target_orientation_%29-66ft9.md): Creates a handler for performing requests on Core Graphics images.
- [init(source:target:orientation:)](init%28source_target_orientation_%29-64lxw.md): Creates a handler for performing requests on a Core Video pixel buffer.
- [init(source:target:orientation:)](init%28source_target_orientation_%29-9u6ta.md): Creates a request handler that performs requests on an image contained within a sample buffer.
