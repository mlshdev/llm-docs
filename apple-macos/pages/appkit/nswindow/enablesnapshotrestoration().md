> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/enablesnapshotrestoration()](https://developer.apple.com/documentation/appkit/nswindow/enablesnapshotrestoration())

# enableSnapshotRestoration() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Enables snapshot restoration.

## Declaration

```swift
func enableSnapshotRestoration()
```

<a id="Discussion"></a>

## Discussion

While snapshot restoration is enabled, the system snapshots the window’s restorable state.

## See Also

### Handling Window Restoration

- [isRestorable](isrestorable.md): A Boolean value indicating whether the window configuration is preserved between application launches.
- [restorationClass](restorationclass.md): The restoration class associated with the window.
- [disableSnapshotRestoration()](disablesnapshotrestoration%28%29.md): Disables snapshot restoration.

# enableSnapshotRestoration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Enables snapshot restoration.

## Declaration

```objectivec
- (void) enableSnapshotRestoration;
```

<a id="Discussion"></a>

## Discussion

While snapshot restoration is enabled, the system snapshots the window’s restorable state.

## See Also

### Handling Window Restoration

- [restorable](isrestorable.md): A Boolean value indicating whether the window configuration is preserved between application launches.
- [restorationClass](restorationclass.md): The restoration class associated with the window.
- [disableSnapshotRestoration](disablesnapshotrestoration%28%29.md): Disables snapshot restoration.
