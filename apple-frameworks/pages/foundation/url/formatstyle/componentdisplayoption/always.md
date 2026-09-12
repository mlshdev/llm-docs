> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/formatstyle/componentdisplayoption/always](https://developer.apple.com/documentation/foundation/url/formatstyle/componentdisplayoption/always)

# always

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A display option that always displays the component.

## Declaration

```swift
static var always: URL.FormatStyle.ComponentDisplayOption { get }
```

## See Also

### Display options

- [never](never.md): A display option that never displays the component.
- [omitIfHTTPFamily](omitifhttpfamily.md): A display option that omits the component if the URL scheme is any flavor of HTTP.
- [displayWhen(\_:matches:)](displaywhen%28__matches_%29.md): Returns a display option that displays the component when a specified component meets the specified requirements.
- [omitWhen(\_:matches:)](omitwhen%28__matches_%29.md): Returns a display option that omits the component when a specified component meets the specified requirements.
- [URL.FormatStyle.Component](../component.md): An enumeration of the components of a URL, for use in creating format style options that depend on a component’s value.
