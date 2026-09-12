> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guide/focused(_:)](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guide/focused(_:))

# focused(\_:)

**Framework:** CoreSpotlight  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A guide that searches only the specified content domain using a compact, on-device-friendly schema.

## Declaration

```swift
static func focused(_ domain: SpotlightSearchTool.ContentDomain = .items) -> SpotlightSearchTool.Guide
```

## Parameters

- `domain`: The content domain to focus on. Defaults to [items](../contentdomain/items-swift.type.property.md).

## See Also

### Setting the guidance levels

- [complete](complete.md): A guide that uses all available search techniques.
- [dynamic(\_:)](dynamic%28__%29.md): A guide that includes only the search techniques specified by the given profile.
