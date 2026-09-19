> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/filepath/init(_:)-2gkpw

# init(\_:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a file path from a URL

## Declaration

```swift
init?(_ url: URL)
```

<a id="discussion"></a>

## Discussion

The result is nil if `url` doesn’t refer to a local file.
