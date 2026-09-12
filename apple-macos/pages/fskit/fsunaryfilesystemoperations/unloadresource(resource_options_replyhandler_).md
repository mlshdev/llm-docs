> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsunaryfilesystemoperations/unloadresource(resource:options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsunaryfilesystemoperations/unloadresource(resource:options:replyhandler:))

# unloadResource(resource:options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Requests that the file system unload the specified resource.

## Declaration

```swift
func unloadResource(resource: FSResource, options: FSTaskOptions, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unloadResource(resource: FSResource, options: FSTaskOptions) async throws
```

## Parameters

- `resource`: An [FSResource](../fsresource.md) to unload.
- `options`: An [FSTaskOptions](../fstaskoptions.md) object specifying options to apply when unloading the resource.
- `reply`: A block or closure that your implementation invokes when it finishes unloading or encounters an error. If unloading fails, pass an error as the parameter to describe the problem. Otherwise, pass `nil`.

## See Also

### Loading and unloading resources

- [loadResource(resource:options:replyHandler:)](loadresource%28resource_options_replyhandler_%29.md): Requests that the file system load a resource and present it as a volume.
- [didFinishLoading()](didfinishloading%28%29.md): Notifies you that the system finished loading your file system extension.

# unloadResource:options:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Requests that the file system unload the specified resource.

## Declaration

```objectivec
- (void) unloadResource:(FSResource *) resource options:(FSTaskOptions *) options replyHandler:(void (^)(NSError *err)) reply;
```

## Parameters

- `resource`: An [FSResource](../fsresource.md) to unload.
- `options`: An [FSTaskOptions](../fstaskoptions.md) object specifying options to apply when unloading the resource.
- `reply`: A block or closure that your implementation invokes when it finishes unloading or encounters an error. If unloading fails, pass an error as the parameter to describe the problem. Otherwise, pass `nil`.

## See Also

### Loading and unloading resources

- [loadResource:options:replyHandler:](loadresource%28resource_options_replyhandler_%29.md): Requests that the file system load a resource and present it as a volume.
- [didFinishLoading](didfinishloading%28%29.md): Notifies you that the system finished loading your file system extension.
