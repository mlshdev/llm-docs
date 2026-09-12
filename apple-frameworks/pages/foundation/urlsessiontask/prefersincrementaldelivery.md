> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiontask/prefersincrementaldelivery](https://developer.apple.com/documentation/foundation/urlsessiontask/prefersincrementaldelivery)

# prefersIncrementalDelivery (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that determines whether to deliver a partial response body in increments.

## Declaration

```swift
var prefersIncrementalDelivery: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to tell the task that the app would benefit from receiving a partial response body in increments. If the app can’t process the response until it has all the data, set this property to `false`. Task performance may improve when this value is `false`, in which case the task only delivers data when complete.

This property defaults to `true`, except in the following cases which default to `false`:

- The task delivers results to a completion handler rather than to a delegate.
- The task is a download task.

# prefersIncrementalDelivery (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that determines whether to deliver a partial response body in increments.

## Declaration

```objectivec
@property BOOL prefersIncrementalDelivery;
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to tell the task that the app would benefit from receiving a partial response body in increments. If the app can’t process the response until it has all the data, set this property to `false`. Task performance may improve when this value is `false`, in which case the task only delivers data when complete.

This property defaults to `true`, except in the following cases which default to `false`:

- The task delivers results to a completion handler rather than to a delegate.
- The task is a download task.
