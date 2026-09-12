> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturevalue/imageoption/init(_:)](https://developer.apple.com/documentation/coreml/mlfeaturevalue/imageoption/init(_:))

# init(\_:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates an image feature option key from a string.

## Declaration

```swift
init(_ rawValue: String)
```

## Parameters

- `rawValue`: A string that represents the name of the image feature option key.

<a id="Discussion"></a>

## Discussion

Don’t use this initializer directly. Create an image option key with [cropAndScale](cropandscale.md) or [cropRect](croprect.md) instead.

## See Also

### Image option key initializers

- [init(rawValue:)](init%28rawvalue_%29.md): Creates an image feature option key from a raw value string.
