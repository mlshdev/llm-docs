> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationupdater/liveupdaterwithconfiguration:queue:handler:](https://developer.apple.com/documentation/corelocation/cllocationupdater/liveupdaterwithconfiguration:queue:handler:)

# liveUpdaterWithConfiguration:queue:handler:

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a location updater with the configuration and queue that you specify.

## Declaration

```objectivec
+ (instancetype) liveUpdaterWithConfiguration:(CLLiveUpdateConfiguration) configuration queue:(dispatch_queue_t) queue handler:(void (^)(CLUpdate *update)) handler;
```

## Parameters

- `configuration`: Specifies the live update configuration that the framework uses.
- `queue`: Specifies the queue to which the framework submits the handler with each available update.
- `handler`: The block that the framework invokes with each update.

<a id="return-value"></a>

## Return Value

Returns a location updater instance with the specified configuration, queue, and update handler.

## See Also

### Creating a location updater

- [liveUpdaterWithQueue:handler:](liveupdaterwithqueue_handler_.md): Creates a location updater on the queue you specify.
- [CLLiveUpdateConfiguration](../clliveupdateconfiguration.md): Specifies the types of locations that a location updater generates.
