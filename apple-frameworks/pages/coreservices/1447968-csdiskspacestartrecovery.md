> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1447968-csdiskspacestartrecovery

# CSDiskSpaceStartRecovery(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```swift
func CSDiskSpaceStartRecovery(_ volumeURL: CFURL!, _ bytesNeeded: UInt64, _ options: CSDiskSpaceRecoveryOptions, _ outOperationUUID: UnsafeMutablePointer<Unmanaged<CFUUID>?>!, _ callbackQueue: dispatch_queue_t!, _ callback: CSDiskSpaceRecoveryCallback!)
```

# CSDiskSpaceStartRecovery (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.7+

## Declaration

```objectivec
void CSDiskSpaceStartRecovery(CFURLRef volumeURL, UInt64 bytesNeeded, CSDiskSpaceRecoveryOptions options, CFUUIDRef *outOperationUUID, dispatch_queue_t callbackQueue, CSDiskSpaceRecoveryCallback callback);
```
