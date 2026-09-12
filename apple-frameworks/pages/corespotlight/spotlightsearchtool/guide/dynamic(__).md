> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guide/dynamic(_:)](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guide/dynamic(_:))

# dynamic(\_:)

**Framework:** CoreSpotlight  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A guide that includes only the search techniques specified by the given profile.

## Declaration

```swift
static func dynamic(_ profile: SpotlightSearchTool.GuidanceProfile) -> SpotlightSearchTool.Guide
```

## Parameters

- `profile`: The set of search techniques and attributes the model may use.

## See Also

### Setting the guidance levels

- [complete](complete.md): A guide that uses all available search techniques.
- [focused(\_:)](focused%28__%29.md): A guide that searches only the specified content domain using a compact, on-device-friendly schema.
