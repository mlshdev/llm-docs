> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginestateserialization](https://developer.apple.com/documentation/cloudkit/cksyncenginestateserialization)

# CKSyncEngineStateSerialization

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An opaque object that contains the serialized representation of a sync engine’s current state.

## Declaration

```objectivec
@interface CKSyncEngineStateSerialization : NSObject
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing the state

- [stateSerialization](cksyncenginestateupdateevent/stateserialization.md): The current state of the sync engine.
