> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/allocationattributes/allocationthreshold](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/allocationattributes/allocationthreshold)

# allocationThreshold

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A new pixel buffer will not be allocated if the pool already has this many or more pixel buffers allocated. This does not prevent already-allocated buffers from being recycled. If this causes allocation failure, then `CVMutablePixelBuffer/Pool/mutablePixelBuffer(allocationThreshold:)` throws [wouldExceedAllocationThreshold](../../../cverror/wouldexceedallocationthreshold.md).

## Declaration

```swift
var allocationThreshold: Int?
```
