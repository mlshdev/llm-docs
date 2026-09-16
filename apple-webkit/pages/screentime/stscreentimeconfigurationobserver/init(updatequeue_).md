> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screentime/stscreentimeconfigurationobserver/init(updatequeue:)

# init(updateQueue:) (Swift)

**Framework:** Screen Time  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Creates a configuration observer that reports updates on the queue you specify.

## Declaration

```swift
init(updateQueue: dispatch_queue_t)
```

## Parameters

- `updateQueue`: The queue on which to report updates.

# initWithUpdateQueue: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Creates a configuration observer that reports updates on the queue you specify.

## Declaration

```objectivec
- (instancetype) initWithUpdateQueue:(dispatch_queue_t) updateQueue;
```

## Parameters

- `updateQueue`: The queue on which to report updates.
