> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(markdown:options:baseurl:)-m9n](https://developer.apple.com/documentation/foundation/nsattributedstring/init(markdown:options:baseurl:)-m9n)

# init(markdown:options:baseURL:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an attributed string from a Markdown-formatted string using the provided options.

## Declaration

```swift
convenience init(markdown: String, options: AttributedString.MarkdownParsingOptions = .init(), baseURL: URL? = nil) throws
```

## Parameters

- `markdown`: The string that contains the Markdown formatting.
- `options`: Options that affect how the initializer interprets formatting in the Markdown string. This parameter defaults to no options.
- `baseURL`: The base URL to use when resolving Markdown URLs. The initializer treats URLs as being relative to this URL. If this value is `nil`, the initializer doesn’t resolve URLs. The default is `nil`.

## See Also

### Creating from markdown

- [init(markdown:options:baseURL:)](init%28markdown_options_baseurl_%29-5nru2.md): Creates an attributed string from Markdown-formatted data using the provided options.
- [init(contentsOf:options:baseURL:)](init%28contentsof_options_baseurl_%29.md): Creates an attributed string from the contents of a specified URL that contains Markdown-formatted data using the provided options.
