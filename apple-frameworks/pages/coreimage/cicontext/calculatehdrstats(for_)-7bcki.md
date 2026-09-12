> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicontext/calculatehdrstats(for:)-7bcki](https://developer.apple.com/documentation/coreimage/cicontext/calculatehdrstats(for:)-7bcki)

# calculateHDRStats(for:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Given a CVPixelBuffer, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then update the buffer’s attachments to store the values.

## Declaration

```swift
func calculateHDRStats(for buffer: CVPixelBuffer)
```

## Parameters

- `buffer`: A mutable `CVPixelBuffer` for which to calculate and attach statistics.

<a id="discussion"></a>

## Discussion

If the `CVPixelBuffer` has a Clean Aperture rectangle then only pixels within that rectangle are considered.

# calculateHDRStatsForCVPixelBuffer: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Given a CVPixelBuffer, use the receiving Core Image context to calculate its HDR statistics (content headroom and content average light level) and then update the buffer’s attachments to store the values.

## Declaration

```objectivec
- (void) calculateHDRStatsForCVPixelBuffer:(CVPixelBufferRef) buffer;
```

## Parameters

- `buffer`: A mutable `CVPixelBuffer` for which to calculate and attach statistics.

<a id="discussion"></a>

## Discussion

If the `CVPixelBuffer` has a Clean Aperture rectangle then only pixels within that rectangle are considered.
