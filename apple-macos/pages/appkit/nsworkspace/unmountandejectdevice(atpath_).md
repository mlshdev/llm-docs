> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/unmountandejectdevice(atpath:)](https://developer.apple.com/documentation/appkit/nsworkspace/unmountandejectdevice(atpath:))

# unmountAndEjectDevice(atPath:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unmounts and ejects the device at the specified path.

## Declaration

```swift
func unmountAndEjectDevice(atPath path: String) -> Bool
```

## Parameters

- `path`: The path to the device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system unmounted the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When this method begins, it posts an [willUnmountNotification](willunmountnotification.md) to the `NSWorkspace` object’s notification center. When it is finished, it posts an [didUnmountNotification](didunmountnotification.md).

Prefer the [unmountAndEjectDevice(at:)](unmountandejectdevice%28at_%29.md) method because it provides more detailed error information.

You can safely call this method from any thread of your app.

## See Also

### Unmounting a Device

- [unmountAndEjectDevice(at:)](unmountandejectdevice%28at_%29.md): Attempts to eject the volume mounted at the given path.

# unmountAndEjectDeviceAtPath: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Unmounts and ejects the device at the specified path.

## Declaration

```objectivec
- (BOOL) unmountAndEjectDeviceAtPath:(NSString *) path;
```

## Parameters

- `path`: The path to the device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the system unmounted the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When this method begins, it posts an [NSWorkspaceWillUnmountNotification](willunmountnotification.md) to the `NSWorkspace` object’s notification center. When it is finished, it posts an [NSWorkspaceDidUnmountNotification](didunmountnotification.md).

Prefer the [unmountAndEjectDeviceAtURL:error:](unmountandejectdevice%28at_%29.md) method because it provides more detailed error information.

You can safely call this method from any thread of your app.

## See Also

### Unmounting a Device

- [unmountAndEjectDeviceAtURL:error:](unmountandejectdevice%28at_%29.md): Attempts to eject the volume mounted at the given path.
