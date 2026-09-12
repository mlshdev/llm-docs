> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmlocationevent/updateregion(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmlocationevent/updateregion(_:completionhandler:))

# updateRegion(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Changes the region associated with this event.

> Use the mutable [region](../hmmutablelocationevent/region.md) property on the [HMMutableLocationEvent](../hmmutablelocationevent.md) subclass of [HMLocationEvent](../hmlocationevent.md) instead.

## Declaration

```swift
func updateRegion(_ region: CLRegion, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateRegion(_ region: CLRegion) async throws
```

## Parameters

- `region`: New region on which the event is triggered. Must have at least one of [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) or [notifyOnExit](../../corelocation/clregion/notifyonexit.md) set to [true](https://developer.apple.com/documentation/swift/true).
- `completion`: The block executed when the region update request has been processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

# updateRegion:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Changes the region associated with this event.

> Use the mutable [region](../hmmutablelocationevent/region.md) property on the [HMMutableLocationEvent](../hmmutablelocationevent.md) subclass of [HMLocationEvent](../hmlocationevent.md) instead.

## Declaration

```objectivec
- (void) updateRegion:(CLRegion *) region completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `region`: New region on which the event is triggered. Must have at least one of [notifyOnEntry](../../corelocation/clregion/notifyonentry.md) or [notifyOnExit](../../corelocation/clregion/notifyonexit.md) set to [true](https://developer.apple.com/documentation/swift/true).
- `completion`: The block executed when the region update request has been processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.
