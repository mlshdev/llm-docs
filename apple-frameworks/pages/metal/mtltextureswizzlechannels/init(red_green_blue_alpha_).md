> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltextureswizzlechannels/init(red:green:blue:alpha:)](https://developer.apple.com/documentation/metal/mtltextureswizzlechannels/init(red:green:blue:alpha:))

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
