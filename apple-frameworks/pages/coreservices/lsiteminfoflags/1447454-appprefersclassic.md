> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsiteminfoflags/1447454-appprefersclassic](https://developer.apple.com/documentation/coreservices/lsiteminfoflags/1447454-appprefersclassic)

# appPrefersClassic

**Framework:** Core Services  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11)

Item is an application that can run either natively or in the Classic emulation environment, but prefers tobe launched in the Classic environment. This flag is valid only when `kLSItemInfoIsNativeApp` isset.

## Declaration

```swift
static var appPrefersClassic: LSItemInfoFlags { get }
```
