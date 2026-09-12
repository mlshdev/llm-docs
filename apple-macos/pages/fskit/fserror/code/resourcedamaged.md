> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fserror/code/resourcedamaged](https://developer.apple.com/documentation/fskit/fserror/code/resourcedamaged)

# FSError.Code.resourceDamaged (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The resource is damaged.

## Declaration

```swift
case resourceDamaged
```

<a id="discussion"></a>

## Discussion

This error indicates the resource needs a repair operation, or that a repair operation failed.

> **Note**

> The status in this error applies to the resource. A failing repair operation reports a more specific error status.

## See Also

### Identifying errors

- [FSError.Code.invalidDirectoryCookie](invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSError.Code.moduleLoadFailed](moduleloadfailed.md): The module failed to load.
- [FSError.Code.resourceUnrecognized](resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSError.Code.resourceUnusable](resourceunusable.md): FSKit recognizes the resource, but the resource isn’t usable.
- [FSError.Code.statusOperationInProgress](statusoperationinprogress.md): An operation is in progress.
- [FSError.Code.statusOperationPaused](statusoperationpaused.md): An operation is paused.

# FSErrorResourceDamaged (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The resource is damaged.

## Declaration

```objectivec
FSErrorResourceDamaged
```

<a id="discussion"></a>

## Discussion

This error indicates the resource needs a repair operation, or that a repair operation failed.

> **Note**

> The status in this error applies to the resource. A failing repair operation reports a more specific error status.

## See Also

### Identifying errors

- [FSErrorInvalidDirectoryCookie](invaliddirectorycookie.md): While enumerating a directory, the given cookie didn’t resolve to a valid directory entry.
- [FSErrorModuleLoadFailed](moduleloadfailed.md): The module failed to load.
- [FSErrorResourceUnrecognized](resourceunrecognized.md): FSKit didn’t recognize the resource, and probing failed to find a match.
- [FSErrorResourceUnusable](resourceunusable.md): FSKit recognizes the resource, but the resource isn’t usable.
- [FSErrorStatusOperationInProgress](statusoperationinprogress.md): An operation is in progress.
- [FSErrorStatusOperationPaused](statusoperationpaused.md): An operation is paused.
