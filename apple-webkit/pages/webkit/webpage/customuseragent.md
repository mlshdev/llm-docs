> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/customuseragent](https://developer.apple.com/documentation/webkit/webpage/customuseragent)

# customUserAgent

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The custom user agent string.

## Declaration

```swift
@MainActor final var customUserAgent: String? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to specify a custom user agent string for the webpage.

The default value of this property is `nil`.

## See Also

### Inspecting page information

- [WebPage.CSSMediaType](cssmediatype.md): A CSS media type as defined by the [CSS specification](https://www.w3.org/TR/mediaqueries-4/#media-types), or an arbitrary media type value.
- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the webpage.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): Indicates whether the webpage loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [isBlockedByScreenTime](isblockedbyscreentime.md): Indicates whether Screen Time blocking has occurred.
- [isInspectable](isinspectable.md): Indicates whether you can inspect the page with Safari Web Inspector.
- [isWritingToolsActive](iswritingtoolsactive.md): Indicates whether Writing Tools is active for the page.
