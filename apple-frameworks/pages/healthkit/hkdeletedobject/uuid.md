> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdeletedobject/uuid](https://developer.apple.com/documentation/healthkit/hkdeletedobject/uuid)

# uuid (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The universally unique identifier (UUID) for the HealthKit object that was deleted from the store.

## Declaration

```swift
var uuid: UUID { get }
```

<a id="Discussion"></a>

## Discussion

Use this UUID to identify and remove the deleted objects from any copies of the HealthKit data that you have stored outside of HealthKit. For example, if you upload sample data to your server, use the deleted object’s UUID to find and remove it from your server.

## See Also

### Identifying Deleted Objects

- [metadata](metadata.md): The metadata associated with the deleted object.

# UUID (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The universally unique identifier (UUID) for the HealthKit object that was deleted from the store.

## Declaration

```objectivec
@property (strong, readonly) NSUUID * UUID;
```

<a id="Discussion"></a>

## Discussion

Use this UUID to identify and remove the deleted objects from any copies of the HealthKit data that you have stored outside of HealthKit. For example, if you upload sample data to your server, use the deleted object’s UUID to find and remove it from your server.

## See Also

### Identifying Deleted Objects

- [metadata](metadata.md): The metadata associated with the deleted object.
