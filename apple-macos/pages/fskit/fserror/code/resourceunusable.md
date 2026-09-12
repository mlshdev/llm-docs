> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fserror/code/resourceunusable](https://developer.apple.com/documentation/fskit/fserror/code/resourceunusable)

# FSError.Code.resourceUnusable (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

FSKit recognizes the resource, but the resource isn’t usable.

## Declaration

```swift
case resourceUnusable
```

<a id="discussion"></a>

## Discussion

For example, this error occurs when a resource uses a file system’s internal feature flags. If the only modules that support the file system don’t support those feature flags, this code indicates an unusable resource. The error tells the person using the module why the resource isn’t usable.

## See Also

### Identifying errors

- [FSError.Code.invalidDirectoryCookie](invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSError.Code.moduleLoadFailed](moduleloadfailed.md): The module failed to load.
- [FSError.Code.resourceDamaged](resourcedamaged.md): The resource is damaged.
- [FSError.Code.resourceUnrecognized](resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSError.Code.statusOperationInProgress](statusoperationinprogress.md): An operation is in progress.
- [FSError.Code.statusOperationPaused](statusoperationpaused.md): An operation is paused.

# FSErrorResourceUnusable (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

FSKit recognizes the resource, but the resource isn’t usable.

## Declaration

```objectivec
FSErrorResourceUnusable
```

<a id="discussion"></a>

## Discussion

For example, this error occurs when a resource uses a file system’s internal feature flags. If the only modules that support the file system don’t support those feature flags, this code indicates an unusable resource. The error tells the person using the module why the resource isn’t usable.

## See Also

### Identifying errors

- [FSErrorInvalidDirectoryCookie](invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSErrorModuleLoadFailed](moduleloadfailed.md): The module failed to load.
- [FSErrorResourceDamaged](resourcedamaged.md): The resource is damaged.
- [FSErrorResourceUnrecognized](resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSErrorStatusOperationInProgress](statusoperationinprogress.md): An operation is in progress.
- [FSErrorStatusOperationPaused](statusoperationpaused.md): An operation is paused.
