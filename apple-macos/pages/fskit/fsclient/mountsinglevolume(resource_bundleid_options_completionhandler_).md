> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsclient/mountsinglevolume(resource:bundleid:options:completionhandler:)](https://developer.apple.com/documentation/fskit/fsclient/mountsinglevolume(resource:bundleid:options:completionhandler:))

# mountSingleVolume(resource:bundleID:options:completionHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Asynchronously mounts a single volume file system with a given resource.

## Declaration

```swift
func mountSingleVolume(resource: FSResource, bundleID: String, options: [String], completionHandler: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
func mountSingleVolume(resource: FSResource, bundleID: String, options: [String]) async throws -> URL
```

## Parameters

- `resource`: The resource to mount.
- `bundleID`: The bundle identifier of the file system extension.
- `options`: An array of strings containing the `mount_XXX` mount options
- `completionHandler`: A block or closure to indicate success or failure. If mount fails, the first parameter is nil and second parameter contains an error. If mount succeeds, the first parameter contains the URL of the mount path, and second parameter is `nil`.

<a id="discussion"></a>

## Discussion

This method allows a client with the `com.apple.developer.fskit.mount` entitlement to mount a single-volume file system. Calling this method performs the complete workflow of resource loading, volume activation, mount point creation, and actual mounting. The system mounts the volume within the `/Volumes/` directory.

The caller can only mount modules that are visible to them.

## See Also

### Performing single-volume mounting

- [FSResource](../fsresource.md): An abstract resource a file system uses to provide data for a volume.

# mountSingleVolumeForResource:bundleID:options:completionHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Asynchronously mounts a single volume file system with a given resource.

## Declaration

```objectivec
- (void) mountSingleVolumeForResource:(FSResource *) resource bundleID:(NSString *) bundleID options:(NSArray<NSString *> *) options completionHandler:(void (^)(NSURL *mountPath, NSError *error)) completionHandler;
```

## Parameters

- `resource`: The resource to mount.
- `bundleID`: The bundle identifier of the file system extension.
- `options`: An array of strings containing the `mount_XXX` mount options
- `completionHandler`: A block or closure to indicate success or failure. If mount fails, the first parameter is nil and second parameter contains an error. If mount succeeds, the first parameter contains the URL of the mount path, and second parameter is `nil`.

<a id="discussion"></a>

## Discussion

This method allows a client with the `com.apple.developer.fskit.mount` entitlement to mount a single-volume file system. Calling this method performs the complete workflow of resource loading, volume activation, mount point creation, and actual mounting. The system mounts the volume within the `/Volumes/` directory.

The caller can only mount modules that are visible to them.

## See Also

### Performing single-volume mounting

- [FSResource](../fsresource.md): An abstract resource a file system uses to provide data for a volume.
