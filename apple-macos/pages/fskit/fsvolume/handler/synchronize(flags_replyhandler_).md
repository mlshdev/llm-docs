> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/handler/synchronize(flags:replyhandler:)](https://developer.apple.com/documentation/fskit/fsvolume/handler/synchronize(flags:replyhandler:))

# synchronize(flags:replyHandler:) (Swift)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
func synchronize(flags: FSSyncFlags, replyHandler reply: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func synchronize(flags: FSSyncFlags) async throws
```

## See Also

### Performing synchronization

- [FSSyncFlags](../../fssyncflags.md): Behavior flags for use with synchronization calls.

# synchronizeWithFlags:replyHandler: (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (void) synchronizeWithFlags:(FSSyncFlags) flags replyHandler:(void (^)(NSError *error)) reply;
```

## See Also

### Performing synchronization

- [FSSyncFlags](../../fssyncflags.md): Behavior flags for use with synchronization calls.
