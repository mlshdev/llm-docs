> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/observation/observationregistrar](https://developer.apple.com/documentation/observation/observationregistrar)

# ObservationRegistrar

**Framework:** Observation  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Provides storage for tracking and access to data changes.

## Declaration

```swift
struct ObservationRegistrar
```

<a id="overview"></a>

## Overview

You don’t need to create an instance of `ObservationRegistrar` when using the [Observable()](observable%28%29.md) macro to indicate observability of a type.

## Topics

### Creating an observation registrar

- [init()](observationregistrar/init%28%29.md): Creates an instance of the observation registrar.

### Receiving change notifications

- [willSet(\_:keyPath:)](observationregistrar/willset%28__keypath_%29.md): A property observation called before setting the value of the subject.
- [didSet(\_:keyPath:)](observationregistrar/didset%28__keypath_%29.md): A property observation called after setting the value of the subject.

### Identifying transactional access

- [access(\_:keyPath:)](observationregistrar/access%28__keypath_%29.md): Registers access to a specific property for observation.
- [withMutation(of:keyPath:\_:)](observationregistrar/withmutation%28of_keypath___%29.md): Identifies mutations to the transactions registered for observers.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [Decodable](../swift/decodable.md)
- [Encodable](../swift/encodable.md)
- [Equatable](../swift/equatable.md)
- [Escapable](../swift/escapable.md)
- [Hashable](../swift/hashable.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Change tracking

- [withObservationTracking(\_:onChange:)](withobservationtracking%28__onchange_%29.md): Tracks access to properties.
