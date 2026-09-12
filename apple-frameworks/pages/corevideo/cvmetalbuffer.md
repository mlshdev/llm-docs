> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmetalbuffer](https://developer.apple.com/documentation/corevideo/cvmetalbuffer)

# CVMetalBuffer (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
typealias CVMetalBuffer = CVBuffer
```

<a id="discussion"></a>

## Discussion

Metal buffer based CVPixelBuffer wrapped buffer

IMPORTANT NOTE: Clients should retain CVMetalBuffer objects until they are done using the contents in them. Retaining a CVMetalBuffer is your way to indicate that you’re still using the image in the buffer, and that it should not be recycled yet.

# CVMetalBufferRef (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
typedef CVBufferRef CVMetalBufferRef;
```

<a id="discussion"></a>

## Discussion

Metal buffer based CVPixelBuffer wrapped buffer

IMPORTANT NOTE: Clients should retain CVMetalBuffer objects until they are done using the contents in them. Retaining a CVMetalBuffer is your way to indicate that you’re still using the image in the buffer, and that it should not be recycled yet.
