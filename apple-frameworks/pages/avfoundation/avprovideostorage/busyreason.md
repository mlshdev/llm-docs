> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avprovideostorage/busyreason

# AVProVideoStorage.BusyReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A reason that Pro Video Storage may be busy.

## Declaration

```swift
struct BusyReason
```

## Topics

### Initializers

- [init(rawValue:)](busyreason/init%28rawvalue_%29.md)

### Type Properties

- [adjustingCapacity](busyreason/adjustingcapacity.md): Pro Video Storage is being created or resized.
- [capturing](busyreason/capturing.md): A capture to Pro Video Storage is in progress.
- [replenishing](busyreason/replenishing.md): Pro Video Storage capacity is being replenished.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining whether storage is busy

- [busyReasons](busyreasons.md): Whether Pro Video Storage is busy and the associated reasons.

# AVProVideoStorageBusyReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A reason that Pro Video Storage may be busy.

## Declaration

```objectivec
typedef NSString * AVProVideoStorageBusyReason;
```

## See Also

### Determining whether storage is busy

- [busyReasons](busyreasons.md): Whether Pro Video Storage is busy and the associated reasons.
