> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/init(displayname:)

# init(displayName:)

**Framework:** USDKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an anonymous, in-memory layer.

## Declaration

```swift
init(displayName: String? = nil) throws
```

## Parameters

- `displayName`: A non-unique hint shown in debug output and logs.

<a id="discussion"></a>

## Discussion

Anonymous layers have no file backing.

> **Throws**

> An error if the layer cannot be created.
