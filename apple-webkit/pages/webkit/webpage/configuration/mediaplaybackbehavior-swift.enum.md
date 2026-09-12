> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webpage/configuration/mediaplaybackbehavior-swift.enum](https://developer.apple.com/documentation/webkit/webpage/configuration/mediaplaybackbehavior-swift.enum)

# WebPage.Configuration.MediaPlaybackBehavior

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

The behavior used when playing HTML video within a page.

## Declaration

```swift
enum MediaPlaybackBehavior
```

## Topics

### Enumeration Cases

- [WebPage.Configuration.MediaPlaybackBehavior.allowsInlinePlayback](mediaplaybackbehavior-swift.enum/allowsinlineplayback.md): Allows videos to play inline. When adding a video element to an HTML document on iPhone, you must also include the `playsinline` attribute.
- [WebPage.Configuration.MediaPlaybackBehavior.alwaysFullscreen](mediaplaybackbehavior-swift.enum/alwaysfullscreen.md): Use the native fullscreen controller.
- [WebPage.Configuration.MediaPlaybackBehavior.automatic](mediaplaybackbehavior-swift.enum/automatic.md): Use the default system value, which is `alwaysFullscreen` for iPhone and `allowsInlinePlayback` for iPad.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a WebPage

- [WebPage.Configuration](../configuration.md): A configuration type that specifies the preferences and behaviors of a webpage.
- [WebPage.DeviceSensorAuthorization](../devicesensorauthorization.md): A type that describes the authorization permissions policy for the device’s sensors a web resource may access.
- [URLScheme](../../urlscheme.md): A type representing a valid URL scheme.
- [URLSchemeHandler](../../urlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [URLSchemeTaskResult](../../urlschemetaskresult.md): A value used as part of a sequence of results from a [URLSchemeHandler](../../urlschemehandler.md), which can either be a `Data` or a `URLResponse`.
- [WebPage.DeviceSensorAuthorization.Permission](../devicesensorauthorization/permission.md): The kind of sensor permission a web resource may request to access.
