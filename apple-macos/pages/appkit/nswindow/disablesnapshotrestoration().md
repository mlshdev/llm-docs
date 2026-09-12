> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/disablesnapshotrestoration()](https://developer.apple.com/documentation/appkit/nswindow/disablesnapshotrestoration())

# disableSnapshotRestoration() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Disables snapshot restoration.

## Declaration

```swift
func disableSnapshotRestoration()
```

<a id="Discussion"></a>

## Discussion

After disabling snapshot restoration, the system doesn’t snapshot the window’s restorable state.

## See Also

### Handling Window Restoration

- [isRestorable](isrestorable.md): A Boolean value indicating whether the window configuration is preserved between application launches.
- [restorationClass](restorationclass.md): The restoration class associated with the window.
- [enableSnapshotRestoration()](enablesnapshotrestoration%28%29.md): Enables snapshot restoration.

# disableSnapshotRestoration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Disables snapshot restoration.

## Declaration

```objectivec
- (void) disableSnapshotRestoration;
```

<a id="Discussion"></a>

## Discussion

After disabling snapshot restoration, the system doesn’t snapshot the window’s restorable state.

## See Also

### Handling Window Restoration

- [restorable](isrestorable.md): A Boolean value indicating whether the window configuration is preserved between application launches.
- [restorationClass](restorationclass.md): The restoration class associated with the window.
- [enableSnapshotRestoration](enablesnapshotrestoration%28%29.md): Enables snapshot restoration.
