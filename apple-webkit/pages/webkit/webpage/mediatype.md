> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/mediatype](https://developer.apple.com/documentation/webkit/webpage/mediatype)

# mediaType

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The media type for the contents of the webpage.

## Declaration

```swift
@MainActor final var mediaType: WebPage.CSSMediaType? { get set }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `nil`, the webpage derives the current media type from the CSS media property of its content. If you assign a value other than `nil` to this property, the webpage uses the value you provide instead.

For example, you can use this property to configure a page for viewing as a print preview by setting it to [print](cssmediatype/print.md).

The default value of this property is `nil`.

## See Also

### Inspecting page information

- [WebPage.CSSMediaType](cssmediatype.md): A CSS media type as defined by the [CSS specification](https://www.w3.org/TR/mediaqueries-4/#media-types), or an arbitrary media type value.
- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): Indicates whether the webpage loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [isBlockedByScreenTime](isblockedbyscreentime.md): Indicates whether Screen Time blocking has occurred.
- [isInspectable](isinspectable.md): Indicates whether you can inspect the page with Safari Web Inspector.
- [isWritingToolsActive](iswritingtoolsactive.md): Indicates whether Writing Tools is active for the page.
