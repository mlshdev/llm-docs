> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(html:baseurl:documentattributes:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(html:baseurl:documentattributes:))

# init(HTML:baseURL:documentAttributes:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates an attributed string from the HTML in the specified data object and base URL.

## Declaration

```swift
init?(HTML data: Data, baseURL base: URL, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

```swift
init?(html data: Data, baseURL base: URL, documentAttributes dict: AutoreleasingUnsafeMutablePointer<NSDictionary?>?)
```

## Parameters

- `data`: A data object with text in HTML format. The method uses this data to create the attributed string.
- `base`: An [NSURL](../nsurl.md) that represents the base URL for all links within the HTML.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if the data can’t be decoded.

<a id="discussion"></a>

## Discussion

> **Note**

>  Apple discourages the use of this symbol. Use [loadFromHTML(data:options:completionHandler:)](loadfromhtml%28data_options_completionhandler_%29.md) instead.

## See Also

### Creating from HTML

- [loadFromHTML(request:options:completionHandler:)](loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTML(fileURL:options:completionHandler:)](loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTML(string:options:completionHandler:)](loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [loadFromHTML(data:options:completionHandler:)](loadfromhtml%28data_options_completionhandler_%29.md): Creates an attributed string from the specified HTML data.
- [NSAttributedString.CompletionHandler](completionhandler.md): A completion handler for getting an asynchronous attributed string.
- [init(HTML:documentAttributes:)](init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [init(HTML:options:documentAttributes:)](init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.

# initWithHTML:baseURL:documentAttributes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates an attributed string from the HTML in the specified data object and base URL.

## Declaration

```objectivec
- (instancetype) initWithHTML:(NSData *) data baseURL:(NSURL *) base documentAttributes:(NSDictionary<NSString *,id> **) dict;
```

## Parameters

- `data`: A data object with text in HTML format. The method uses this data to create the attributed string.
- `base`: An [NSURL](../nsurl.md) that represents the base URL for all links within the HTML.
- `dict`: An in-out dictionary containing document-level attributes. On output, this method updates the dictionary to contain any document-specific keys found in the data. Specify `nil` if you don’t want the document attributes.

<a id="return-value"></a>

## Return Value

Returns an initialized object, or `nil` if the data can’t be decoded.

<a id="discussion"></a>

## Discussion

> **Note**

>  Apple discourages the use of this symbol. Use [loadFromHTMLWithData:options:completionHandler:](loadfromhtml%28data_options_completionhandler_%29.md) instead.

## See Also

### Creating from HTML

- [loadFromHTMLWithRequest:options:completionHandler:](loadfromhtml%28request_options_completionhandler_%29.md): Creates an attributed string by converting the contents of the specified HTML URL request.
- [loadFromHTMLWithFileURL:options:completionHandler:](loadfromhtml%28fileurl_options_completionhandler_%29.md): Creates an attributed string by converting the content of a local HTML file at the specified URL.
- [loadFromHTMLWithString:options:completionHandler:](loadfromhtml%28string_options_completionhandler_%29.md): Creates an attributed string from the specified HTML string.
- [loadFromHTMLWithData:options:completionHandler:](loadfromhtml%28data_options_completionhandler_%29.md): Creates an attributed string from the specified HTML data.
- [initWithHTML:documentAttributes:](init%28html_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
- [initWithHTML:options:documentAttributes:](init%28html_options_documentattributes_%29.md): Creates an attributed string from the HTML in the specified data object.
