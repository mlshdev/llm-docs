> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmfalldetectionevent](https://developer.apple.com/documentation/coremotion/cmfalldetectionevent)

# CMFallDetectionEvent (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** watchOS 7.2+

An object that contains data about a fall detection event.

## Declaration

```swift
class CMFallDetectionEvent
```

## Topics

### Accessing Fall Data

- [resolution](cmfalldetectionevent/resolution.md): The event’s resolution.
- [CMFallDetectionEvent.UserResolution](cmfalldetectionevent/userresolution.md): User resolutions for fall detection events.

### Getting the event date

- [date](cmfalldetectionevent/date.md): The event’s time and date.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fall detection

- [CMFallDetectionManager](cmfalldetectionmanager.md): An object for managing fall detection events.
- [CMFallDetectionDelegate](cmfalldetectiondelegate.md): A delegate that receives information about fall detection events and authorization status changes.
- [NSFallDetectionUsageDescription](../bundleresources/information-property-list/nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.

# CMFallDetectionEvent (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** watchOS 7.2+

An object that contains data about a fall detection event.

## Declaration

```objectivec
@interface CMFallDetectionEvent : NSObject
```

## Topics

### Accessing Fall Data

- [resolution](cmfalldetectionevent/resolution.md): The event’s resolution.
- [CMFallDetectionEventUserResolution](cmfalldetectionevent/userresolution.md): User resolutions for fall detection events.

### Getting the event date

- [date](cmfalldetectionevent/date.md): The event’s time and date.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Fall detection

- [CMFallDetectionManager](cmfalldetectionmanager.md): An object for managing fall detection events.
- [CMFallDetectionDelegate](cmfalldetectiondelegate.md): A delegate that receives information about fall detection events and authorization status changes.
- [NSFallDetectionUsageDescription](../bundleresources/information-property-list/nsfalldetectionusagedescription.md): A message to the user that explains the app’s request for permission to access fall detection event data.
