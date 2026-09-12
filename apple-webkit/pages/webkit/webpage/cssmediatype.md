> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/cssmediatype](https://developer.apple.com/documentation/webkit/webpage/cssmediatype)

# WebPage.CSSMediaType

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A CSS media type as defined by the [CSS specification](https://www.w3.org/TR/mediaqueries-4/#media-types), or an arbitrary media type value.

## Declaration

```swift
struct CSSMediaType
```

<a id="overview"></a>

## Overview

Media types are one of several media queries that influence the `@media` CSS at-rule; this rule is used by webpages to apply parts of a style sheet depending on the media properties specified.

You can customize the media type of a [WebPage](../webpage.md) by using the [mediaType](mediatype.md) property.

## Topics

### Initializers

- [init(rawValue:)](cssmediatype/init%28rawvalue_%29.md): Create a media type with an arbitrary value.

### Instance Properties

- [rawValue](cssmediatype/rawvalue.md): The raw value of the media type.

### Type Properties

- [all](cssmediatype/all.md): Corresponds to the “all” media type.
- [print](cssmediatype/print.md): Corresponds to the “print” media type.
- [screen](cssmediatype/screen.md): Corresponds to the “screen” media type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting page information

- [title](title.md): The page title.
- [url](url.md): The URL for the current webpage.
- [mediaType](mediatype.md): The media type for the contents of the webpage.
- [customUserAgent](customuseragent.md): The custom user agent string.
- [serverTrust](servertrust.md): The trust management object you use to evaluate trust for the current webpage.
- [hasOnlySecureContent](hasonlysecurecontent.md): Indicates whether the webpage loaded all resources on the page through securely encrypted connections.
- [themeColor](themecolor.md): The theme color that the system gets from the first valid meta tag in the webpage.
- [isBlockedByScreenTime](isblockedbyscreentime.md): Indicates whether Screen Time blocking has occurred.
- [isInspectable](isinspectable.md): Indicates whether you can inspect the page with Safari Web Inspector.
- [isWritingToolsActive](iswritingtoolsactive.md): Indicates whether Writing Tools is active for the page.
