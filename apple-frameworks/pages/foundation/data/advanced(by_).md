> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/data/advanced(by:)

# advanced(by:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new data buffer created by removing the given number of bytes from the front of the original buffer.

## Declaration

```swift
func advanced(by amount: Int) -> Data
```

## Parameters

- `amount`: The number of bytes to strip from the input data buffer. The value must be less than the original data buffer’s length.

<a id="return-value"></a>

## Return Value

A newly created data buffer that is shorter by the given amount than the original.
