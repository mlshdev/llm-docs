> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/keyselectproc

# keySelectProc

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

You pass this value in the `functionClass` parameter of the [AEManagerInfo(\_:\_:)](1449373-aemanagerinfo.md) function to disable the Object Support Library. Disabling the Object Support Library is not recommended.

## Declaration

```swift
var keySelectProc: AEKeyword { get }
```
