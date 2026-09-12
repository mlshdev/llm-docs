> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/init(markdown:including:options:baseurl:)-89e48](https://developer.apple.com/documentation/foundation/attributedstring/init(markdown:including:options:baseurl:)-89e48)

# init(markdown:including:options:baseURL:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an attributed string from a Markdown-formatted string using the provided options and attribute scope that a key path identifies.

## Declaration

```swift
init<S>(markdown: String, including scope: KeyPath<AttributeScopes, S.Type>, options: AttributedString.MarkdownParsingOptions = .init(), baseURL: URL? = nil) throws where S : AttributeScope
```

## Parameters

- `markdown`: The string that contains the Markdown formatting.
- `scope`: The [AttributeScopes](../attributescopes.md) key path that identifies an attribute scope to associate with the attributed string.
- `options`: Options that affect how the initializer interprets formatting in the Markdown string. This parameter defaults to no options.
- `baseURL`: The base URL to use when resolving Markdown URLs. The initializer treats URLs as being relative to this URL. If this value is `nil`, the initializer doesn’t resolve URLs. The default is `nil`.

<a id="Discussion"></a>

## Discussion

If your source string includes custom attributes defined by conformers to [MarkdownDecodableAttributedStringKey](../markdowndecodableattributedstringkey.md) and used with Apple’s markdown extension syntax, be sure to include the [allowsExtendedAttributes](../nsattributedstringmarkdownparsingoptions/allowsextendedattributes.md) option. Otherwise, the initializer doesn’t parse these attributes.

## See Also

### Initializing from Markdown Strings

- [init(markdown:options:baseURL:)](init%28markdown_options_baseurl_%29-52n3u.md): Creates an attributed string from a Markdown-formatted string using the provided options.
- [init(markdown:including:options:baseURL:)](init%28markdown_including_options_baseurl_%29-4m51b.md): Creates an attributed string from a Markdown-formatted string using the provided options and attribute scope.
