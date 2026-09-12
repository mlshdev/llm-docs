> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/component](https://developer.apple.com/documentation/foundation/url/formatstyle/component)

# URL.FormatStyle.Component

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An enumeration of the components of a URL, for use in creating format style options that depend on a component’s value.

## Declaration

```swift
enum Component
```

<a id="overview"></a>

## Overview

You use this type with style-modifying methods like [displayWhen(\_:matches:)](componentdisplayoption/displaywhen%28__matches_%29.md) in [URL.FormatStyle.ComponentDisplayOption](componentdisplayoption.md) and [omitWhen(\_:matches:)](hostdisplayoption/omitwhen%28__matches_%29.md) in [URL.FormatStyle.HostDisplayOption](hostdisplayoption.md).

## Topics

### URL format style components

- [URL.FormatStyle.Component.scheme](component/scheme.md): The URL format style scheme component.
- [URL.FormatStyle.Component.host](component/host.md): The URL format style host component.
- [URL.FormatStyle.Component.port](component/port.md): The URL format style port component.
- [URL.FormatStyle.Component.user](component/user.md): The URL format style user component.
- [URL.FormatStyle.Component.password](component/password.md): The URL format style password component.
- [URL.FormatStyle.Component.path](component/path.md): The URL format style path component.
- [URL.FormatStyle.Component.query](component/query.md): The URL format style query component.
- [URL.FormatStyle.Component.fragment](component/fragment.md): The URL format style fragment component.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Display options

- [always](componentdisplayoption/always.md): A display option that always displays the component.
- [never](componentdisplayoption/never.md): A display option that never displays the component.
- [omitIfHTTPFamily](componentdisplayoption/omitifhttpfamily.md): A display option that omits the component if the URL scheme is any flavor of HTTP.
- [displayWhen(\_:matches:)](componentdisplayoption/displaywhen%28__matches_%29.md): Returns a display option that displays the component when a specified component meets the specified requirements.
- [omitWhen(\_:matches:)](componentdisplayoption/omitwhen%28__matches_%29.md): Returns a display option that omits the component when a specified component meets the specified requirements.
