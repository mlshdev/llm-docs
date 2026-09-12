> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristicevent/updatetriggervalue(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmcharacteristicevent/updatetriggervalue(_:completionhandler:))

# updateTriggerValue(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Changes the trigger value associated with this event.

> Use the mutable region property on the [HMMutableLocationEvent](../hmmutablelocationevent.md) subclass of [HMLocationEvent](../hmlocationevent.md) instead.

## Declaration

```swift
func updateTriggerValue(_ triggerValue: TriggerValueType?, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func updateTriggerValue(_ triggerValue: TriggerValueType?) async throws
```

## Parameters

- `triggerValue`: The value of the characteristic that triggers the event.
- `completion`: The block executed once the trigger value update request has been processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Set the trigger value to `nil` to trigger the event whenever the value of the characteristic changes.

# updateTriggerValue:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 14.0+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Changes the trigger value associated with this event.

> Use the mutable region property on the [HMMutableLocationEvent](../hmmutablelocationevent.md) subclass of [HMLocationEvent](../hmlocationevent.md) instead.

## Declaration

```objectivec
- (void) updateTriggerValue:(TriggerValueType) triggerValue completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `triggerValue`: The value of the characteristic that triggers the event.
- `completion`: The block executed once the trigger value update request has been processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

Set the trigger value to `nil` to trigger the event whenever the value of the characteristic changes.
