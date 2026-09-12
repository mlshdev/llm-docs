> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/init(delegate:queue:)](https://developer.apple.com/documentation/externalaccessory/eawifiunconfiguredaccessorybrowser/init(delegate:queue:))

# init(delegate:queue:) (Swift)

**Framework:** External Accessory  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a browser object that scans for unconfigured accessories.

## Declaration

```swift
init(delegate: (any EAWiFiUnconfiguredAccessoryBrowserDelegate)?, queue: dispatch_queue_t?)
```

## Parameters

- `delegate`: The object that you use to receive browser-related events.
- `queue`: The dispatch queue on which the delegate would like to receive events. If `nil`, the events will be on the main queue.

<a id="return-value"></a>

## Return Value

An initialized browser object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `EAWiFiUnconfiguredAccessoryBrowser`. After initialization, an app can configure a browser object based on its interests.

# initWithDelegate:queue: (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a browser object that scans for unconfigured accessories.

## Declaration

```objectivec
- (instancetype) initWithDelegate:(id<EAWiFiUnconfiguredAccessoryBrowserDelegate>) delegate queue:(dispatch_queue_t) queue;
```

## Parameters

- `delegate`: The object that you use to receive browser-related events.
- `queue`: The dispatch queue on which the delegate would like to receive events. If `nil`, the events will be on the main queue.

<a id="return-value"></a>

## Return Value

An initialized browser object.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for `EAWiFiUnconfiguredAccessoryBrowser`. After initialization, an app can configure a browser object based on its interests.
