> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1445770-lssharedfilelistaddobserver](https://developer.apple.com/documentation/coreservices/1445770-lssharedfilelistaddobserver)

# LSSharedFileListAddObserver(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListAddObserver(_ inList: LSSharedFileList?, _ inRunloop: CFRunLoop, _ inRunloopMode: CFString, _ callback: LSSharedFileListChangedProcPtr, _ context: UnsafeMutableRawPointer?)
```

# LSSharedFileListAddObserver (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```objectivec
void LSSharedFileListAddObserver(LSSharedFileListRef inList, CFRunLoopRef inRunloop, CFStringRef inRunloopMode, LSSharedFileListChangedProcPtr callback, void *context);
```
