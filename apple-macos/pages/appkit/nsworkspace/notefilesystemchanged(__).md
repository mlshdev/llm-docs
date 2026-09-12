> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/notefilesystemchanged(_:)](https://developer.apple.com/documentation/appkit/nsworkspace/notefilesystemchanged(_:))

# noteFileSystemChanged(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the workspace object that the file system changed at the specified path.

## Declaration

```swift
func noteFileSystemChanged(_ path: String)
```

## Parameters

- `path`: The full path that changed.

<a id="Discussion"></a>

## Discussion

Avoid calling this method if possible. If you want to track changes to files and directories, use the FSEvents API described in `FSEvents`.

The [NSWorkspace](../nsworkspace.md) object uses this method to track changes to all the files and directories in which it is interested.

# noteFileSystemChanged: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the workspace object that the file system changed at the specified path.

## Declaration

```objectivec
- (void) noteFileSystemChanged:(NSString *) path;
```

## Parameters

- `path`: The full path that changed.

<a id="Discussion"></a>

## Discussion

Avoid calling this method if possible. If you want to track changes to files and directories, use the FSEvents API described in `FSEvents`.

The [NSWorkspace](../nsworkspace.md) object uses this method to track changes to all the files and directories in which it is interested.
