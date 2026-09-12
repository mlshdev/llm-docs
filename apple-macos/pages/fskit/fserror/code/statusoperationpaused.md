> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fserror/code/statusoperationpaused](https://developer.apple.com/documentation/fskit/fserror/code/statusoperationpaused)

# FSError.Code.statusOperationPaused (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

An operation is paused.

## Declaration

```swift
case statusOperationPaused
```

## See Also

### Identifying errors

- [FSError.Code.invalidDirectoryCookie](invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSError.Code.moduleLoadFailed](moduleloadfailed.md): The module failed to load.
- [FSError.Code.resourceDamaged](resourcedamaged.md): The resource is damaged.
- [FSError.Code.resourceUnrecognized](resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSError.Code.resourceUnusable](resourceunusable.md): FSKit recognizes the resource, but the resource isn’t usable.
- [FSError.Code.statusOperationInProgress](statusoperationinprogress.md): An operation is in progress.

# FSErrorStatusOperationPaused (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An operation is paused.

## Declaration

```objectivec
FSErrorStatusOperationPaused
```

## See Also

### Identifying errors

- [FSErrorInvalidDirectoryCookie](invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSErrorModuleLoadFailed](moduleloadfailed.md): The module failed to load.
- [FSErrorResourceDamaged](resourcedamaged.md): The resource is damaged.
- [FSErrorResourceUnrecognized](resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSErrorResourceUnusable](resourceunusable.md): FSKit recognizes the resource, but the resource isn’t usable.
- [FSErrorStatusOperationInProgress](statusoperationinprogress.md): An operation is in progress.
