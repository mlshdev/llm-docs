> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/unmount(replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/unmount(replyhandler:))

# unmount(replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
func unmount(replyHandler reply: @escaping @Sendable () -> Void)
```

```swift
func unmount() async
```

## See Also

### Mounting and unmounting

- [mount(options:replyHandler:)](mount%28options_replyhandler_%29.md)

# unmountWithReplyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (void) unmountWithReplyHandler:(void (^)()) reply;
```

## See Also

### Mounting and unmounting

- [mountWithOptions:replyHandler:](mount%28options_replyhandler_%29.md)
