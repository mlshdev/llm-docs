> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/hostdisplayoption/displaywhen(_:matches:)](https://developer.apple.com/documentation/foundation/url/formatstyle/hostdisplayoption/displaywhen(_:matches:))

# displayWhen(\_:matches:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a display option that displays the host component when a specified component matches against a set of requirement values.

## Declaration

```swift
static func displayWhen(_ component: URL.FormatStyle.Component, matches requirements: Set<String>) -> URL.FormatStyle.HostDisplayOption
```

## Parameters

- `component`: A component to compare. This may or may not be the host component itself.
- `requirements`: A set of string values to match against. Matching any member of the set allows the format style to display the component.

<a id="return-value"></a>

## Return Value

A display option that displays the host component when a specified component meets the specified requirements.

## See Also

### Display options

- [always](always.md): A display option that always displays the host component.
- [never](never.md): A display option that never displays the host component.
- [omitIfHTTPFamily](omitifhttpfamily.md): A display option that omits the host component if the URL scheme is HTTP or HTTPS.
- [omitWhen(\_:matches:)](omitwhen%28__matches_%29.md): Returns a display option that displays the host component when a specified component matches against a set of requirement values.
- [omitSpecificSubdomains(\_:includeMultiLevelSubdomains:)](omitspecificsubdomains%28__includemultilevelsubdomains_%29.md): Returns a display option that omits the host component if it matches a set of subdomains.
- [omitSpecificSubdomains(\_:includeMultiLevelSubdomains:when:matches:)](omitspecificsubdomains%28__includemultilevelsubdomains_when_matches_%29.md): Returns a display option that omits the host component if it matches a set of subdomains and a specified component matches a set of requirements.
- [URL.FormatStyle.Component](../component.md): An enumeration of the components of a URL, for use in creating format style options that depend on a component’s value.
