> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitargeteddragpreview/init(forurl:title:target:)](https://developer.apple.com/documentation/uikit/uitargeteddragpreview/init(forurl:title:target:))

# init(forURL:title:target:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Initializes a new targeted drag item preview with a URL, a title, and a drag item preview.

## Declaration

```swift
convenience init(forURL url: URL, title: String?, target: UIDragPreviewTarget)
```

## Parameters

- `url`: An Internet address referencing a remote resource, such as a webpage.
- `title`: A title for the URL.
- `target`: A drag item preview target.

<a id="return-value"></a>

## Return Value

A drag preview for a URL with a title based on the specified drag item preview target.

<a id="Discussion"></a>

## Discussion

This method creates a two-line drag item preview, with the title displayed on the first line. The second line is a textual representation of the URL that might not show the full URL string. Don’t use a file URL. Passing `nil` for the title is the same as calling [init(forURL:target:)](init%28forurl_target_%29.md).

## See Also

### Initializing a targeted drag item preview

- [init(forURL:target:)](init%28forurl_target_%29.md): Initializes a new targeted drag item preview with a URL and a drag item preview.
