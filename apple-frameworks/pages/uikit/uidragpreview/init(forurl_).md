> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreview/init(forurl:)](https://developer.apple.com/documentation/uikit/uidragpreview/init(forurl:))

# init(forURL:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Initializes a new drag item preview with a URL.

## Declaration

```swift
convenience init(forURL url: URL)
```

## Parameters

- `url`: An Internet address referencing a remote resource, such as a webpage.

<a id="return-value"></a>

## Return Value

A drag preview for a URL.

<a id="Discussion"></a>

## Discussion

This method creates a drag item preview of the URL. The URL preview is a one-line, textual representation that might not show the full URL string. Don’t use a file URL.

## See Also

### Initializing a drag item preview

- [init(view:)](init%28view_%29.md): Initializes a new drag item preview with a view, using the default appearance parameters.
- [init(view:parameters:)](init%28view_parameters_%29.md): Initializes a new drag item preview with a view and with a set of appearance parameters.
- [init(forURL:title:)](init%28forurl_title_%29.md): Initializes a drag item preview with a URL and title.
