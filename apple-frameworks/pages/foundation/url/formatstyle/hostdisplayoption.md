> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/hostdisplayoption](https://developer.apple.com/documentation/foundation/url/formatstyle/hostdisplayoption)

# URL.FormatStyle.HostDisplayOption

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that indicates whether a formatted URL should include the host component.

## Declaration

```swift
struct HostDisplayOption
```

## Topics

### Display options

- [always](hostdisplayoption/always.md): A display option that always displays the host component.
- [never](hostdisplayoption/never.md): A display option that never displays the host component.
- [omitIfHTTPFamily](hostdisplayoption/omitifhttpfamily.md): A display option that omits the host component if the URL scheme is HTTP or HTTPS.
- [displayWhen(\_:matches:)](hostdisplayoption/displaywhen%28__matches_%29.md): Returns a display option that displays the host component when a specified component matches against a set of requirement values.
- [omitWhen(\_:matches:)](hostdisplayoption/omitwhen%28__matches_%29.md): Returns a display option that displays the host component when a specified component matches against a set of requirement values.
- [omitSpecificSubdomains(\_:includeMultiLevelSubdomains:)](hostdisplayoption/omitspecificsubdomains%28__includemultilevelsubdomains_%29.md): Returns a display option that omits the host component if it matches a set of subdomains.
- [omitSpecificSubdomains(\_:includeMultiLevelSubdomains:when:matches:)](hostdisplayoption/omitspecificsubdomains%28__includemultilevelsubdomains_when_matches_%29.md): Returns a display option that omits the host component if it matches a set of subdomains and a specified component matches a set of requirements.
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
- [URL.FormatStyle.ComponentDisplayOption](componentdisplayoption.md): A type that indicates whether a formatted URL should include a component.
