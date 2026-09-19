> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/makearray(of:channelcount:)

# makeArray(of:channelCount:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns an array of `width * height * channelCount` values that’s a copy of the buffer’s visible contents.

## Declaration

```swift
func makeArray<U>(of scalarType: U.Type, channelCount: Int) -> [U]
```

## Parameters

- `scalarType`: The scalar type of each array element.
- `channelCount`: The number of channels in the pixel buffer.

<a id="return-value"></a>

## Return Value

An array of `scalarType` values that  contains the source buffer’s contents.
