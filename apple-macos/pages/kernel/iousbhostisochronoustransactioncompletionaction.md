> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostisochronoustransactioncompletionaction](https://developer.apple.com/documentation/kernel/iousbhostisochronoustransactioncompletionaction)

# IOUSBHostIsochronousTransactionCompletionAction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 12.0+

## Declaration

```objectivec
typedef void (*IOUSBHostIsochronousTransactionCompletionAction)(void *owner, void *parameter, IOReturn status, IOUSBHostIsochronousTransaction *transactionList);
```
