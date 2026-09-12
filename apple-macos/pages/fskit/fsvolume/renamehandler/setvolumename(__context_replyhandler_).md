> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/renamehandler/setvolumename(_:context:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/renamehandler/setvolumename(_:context:replyhandler:))

# setVolumeName(\_:context:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets a new name for the volume.

## Declaration

```swift
func setVolumeName(_ name: FSFileName, context: FSContext, replyHandler reply: @escaping @Sendable (FSVolumeRenameResult?, (any Error)?) -> Void)
```

```swift
func setVolumeName(_ name: FSFileName, context: FSContext) async throws -> FSVolumeRenameResult
```

## Parameters

- `name`: The new volume name.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If renaming succeeds, pass an instance of [FSVolumeRenameResult](../../fsvolumerenameresult.md) containing the [FSFileName](../../fsfilename.md) of the new volume name, along with a `nil` error. If renaming fails, pass the relevant error as the second parameter; FSKit ignores the [FSVolumeRenameResult](../../fsvolumerenameresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Renaming the volume

- [FSVolumeRenameResult](../../fsvolumerenameresult.md): The result of a rename-volume call.

# setVolumeName:context:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Sets a new name for the volume.

## Declaration

```objectivec
- (void) setVolumeName:(FSFileName *) name context:(FSContext *) context replyHandler:(void (^)(FSVolumeRenameResult *result, NSError *error)) reply;
```

## Parameters

- `name`: The new volume name.
- `context`: An object that enables context-aware file system decisions throughout the operation.
- `reply`: A block or closure to indicate success or failure. If renaming succeeds, pass an instance of [FSVolumeRenameResult](../../fsvolumerenameresult.md) containing the [FSFileName](../../fsfilename.md) of the new volume name, along with a `nil` error. If renaming fails, pass the relevant error as the second parameter; FSKit ignores the [FSVolumeRenameResult](../../fsvolumerenameresult.md) instance in this case. For an `async` Swift implementation, there’s no reply handler; simply return the result instance or throw an error.

## See Also

### Renaming the volume

- [FSVolumeRenameResult](../../fsvolumerenameresult.md): The result of a rename-volume call.
