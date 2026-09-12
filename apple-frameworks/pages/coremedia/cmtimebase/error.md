> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/error](https://developer.apple.com/documentation/coremedia/cmtimebase/error)

# CMTimebase.Error

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe timebase errors.

## Declaration

```swift
struct Error
```

## Topics

### Constants

- [allocationFailed](error/allocationfailed.md): A timebase error that indicates the memory allocation fails.
- [invalidParameter](error/invalidparameter.md): A timebase error that indicates a parameter isn’t valid.
- [missingRequiredParameter](error/missingrequiredparameter.md): A timebase error that indicates a missing parameter.
- [readOnly](error/readonly.md): A timebase error that indicates the system attempts to modify a read-only timebase.
- [timerIntervalTooShort](error/timerintervaltooshort.md): A timebase error that indicates the time interval is too short.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CMTimebase.NotificationKey](notificationkey.md): Constants that describe notification keys.
- [typeID](typeid.md): A Core Foundation type identifier that represents a timebase object.
