> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/componentdisplayoption](https://developer.apple.com/documentation/foundation/url/formatstyle/componentdisplayoption)

# URL.FormatStyle.ComponentDisplayOption

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that indicates whether a formatted URL should include a component.

## Declaration

```swift
struct ComponentDisplayOption
```

## Topics

### Display options

- [always](componentdisplayoption/always.md): A display option that always displays the component.
- [never](componentdisplayoption/never.md): A display option that never displays the component.
- [omitIfHTTPFamily](componentdisplayoption/omitifhttpfamily.md): A display option that omits the component if the URL scheme is any flavor of HTTP.
- [displayWhen(\_:matches:)](componentdisplayoption/displaywhen%28__matches_%29.md): Returns a display option that displays the component when a specified component meets the specified requirements.
- [omitWhen(\_:matches:)](componentdisplayoption/omitwhen%28__matches_%29.md): Returns a display option that omits the component when a specified component meets the specified requirements.
- [URL.FormatStyle.Component](component.md): An enumeration of the components of a URL, for use in creating format style options that depend on a component’s value.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a URL format style

- [init(scheme:user:password:host:port:path:query:fragment:)](init%28scheme_user_password_host_port_path_query_fragment_%29.md): Creates a URL format style with the given display options.
- [URL.FormatStyle.HostDisplayOption](hostdisplayoption.md): A type that indicates whether a formatted URL should include the host component.
