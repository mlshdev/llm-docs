> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/scannerdeviceview(_:didencountererror:)

# scannerDeviceView(\_:didEncounterError:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Invoked whenever the scanner encounters an error.

## Declaration

```swift
optional func scannerDeviceView(_ scannerDeviceView: IKScannerDeviceView!, didEncounterError error: (any Error)!)
```

## Parameters

- `scannerDeviceView`: The scanner device that sent the message.
- `error`: The error.

# scannerDeviceView:didEncounterError: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Invoked whenever the scanner encounters an error.

## Declaration

```objectivec
- (void) scannerDeviceView:(IKScannerDeviceView *) scannerDeviceView didEncounterError:(NSError *) error;
```

## Parameters

- `scannerDeviceView`: The scanner device that sent the message.
- `error`: The error.
