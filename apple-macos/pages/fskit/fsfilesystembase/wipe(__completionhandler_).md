> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsfilesystembase/wipe(_:completionhandler:)](https://developer.apple.com/documentation/fskit/fsfilesystembase/wipe(_:completionhandler:))

# wipe(\_:completionHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Wipes existing file systems on the specified resource.

## Declaration

```swift
func wipe(_ resource: FSBlockDeviceResource, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func wipe(_ resource: FSBlockDeviceResource) async throws
```

## Parameters

- `resource`: The [FSBlockDeviceResource](../fsblockdeviceresource.md) to wipe.
- `completion`: A block or closure that executes after the wipe operation completes. The completion handler receives a single parameter indicating any error that occurs during the operation. If the value is `nil`, the wipe operation succeeded.

<a id="discussion"></a>

## Discussion

This method wraps the `wipefs` functionality from `libutil`. For more information, see the `man` page for `wipefs`.

## See Also

### Implementing essential functionality

- [containerStatus](containerstatus.md): The status of the file system container, indicating its readiness and activity.

# wipeResource:completionHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Wipes existing file systems on the specified resource.

## Declaration

```objectivec
- (void) wipeResource:(FSBlockDeviceResource *) resource completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `resource`: The [FSBlockDeviceResource](../fsblockdeviceresource.md) to wipe.
- `completion`: A block or closure that executes after the wipe operation completes. The completion handler receives a single parameter indicating any error that occurs during the operation. If the value is `nil`, the wipe operation succeeded.

<a id="discussion"></a>

## Discussion

This method wraps the `wipefs` functionality from `libutil`. For more information, see the `man` page for `wipefs`.

## See Also

### Implementing essential functionality

- [containerStatus](containerstatus.md): The status of the file system container, indicating its readiness and activity.
