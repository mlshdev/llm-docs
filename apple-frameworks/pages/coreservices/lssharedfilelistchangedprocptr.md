> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/lssharedfilelistchangedprocptr

# LSSharedFileListChangedProcPtr (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 16.0+ · macOS 10.5+

## Declaration

```swift
typealias LSSharedFileListChangedProcPtr = (LSSharedFileList, UnsafeMutableRawPointer) -> Void
```

# LSSharedFileListChangedProcPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 16.0+ · macOS 10.5+

## Declaration

```objectivec
typedef void (*LSSharedFileListChangedProcPtr)(LSSharedFileListRef inList, void *context);
```
