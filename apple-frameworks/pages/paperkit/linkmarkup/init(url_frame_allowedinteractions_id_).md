> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/linkmarkup/init(url:frame:allowedinteractions:id:)](https://developer.apple.com/documentation/paperkit/linkmarkup/init(url:frame:allowedinteractions:id:))

# init(url:frame:allowedInteractions:id:)

**Framework:** PaperKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Initializes and returns a new link markup from the specified parameters.

## Declaration

```swift
init(url: URL, frame: CGRect, allowedInteractions: MarkupInteractions = .all, id: MarkupID<LinkMarkup> = MarkupID())
```

## Parameters

- `url`: The URL that the link navigates to when activated.
- `frame`: The frame of the link.
- `allowedInteractions`: The flags controlling the interactions people can perform. Defaults to `.all`.
- `id`: The identity of the link. Defaults to a unique id.
