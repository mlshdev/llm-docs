> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsunaryfilesystemoperations/didfinishloading()](https://developer.apple.com/documentation/fskit/fsunaryfilesystemoperations/didfinishloading())

# didFinishLoading() (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Notifies you that the system finished loading your file system extension.

## Declaration

```swift
optional func didFinishLoading()
```

<a id="discussion"></a>

## Discussion

The system performs this callback after the main run loop starts and before receiving the first message from the FSKit daemon.

Implement this method if you want to perform any setup prior to receiving FSKit callbacks.

## See Also

### Loading and unloading resources

- [loadResource(resource:options:replyHandler:)](loadresource%28resource_options_replyhandler_%29.md): Requests that the file system load a resource and present it as a volume.
- [unloadResource(resource:options:replyHandler:)](unloadresource%28resource_options_replyhandler_%29.md): Requests that the file system unload the specified resource.

# didFinishLoading (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Notifies you that the system finished loading your file system extension.

## Declaration

```objectivec
- (void) didFinishLoading;
```

<a id="discussion"></a>

## Discussion

The system performs this callback after the main run loop starts and before receiving the first message from the FSKit daemon.

Implement this method if you want to perform any setup prior to receiving FSKit callbacks.

## See Also

### Loading and unloading resources

- [loadResource:options:replyHandler:](loadresource%28resource_options_replyhandler_%29.md): Requests that the file system load a resource and present it as a volume.
- [unloadResource:options:replyHandler:](unloadresource%28resource_options_replyhandler_%29.md): Requests that the file system unload the specified resource.
