> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/isrestorable](https://developer.apple.com/documentation/appkit/nswindow/isrestorable)

# isRestorable (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the window configuration is preserved between application launches.

## Declaration

```swift
var isRestorable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) if you want the window to be preserved or [false](https://developer.apple.com/documentation/swift/false) if you do not want it preserved. By default, the value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window’s [styleMask](stylemask-swift.property.md) property includes the [NSTitledWindowMask](../nstitledwindowmask.md) flag. For other windows, the value is [false](https://developer.apple.com/documentation/swift/false). Setting a value explicitly overrides the default values.

Windows should be preserved between launch cycles to maintain interface continuity for the user. During subsequent launch cycles, the system tries to recreate the window and restore its configuration to the preserved state. Configuration data is updated as needed and saved automatically by the system.

If you enable preservation for a given window, you should also specify a restoration class for the window using the [restorationClass](restorationclass.md) property.

## See Also

### Handling Window Restoration

- [restorationClass](restorationclass.md): The restoration class associated with the window.
- [disableSnapshotRestoration()](disablesnapshotrestoration%28%29.md): Disables snapshot restoration.
- [enableSnapshotRestoration()](enablesnapshotrestoration%28%29.md): Enables snapshot restoration.

# restorable (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value indicating whether the window configuration is preserved between application launches.

## Declaration

```objectivec
@property (getter=isRestorable) BOOL restorable;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) if you want the window to be preserved or [false](https://developer.apple.com/documentation/swift/false) if you do not want it preserved. By default, the value of this property is [true](https://developer.apple.com/documentation/swift/true) if the window’s [styleMask](stylemask-swift.property.md) property includes the [NSTitledWindowMask](../nstitledwindowmask.md) flag. For other windows, the value is [false](https://developer.apple.com/documentation/swift/false). Setting a value explicitly overrides the default values.

Windows should be preserved between launch cycles to maintain interface continuity for the user. During subsequent launch cycles, the system tries to recreate the window and restore its configuration to the preserved state. Configuration data is updated as needed and saved automatically by the system.

If you enable preservation for a given window, you should also specify a restoration class for the window using the [restorationClass](restorationclass.md) property.

## See Also

### Handling Window Restoration

- [restorationClass](restorationclass.md): The restoration class associated with the window.
- [disableSnapshotRestoration](disablesnapshotrestoration%28%29.md): Disables snapshot restoration.
- [enableSnapshotRestoration](enablesnapshotrestoration%28%29.md): Enables snapshot restoration.
