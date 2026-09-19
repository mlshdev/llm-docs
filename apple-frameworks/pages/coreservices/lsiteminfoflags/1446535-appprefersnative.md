> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/lsiteminfoflags/1446535-appprefersnative

# appPrefersNative

**Framework:** Core Services  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11)

Item is an application that can run either natively or in the Classic emulation environment, but prefers to be launched natively. This flag is valid only when `kLSItemInfoIsNativeApp` is set.

## Declaration

```swift
static var appPrefersNative: LSItemInfoFlags { get }
```
