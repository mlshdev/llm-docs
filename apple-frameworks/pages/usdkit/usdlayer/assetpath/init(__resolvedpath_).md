> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/assetpath/init(_:resolvedpath:)

# init(\_:resolvedPath:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an asset path with both authored and resolved values.

## Declaration

```swift
init(_ path: String, resolvedPath: String)
```

## Parameters

- `path`: The authored path string.
- `resolvedPath`: The resolved location after asset resolution.
