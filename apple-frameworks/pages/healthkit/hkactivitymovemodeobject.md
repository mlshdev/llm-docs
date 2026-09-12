> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitymovemodeobject](https://developer.apple.com/documentation/healthkit/hkactivitymovemodeobject)

# HKActivityMoveModeObject (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

An object that contains a movement mode value.

## Declaration

```swift
class HKActivityMoveModeObject
```

## Topics

### Accessing the data

- [activityMoveMode](hkactivitymovemodeobject/activitymovemode.md): A property that contains the movement mode value.

### Initializers

- [init(coder:)](hkactivitymovemodeobject/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Activity rings

- [HKActivitySummary](hkactivitysummary.md): An object that contains the move, exercise, and stand data for a given day.
- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md): A query interface that reads activity summaries using Swift concurrency.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKActivityRingView](../healthkitui/hkactivityringview.md): A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.

# HKActivityMoveModeObject (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

An object that contains a movement mode value.

## Declaration

```objectivec
@interface HKActivityMoveModeObject : NSObject
```

## Topics

### Accessing the data

- [activityMoveMode](hkactivitymovemodeobject/activitymovemode.md): A property that contains the movement mode value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Activity rings

- [HKActivitySummary](hkactivitysummary.md): An object that contains the move, exercise, and stand data for a given day.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKActivityRingView](../healthkitui/hkactivityringview.md): A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.
