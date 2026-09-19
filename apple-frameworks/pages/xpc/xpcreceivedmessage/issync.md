> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcreceivedmessage/issync

# isSync

**Framework:** XPC  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that indicates if this message is from a synchronous request.

## Declaration

```swift
var isSync: Bool { get }
```

## See Also

### Accessing message content

- [decode(as:)](decode%28as_%29.md): Decodes a message as the given type.
