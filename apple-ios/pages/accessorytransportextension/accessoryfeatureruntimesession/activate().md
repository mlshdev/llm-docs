> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureruntimesession/activate()

# activate()

**Framework:** Accessory Transport Extension  
**Kind:** Instance Method  
**Availability:** iOS 27.3+ beta

Registers the session and requests that the system start it.

## Declaration

```swift
func activate() async throws
```

## Mentioned In

- [Sending data to an accessory in the background](../sending-data-to-an-accessory-in-the-background.md)

<a id="discussion"></a>

## Discussion

Returning from this method doesn’t mean the session started. The system calls [sessionStarted(\_:)](../accessoryfeatureruntimesessionhandler/sessionstarted%28__%29.md) after registering the session and after your app enrolls the feature. For more information about feature enrollment, see [Accessory features](../accessory-features.md).

This method throws [AccessoryTransportSession.Error.unavailable](../accessorytransportsession/error/unavailable.md) if the feature isn’t available on the device, and the system throws an error if a live session for the same feature already exists.

This method doesn’t throw when the feature isn’t enrolled for the accessory. Check the status with `AccessoryWorker/authorizationStatus(for:)` before you call this method.

## Default Implementations

### AccessoryFeatureRuntimeSession Implementations

- [activate()](activate%28%29-6fbg3.md): Beta.

## See Also

### Managing the session life cycle

- [invalidate()](invalidate%28%29.md): Beta. Unregisters the session.
