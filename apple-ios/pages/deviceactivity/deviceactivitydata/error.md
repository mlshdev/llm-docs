> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/error](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/error)

# DeviceActivityData.Error

**Framework:** Device Activity  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Errors that may occur when attempting to fetch activity data.

## Declaration

```swift
enum Error
```

## Topics

### Representing errors

- [DeviceActivityData.Error.unavailable](error/unavailable.md): An error indicating data access is unavailable.
- [DeviceActivityData.Error.unauthorized](error/unauthorized.md): An error indicating the app isn’t authorized to provide parental controls and access data.
- [DeviceActivityData.Error.missingData](error/missingdata.md): An error indicating the requested data does not exist.

### Describing errors

- [errorDescription](error/errordescription.md): A localized message that describes what error occurred.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing data access

- [DeviceActivityData.Policy](policy.md): The policy for fetching activity data.
