> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargeteddragpreview/init(forurl:target:)](https://developer.apple.com/documentation/uikit/uitargeteddragpreview/init(forurl:target:))

# init(forURL:target:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Initializes a new targeted drag item preview with a URL and a drag item preview.

## Declaration

```swift
convenience init(forURL url: URL, target: UIDragPreviewTarget)
```

## Parameters

- `url`: An Internet address referencing a remote resource, such as a webpage.
- `target`: A drag item preview target.

<a id="return-value"></a>

## Return Value

A targeted drag preview for a URL based on the drag item preview target.

<a id="Discussion"></a>

## Discussion

This method creates a targeted drag item preview of the URL. The URL preview is a one-line, textual representation that might not show the full URL string. Don’t use a file URL.

## See Also

### Initializing a targeted drag item preview

- [init(forURL:title:target:)](init%28forurl_title_target_%29.md): Initializes a new targeted drag item preview with a URL, a title, and a drag item preview.
