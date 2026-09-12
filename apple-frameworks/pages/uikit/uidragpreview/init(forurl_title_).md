> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragpreview/init(forurl:title:)](https://developer.apple.com/documentation/uikit/uidragpreview/init(forurl:title:))

# init(forURL:title:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Initializes a drag item preview with a URL and title.

## Declaration

```swift
convenience init(forURL url: URL, title: String?)
```

## Parameters

- `url`: An Internet address referencing a remote resource, such as a webpage.
- `title`: A title for the URL.

<a id="return-value"></a>

## Return Value

A drag preview for a URL that has a title.

<a id="Discussion"></a>

## Discussion

This method creates a two-line drag item preview, with the title displayed on the first line. The second line is a textual representation of the URL that might not show the full URL string. Don’t use a file URL. Passing `nil` for the title is the same as calling [init(forURL:)](init%28forurl_%29.md).

## See Also

### Initializing a drag item preview

- [init(view:)](init%28view_%29.md): Initializes a new drag item preview with a view, using the default appearance parameters.
- [init(view:parameters:)](init%28view_parameters_%29.md): Initializes a new drag item preview with a view and with a set of appearance parameters.
- [init(forURL:)](init%28forurl_%29.md): Initializes a new drag item preview with a URL.
