> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/urlschemetaskresult](https://developer.apple.com/documentation/webkit/urlschemetaskresult)

# URLSchemeTaskResult

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A value used as part of a sequence of results from a [URLSchemeHandler](urlschemehandler.md), which can either be a `Data` or a `URLResponse`.

## Declaration

```swift
enum URLSchemeTaskResult
```

## Topics

### Enumeration Cases

- [URLSchemeTaskResult.data(\_:)](urlschemetaskresult/data%28__%29.md): Data for the resource. This value may contain all of the data or only some of it.
- [URLSchemeTaskResult.response(\_:)](urlschemetaskresult/response%28__%29.md): The response to return to WebKit. The response value must include the MIME type of the request resource.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a WebPage

- [WebPage.Configuration](webpage/configuration.md): A configuration type that specifies the preferences and behaviors of a webpage.
- [WebPage.DeviceSensorAuthorization](webpage/devicesensorauthorization.md): A type that describes the authorization permissions policy for the device’s sensors a web resource may access.
- [URLScheme](urlscheme.md): A type representing a valid URL scheme.
- [URLSchemeHandler](urlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WebPage.Configuration.MediaPlaybackBehavior](webpage/configuration/mediaplaybackbehavior-swift.enum.md): The behavior used when playing HTML video within a page.
- [WebPage.DeviceSensorAuthorization.Permission](webpage/devicesensorauthorization/permission.md): The kind of sensor permission a web resource may request to access.
