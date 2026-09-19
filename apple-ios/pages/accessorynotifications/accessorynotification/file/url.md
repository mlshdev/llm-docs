> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotification/file/url

# url

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A URL that locates the file’s data.

## Declaration

```swift
var url: URL { get async throws }
```

<a id="discussion"></a>

## Discussion

Use this URL to retrieve the file’s data and include its contents in your transmission to the accessory.
