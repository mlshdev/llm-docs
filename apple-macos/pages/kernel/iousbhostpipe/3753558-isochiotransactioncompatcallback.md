> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostpipe/3753558-isochiotransactioncompatcallback

# isochIOTransactionCompatCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
static void isochIOTransactionCompatCallback(void *owner, void *parameter, IOReturn status, IOUSBHostIsochronousTransaction *transactionList);
```
