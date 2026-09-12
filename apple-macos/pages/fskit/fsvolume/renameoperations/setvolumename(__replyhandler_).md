> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/renameoperations/setvolumename(_:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/renameoperations/setvolumename(_:replyhandler:))

# setVolumeName(\_:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Sets a new name for the volume.

## Declaration

```swift
func setVolumeName(_ name: FSFileName, replyHandler reply: @escaping @Sendable (FSFileName?, (any Error)?) -> Void)
```

```swift
func setVolumeName(_ name: FSFileName) async throws -> FSFileName
```

## Parameters

- `name`: The new volume name.
- `reply`: A block or closure to indicate success or failure. If renaming succeeds, pass an [FSFileName](../../fsfilename.md) of the new volume name and a `nil` error. If renaming fails, pass the relevant error as the second parameter; FSKit ignores any [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSFileName](../../fsfilename.md) or throw an error.

# setVolumeName:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+ (deprecated in 27.0)

Sets a new name for the volume.

## Declaration

```objectivec
- (void) setVolumeName:(FSFileName *) name replyHandler:(void (^)(FSFileName *newName, NSError *error)) reply;
```

## Parameters

- `name`: The new volume name.
- `reply`: A block or closure to indicate success or failure. If renaming succeeds, pass an [FSFileName](../../fsfilename.md) of the new volume name and a `nil` error. If renaming fails, pass the relevant error as the second parameter; FSKit ignores any [FSFileName](../../fsfilename.md) in this case. For an `async` Swift implementation, there’s no reply handler; simply return the [FSFileName](../../fsfilename.md) or throw an error.
