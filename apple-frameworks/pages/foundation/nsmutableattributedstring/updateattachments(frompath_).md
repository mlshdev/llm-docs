> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/updateattachments(frompath:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/updateattachments(frompath:))

# updateAttachments(fromPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Updates all attachments based on files contained in the RTFD file package at the specified file path.

## Declaration

```swift
func updateAttachments(fromPath path: String)
```

## Parameters

- `path`: The path to the file package.

## See Also

### Related Documentation

- [update(fromPath:)](../filewrapper/update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.

# updateAttachmentsFromPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Updates all attachments based on files contained in the RTFD file package at the specified file path.

## Declaration

```objectivec
- (void) updateAttachmentsFromPath:(NSString *) path;
```

## Parameters

- `path`: The path to the file package.

## See Also

### Related Documentation

- [updateFromPath:](../filewrapper/update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
