> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/regexcomponent/iso8601components](https://developer.apple.com/documentation/swift/regexcomponent/iso8601components)

# iso8601Components

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a regex component to match an ISO 8601 date and time, such as “2015-11-14’T’15:05:03’Z’”, and capture the string as a `DateComponents` using the time zone as specified in the string.

## Declaration

```swift
static var iso8601Components: DateComponents.ISO8601FormatStyle { get }
```
