> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlfeaturevalue/imageoption/init(rawvalue:)

# init(rawValue:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an image feature option key from a raw value string.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: A string that represents the name of the image feature option key.

<a id="Discussion"></a>

## Discussion

Don’t use this initializer directly. Create an image option key with [cropAndScale](cropandscale.md) or [cropRect](croprect.md) instead.

## See Also

### Image option key initializers

- [init(\_:)](init%28__%29.md): Creates an image feature option key from a string.
