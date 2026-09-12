> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/setcachestate(for:cachemode:coherencytype:action:)](https://developer.apple.com/documentation/fskit/fsvolume/setcachestate(for:cachemode:coherencytype:action:))

# setCacheState(for:cacheMode:coherencyType:action:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sends a synchronous cache state update request from the module to the kernel.

## Declaration

```swift
func setCacheState(for item: FSItem, cacheMode: FSVolume.DataCacheMode, coherencyType: FSVolume.KernelCacheCoherencyType, action: FSVolume.KernelCacheCoherencyAction) -> (any Error)?
```

## Parameters

- `item`: The item for which to update the cache state.
- `cacheMode`: The new cache mode to apply.
- `coherencyType`: The new coherency type to apply.
- `action`: The action for the kernel to perform on cached data (push, invalidate, update, or revoke).

<a id="return-value"></a>

## Return Value

An error if the kernel was unable to complete the requested cache state change, or `nil` on success.

<a id="discussion"></a>

## Discussion

Volumes conforming to [FSVolume.DataCacheHandler](datacachehandler.md) call this method to proactively notify the kernel about cache policy changes that need to be applied immediately. This allows module-initiated updates outside the normal open/close/upgrade/downgrade flow.

When downgrading coherency type, the action must be [FSVolume.KernelCacheCoherencyAction.push](kernelcachecoherencyaction/push.md), [FSVolume.KernelCacheCoherencyAction.pushInvalidate](kernelcachecoherencyaction/pushinvalidate.md), or [FSVolume.KernelCacheCoherencyAction.invalidate](kernelcachecoherencyaction/invalidate.md) to instruct the kernel how to handle cached data. If the action fails, the cache state remains unchanged and the method returns an error.

> **Important**

> This method must be called without holding any module-internal locks. The kernel may issue additional operations back into the module to satisfy cache state changes, which could result in deadlock if locks are held.

> **Note**

> This method is only functional for volumes that conform to [FSVolume.DataCacheHandler](datacachehandler.md). For volumes that don’t conform to the protocol, this method returns `ENOTSUP`.

## See Also

### Managing caching behavior

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSVolume.DataCacheMode](datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSVolume.KernelCacheCoherencyType](kernelcachecoherencytype.md): A type that defines how the kernel caches data.
- [FSVolume.KernelCacheCoherencyAction](kernelcachecoherencyaction.md): A type that defines actions for cache state changes.

# setCacheStateForItem:cacheMode:coherencyType:coherencyAction: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sends a synchronous cache state update request from the module to the kernel.

## Declaration

```objectivec
- (NSError *) setCacheStateForItem:(FSItem *) item cacheMode:(FSDataCacheMode) cacheMode coherencyType:(FSKernelCacheCoherencyType) coherencyType coherencyAction:(FSKernelCacheCoherencyAction) action;
```

## Parameters

- `item`: The item for which to update the cache state.
- `cacheMode`: The new cache mode to apply.
- `coherencyType`: The new coherency type to apply.
- `action`: The action for the kernel to perform on cached data (push, invalidate, update, or revoke).

<a id="return-value"></a>

## Return Value

An error if the kernel was unable to complete the requested cache state change, or `nil` on success.

<a id="discussion"></a>

## Discussion

Volumes conforming to [FSVolumeDataCacheHandler](datacachehandler.md) call this method to proactively notify the kernel about cache policy changes that need to be applied immediately. This allows module-initiated updates outside the normal open/close/upgrade/downgrade flow.

When downgrading coherency type, the action must be [FSKernelCacheCoherencyActionPush](kernelcachecoherencyaction/push.md), [FSKernelCacheCoherencyActionPushInvalidate](kernelcachecoherencyaction/pushinvalidate.md), or [FSKernelCacheCoherencyActionInvalidate](kernelcachecoherencyaction/invalidate.md) to instruct the kernel how to handle cached data. If the action fails, the cache state remains unchanged and the method returns an error.

> **Important**

> This method must be called without holding any module-internal locks. The kernel may issue additional operations back into the module to satisfy cache state changes, which could result in deadlock if locks are held.

> **Note**

> This method is only functional for volumes that conform to [FSVolumeDataCacheHandler](datacachehandler.md). For volumes that don’t conform to the protocol, this method returns `ENOTSUP`.

## See Also

### Managing caching behavior

- [FSItem](../fsitem.md): A distinct object in a file hierarchy, such as a file, directory, symlink, socket, and more.
- [FSDataCacheMode](datacachemode.md): A type that defines the cache mode requested by the kernel for data operations.
- [FSKernelCacheCoherencyType](kernelcachecoherencytype.md): A type that defines how the kernel caches data.
- [FSKernelCacheCoherencyAction](kernelcachecoherencyaction.md): A type that defines actions for cache state changes.
