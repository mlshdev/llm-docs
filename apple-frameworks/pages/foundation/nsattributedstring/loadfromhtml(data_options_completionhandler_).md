> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/loadfromhtml(data:options:completionhandler:)](https://developer.apple.com/documentation/foundation/nsattributedstring/loadfromhtml(data:options:completionhandler:))

# loadFromHTML(data:options:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an attributed string from the specified HTML data.

## Declaration

```swift
class func loadFromHTML(data: Data, options: [NSAttributedString.DocumentReadingOptionKey : Any] = [:], completionHandler: @escaping @Sendable (NSAttributedString?, [NSAttributedString.DocumentAttributeKey : Any]?, (any Error)?) -> Void)
```

```swift
class func fromHTML(_ data: Data, options: [NSAttributedString.DocumentReadingOptionKey : Any] = [:]) async throws -> (NSAttributedString, [NSAttributedString.DocumentAttributeKey : Any])
```

## Parameters

- `data`: A data object with text in HTML format. The method uses this data to create the attributed string.
- `options`: Specifies additional options for loading the document. For a list of possible keys, see [NSAttributedStringDocumentReadingOptionKey](../../uikit/nsattributedstringdocumentreadingoptionkey.md).
- `completionHandler`: A completion handler to execute with the results.

## See Also

### Creating from HTML

- [loadFromHTML(request:options:completionHandler:)](loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTML(fileURL:options:completionHandler:)](loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTML(string:options:completionHandler:)](loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [NSAttributedString.CompletionHandler](completionhandler.md): A completion handler for getting an asynchronous attributed string.
- [init(HTML:documentAttributes:)](init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [init(HTML:baseURL:documentAttributes:)](init%28html_baseurl_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object and base URL.
- [init(HTML:options:documentAttributes:)](init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.

# loadFromHTMLWithData:options:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates an attributed string from the specified HTML data.

## Declaration

```objectivec
+ (void) loadFromHTMLWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options completionHandler:(NSAttributedStringCompletionHandler) completionHandler;
```

## Parameters

- `data`: A data object with text in HTML format. The method uses this data to create the attributed string.
- `options`: Specifies additional options for loading the document. For a list of possible keys, see [NSAttributedStringDocumentReadingOptionKey](../../uikit/nsattributedstringdocumentreadingoptionkey.md).
- `completionHandler`: A completion handler to execute with the results.

## See Also

### Creating from HTML

- [loadFromHTMLWithRequest:options:completionHandler:](loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTMLWithFileURL:options:completionHandler:](loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTMLWithString:options:completionHandler:](loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [initWithHTML:documentAttributes:](init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [initWithHTML:baseURL:documentAttributes:](init%28html_baseurl_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object and base URL.
- [initWithHTML:options:documentAttributes:](init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
