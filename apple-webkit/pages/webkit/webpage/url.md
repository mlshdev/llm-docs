> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/url](https://developer.apple.com/documentation/webkit/webpage/url)

# url

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The URL for the current webpage.

## Declaration

```swift
@MainActor final var url: URL? { get }
```

<a id="discussion"></a>

## Discussion

This property contains the URL for the webpage currently being presented. Use this URL in places where you reflect the webpage address in your app’s user interface. If the webpage has not loaded any content yet, this value will be `nil`.

## See Also

### Inspecting page information

- [WebPage.CSSMediaType](cssmediatype.md): A CSS media type as defined by the [CSS specification](https://www.w3.org/TR/mediaqueries-4/#media-types), or an arbitrary media type value.
- [title](title.md): The page title.
- [mediaType](mediatype.md): The media type for the contents of the webpage.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): Indicates whether the webpage loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [isBlockedByScreenTime](isblockedbyscreentime.md): Indicates whether Screen Time blocking has occurred.
- [isInspectable](isinspectable.md): Indicates whether you can inspect the page with Safari Web Inspector.
- [isWritingToolsActive](iswritingtoolsactive.md): Indicates whether Writing Tools is active for the page.
