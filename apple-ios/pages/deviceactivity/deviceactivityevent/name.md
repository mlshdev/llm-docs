> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/name](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/name)

# DeviceActivityEvent.Name

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The unique name of an event.

## Declaration

```swift
struct Name
```

<a id="overview"></a>

## Overview

`DeviceActivityEvent.Name` allows applications to associate an event with some of their own data.

## Topics

### Creating an Instance

- [init(rawValue:)](name/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.
- [init(\_:)](name/init%28__%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Creating an Event

- [init(applications:categories:webDomains:threshold:)](init%28applications_categories_webdomains_threshold_%29.md): Creates a new event.
- [includesAllActivity](includesallactivity.md): A Boolean value that indicates whether the event includes all applications, categories, and web domains.
