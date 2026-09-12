> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationupdate/liveupdates(_:)](https://developer.apple.com/documentation/corelocation/cllocationupdate/liveupdates(_:))

# liveUpdates(\_:)

**Framework:** Core Location  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Tells Core Location to start delivering the location updates it produces for the configuration you specify.

## Declaration

```swift
static func liveUpdates(_ configuration: CLLocationUpdate.LiveConfiguration = .default) -> CLLocationUpdate.Updates
```

## Parameters

- `configuration`: A configuration that describes the updates for the framework to deliver.

<a id="return-value"></a>

## Return Value

[CLLocationUpdate.Updates](updates.md) that meet the criteria you specify.

## Mentioned In

- [Creating a location push service extension](../creating-a-location-push-service-extension.md)

## See Also

### Receiving location updates

- [CLLocationUpdate.LiveConfiguration](liveconfiguration.md): Values that indicate the kind of positioning updates the framework delivers.
- [CLLocationUpdate.Updates](updates.md): A structure that represents an asynchronous sequence of location updates.
