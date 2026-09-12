> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/csdiskspacerecoverycallback](https://developer.apple.com/documentation/coreservices/csdiskspacerecoverycallback)

# CSDiskSpaceRecoveryCallback (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```swift
typealias CSDiskSpaceRecoveryCallback = (Bool, UInt64, CFError?) -> Void
```

# CSDiskSpaceRecoveryCallback (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

## Declaration

```objectivec
typedef void (^CSDiskSpaceRecoveryCallback)(Boolean succeeded, UInt64 bytesFree, CFErrorRef error);
```
