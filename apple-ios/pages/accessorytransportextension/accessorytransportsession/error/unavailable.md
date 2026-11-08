> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessorytransportsession/error/unavailable

# AccessoryTransportSession.Error.unavailable

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 27.3+ beta

An error that indicates the feature isn’t available on the device.

## Declaration

```swift
case unavailable
```

<a id="discussion"></a>

## Discussion

[activate()](../../accessoryfeatureruntimesession/activate%28%29.md) and `AccessoryWorker/requestAuthorization(for:)` (and the matching `AccessoryGPUWorker/requestAuthorization(for:)`) throw this error when the system determines that the feature isn’t currently eligible to run on the device. [makeFeatureSession(\_:)](../makefeaturesession%28__%29.md) doesn’t throw it. If a device loses eligibility while a feature session is already running, the system reports the error through [sessionInvalidated(error:)](../../accessoryfeatureruntimesessionhandler/sessioninvalidated%28error_%29.md) instead.

Region is the only eligibility check behind this error. The framework restricts [AccessoryWorker](../../accessoryworker.md) and [AccessoryGPUWorker](../../accessorygpuworker.md) to the EU-region devices described in [Accessory Transport Extension](../../../accessorytransportextension.md). The system doesn’t restrict eligibility by device class.

## See Also

### Identifying session errors

- [AccessoryTransportSession.Error.invalidated](invalidated.md): An error that indicates the session is invalidated.
- [AccessoryTransportSession.Error.unsupported](unsupported.md): An error that indicates a client-provided value or operation isn’t supported.
- [AccessoryTransportSession.Error.unknown](unknown.md): An error that indicates a failure with an unknown cause.
