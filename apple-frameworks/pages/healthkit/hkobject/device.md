> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobject/device](https://developer.apple.com/documentation/healthkit/hkobject/device)

# device (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The device that generated the data for this object.

## Declaration

```swift
var device: HKDevice? { get }
```

## See Also

### Accessing Properties

- [uuid](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](metadata.md): The metadata for this HealthKit object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.

# device (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The device that generated the data for this object.

## Declaration

```objectivec
@property (strong, readonly, nullable) HKDevice * device;
```

## See Also

### Accessing Properties

- [UUID](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [metadata](metadata.md): The metadata for this HealthKit object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
