> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/completionhandler](https://developer.apple.com/documentation/foundation/nsattributedstring/completionhandler)

# NSAttributedString.CompletionHandler

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A completion handler for getting an asynchronous attributed string.

## Declaration

```swift
typealias CompletionHandler = (NSAttributedString?, [NSAttributedString.DocumentAttributeKey : Any]?, (any Error)?) -> Void
```

## Parameters

- `attributedString`: The attributed string, or nil if the method couldn’t create the string.
- `attributes`: A dictionary containing document-level attributes. This parameter is `nil` if the document doesn’t have any attributes.
- `error`: An error object if an error occurred, or `nil` if the method returned the string successfully.

## See Also

### Creating from HTML

- [loadFromHTML(request:options:completionHandler:)](loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTML(fileURL:options:completionHandler:)](loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTML(string:options:completionHandler:)](loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [loadFromHTML(data:options:completionHandler:)](loadfromhtml%28data_options_completionhandler_%29.md): Creates an attributed string from the specified HTML data.
- [init(HTML:documentAttributes:)](init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [init(HTML:baseURL:documentAttributes:)](init%28html_baseurl_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object and base URL.
- [init(HTML:options:documentAttributes:)](init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
