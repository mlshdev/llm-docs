> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/mount(options:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/mount(options:replyhandler:))

# mount(options:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
func mount(options: FSTaskOptions, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func mount(options: FSTaskOptions) async throws
```

## See Also

### Mounting and unmounting

- [unmount(replyHandler:)](unmount%28replyhandler_%29.md)

# mountWithOptions:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (void) mountWithOptions:(FSTaskOptions *) options replyHandler:(void (^)(NSError *error)) reply;
```

## See Also

### Mounting and unmounting

- [unmountWithReplyHandler:](unmount%28replyhandler_%29.md)
