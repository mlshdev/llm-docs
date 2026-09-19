> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlprogress/init(from:)

# init(from:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a progress instance by decoding from the given decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

## See Also

### Encoding and decoding a session’s progress

- [encode(to:)](encode%28to_%29.md): Encodes the progress value into the given encoder.
