> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/scannerdevice:didscantourl:data:

# scannerDevice:didScanToURL:data:

**Interface language:** Objective-C

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.7)

Tells the client when the scanner device receives the requested scan.

## Declaration

```objectivec
- (void) scannerDevice:(ICScannerDevice *) scanner didScanToURL:(NSURL *) url data:(NSData *) data;
```

<a id="Discussion"></a>

## Discussion

If the [selectedFunctionalUnit](../icscannerdevice/selectedfunctionalunit.md) is a document feeder, then this message is sent once for each scanned page.

This method has been deprecated. Use [scannerDevice:didScanToURL:](scannerdevice%28__didscanto_%29-10whl.md) for file-based transfer, or [scannerDevice:didScanToBandData:](scannerdevice%28__didscanto_%29-6tht3.md) for memory-based transfer.
