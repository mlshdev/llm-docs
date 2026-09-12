> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448112-lssharedfilelistcopysnapshot](https://developer.apple.com/documentation/coreservices/1448112-lssharedfilelistcopysnapshot)

# LSSharedFileListCopySnapshot(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListCopySnapshot(_ inList: LSSharedFileList, _ outSnapshotSeed: UnsafeMutablePointer<UInt32>?) -> Unmanaged<CFArray>?
```

# LSSharedFileListCopySnapshot (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```objectivec
CFArrayRef LSSharedFileListCopySnapshot(LSSharedFileListRef inList, UInt32 *outSnapshotSeed);
```
