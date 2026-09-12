> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideritemprotocol/itemidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovideritemprotocol/itemidentifier)

# itemIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 11.0+ · visionOS 1.0+

The item’s persistent identifier.

## Declaration

```swift
var itemIdentifier: NSFileProviderItemIdentifier { get }
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)
- [Using push notifications to signal changes](../using-push-notifications-to-signal-changes.md)

## See Also

### Providing Required Properties

- [filename](filename.md): The item’s filename.
- [typeIdentifier](typeidentifier.md): Deprecated. The item’s Uniform Type Identifier (UTI).
- [contentType](contenttype.md): The item’s Uniform Type Identifier (UTI).
- [capabilities](capabilities.md): The item’s capabilities.

# itemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · macOS 11.0+ · visionOS 1.0+

The item’s persistent identifier.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSFileProviderItemIdentifier itemIdentifier;
```

## Mentioned In

- [Synchronizing the File Provider Extension](../synchronizing-the-file-provider-extension.md)
- [Using push notifications to signal changes](../using-push-notifications-to-signal-changes.md)

## See Also

### Providing Required Properties

- [filename](filename.md): The item’s filename.
- [typeIdentifier](typeidentifier.md): Deprecated. The item’s Uniform Type Identifier (UTI).
- [contentType](contenttype.md): The item’s Uniform Type Identifier (UTI).
- [capabilities](capabilities.md): The item’s capabilities.
