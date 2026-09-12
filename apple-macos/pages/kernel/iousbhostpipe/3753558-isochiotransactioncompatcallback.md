> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe/3753558-isochiotransactioncompatcallback](https://developer.apple.com/documentation/kernel/iousbhostpipe/3753558-isochiotransactioncompatcallback)

# isochIOTransactionCompatCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 12.0+ (deprecated in 12.0)

## Declaration

```objectivec
static void isochIOTransactionCompatCallback(void *owner, void *parameter, IOReturn status, IOUSBHostIsochronousTransaction *transactionList);
```
