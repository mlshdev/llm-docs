> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltextureswizzlechannels/init(red:green:blue:alpha:)

# init(red:green:blue:alpha:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Creates a swizzle pattern.

## Declaration

```swift
init(red: MTLTextureSwizzle, green: MTLTextureSwizzle, blue: MTLTextureSwizzle, alpha: MTLTextureSwizzle)
```

## Parameters

- `red`: The data you want to copy to the first output channel
- `green`: The data you want to copy to the second output channel
- `blue`: The data you want to copy to the third output channel
- `alpha`: The data you want to copy to the fourth output channel

## See Also

### Creating a swizzle pattern

- [init()](init%28%29.md): Creates a default swizzle pattern.
