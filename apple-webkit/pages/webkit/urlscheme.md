> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/urlscheme](https://developer.apple.com/documentation/webkit/urlscheme)

# URLScheme

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A type representing a valid URL scheme.

## Declaration

```swift
struct URLScheme
```

<a id="overview"></a>

## Overview

Scheme names are case sensitive, must start with an ASCII letter, and may contain only ASCII letters, numbers, the “+” character, the “-” character, and the “.” character.

## Topics

### Initializers

- [init(\_:)](urlscheme/init%28__%29.md): Creates a new `URLScheme` value from a valid scheme, which WebKit does not already handle.

### Instance Properties

- [rawValue](urlscheme/rawvalue.md): The raw value of the scheme string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a WebPage

- [WebPage.Configuration](webpage/configuration.md): A configuration type that specifies the preferences and behaviors of a webpage.
- [WebPage.DeviceSensorAuthorization](webpage/devicesensorauthorization.md): A type that describes the authorization permissions policy for the device’s sensors a web resource may access.
- [URLSchemeHandler](urlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [URLSchemeTaskResult](urlschemetaskresult.md): A value used as part of a sequence of results from a [URLSchemeHandler](urlschemehandler.md), which can either be a `Data` or a `URLResponse`.
- [WebPage.Configuration.MediaPlaybackBehavior](webpage/configuration/mediaplaybackbehavior-swift.enum.md): The behavior used when playing HTML video within a page.
- [WebPage.DeviceSensorAuthorization.Permission](webpage/devicesensorauthorization/permission.md): The kind of sensor permission a web resource may request to access.
