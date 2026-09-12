> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didselect:error:)](https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice(_:didselect:error:))

# scannerDevice(\_:didSelect:error:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when a functional unit is selected on the scanner.

## Declaration

```swift
optional func scannerDevice(_ scanner: ICScannerDevice, didSelect functionalUnit: ICScannerFunctionalUnit, error: (any Error)?)
```

<a id="Discussion"></a>

## Discussion

A functional unit is selected immediately after the scanner instantiates and in response to calling [requestSelect(\_:)](../icscannerdevice/requestselect%28__%29.md).

# scannerDevice:didSelectFunctionalUnit:error: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the client when a functional unit is selected on the scanner.

## Declaration

```objectivec
- (void) scannerDevice:(ICScannerDevice *) scanner didSelectFunctionalUnit:(ICScannerFunctionalUnit *) functionalUnit error:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

A functional unit is selected immediately after the scanner instantiates and in response to calling [requestSelectFunctionalUnit:](../icscannerdevice/requestselect%28__%29.md).
