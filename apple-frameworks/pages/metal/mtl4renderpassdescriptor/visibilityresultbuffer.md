> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4renderpassdescriptor/visibilityresultbuffer](https://developer.apple.com/documentation/metal/mtl4renderpassdescriptor/visibilityresultbuffer)

# visibilityResultBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures a buffer into which Metal writes counts of fragments (pixels) passing the depth and stencil tests.

## Declaration

```swift
var visibilityResultBuffer: (any MTLBuffer)? { get set }
```

# visibilityResultBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures a buffer into which Metal writes counts of fragments (pixels) passing the depth and stencil tests.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<MTLBuffer> visibilityResultBuffer;
```
