> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/hostdisplayoption/never](https://developer.apple.com/documentation/foundation/url/formatstyle/hostdisplayoption/never)

# never

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A display option that never displays the host component.

## Declaration

```swift
static var never: URL.FormatStyle.HostDisplayOption { get }
```

## See Also

### Display options

- [always](always.md): A display option that always displays the host component.
- [omitIfHTTPFamily](omitifhttpfamily.md): A display option that omits the host component if the URL scheme is HTTP or HTTPS.
- [displayWhen(\_:matches:)](displaywhen%28__matches_%29.md): Returns a display option that displays the host component when a specified component matches against a set of requirement values.
- [omitWhen(\_:matches:)](omitwhen%28__matches_%29.md): Returns a display option that displays the host component when a specified component matches against a set of requirement values.
- [omitSpecificSubdomains(\_:includeMultiLevelSubdomains:)](omitspecificsubdomains%28__includemultilevelsubdomains_%29.md): Returns a display option that omits the host component if it matches a set of subdomains.
- [omitSpecificSubdomains(\_:includeMultiLevelSubdomains:when:matches:)](omitspecificsubdomains%28__includemultilevelsubdomains_when_matches_%29.md): Returns a display option that omits the host component if it matches a set of subdomains and a specified component matches a set of requirements.
- [URL.FormatStyle.Component](../component.md): An enumeration of the components of a URL, for use in creating format style options that depend on a component’s value.
