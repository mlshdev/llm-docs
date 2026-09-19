> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartz/ikscannerdeviceviewdelegate/scannerdeviceview(_:didscanto:scaninfo:error:)

# scannerDeviceView(\_:didScanTo:scanInfo:error:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

## Declaration

```swift
optional func scannerDeviceView(_ scannerDeviceView: IKScannerDeviceView!, didScanTo data: ICScannerBandData!, scanInfo: [AnyHashable : Any]!, error: (any Error)!)
```

# scannerDeviceView:didScanToBandData:scanInfo:error: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

## Declaration

```objectivec
- (void) scannerDeviceView:(IKScannerDeviceView *) scannerDeviceView didScanToBandData:(ICScannerBandData *) data scanInfo:(NSDictionary *) scanInfo error:(NSError *) error;
```
