> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/keyaeversion

# keyAEVersion

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Used with the `keyword` parameter of the [AEManagerInfo(\_:\_:)](1449373-aemanagerinfo.md) function. If you pass this value, on return, the `result` parameter supplies version information for the Apple Event Manager, in NumVersion format.

## Declaration

```swift
var keyAEVersion: AEKeyword { get }
```
