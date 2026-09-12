> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/sharingtype-swift.enum/readwrite](https://developer.apple.com/documentation/appkit/nswindow/sharingtype-swift.enum/readwrite)

# readWrite (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+ (deprecated in 15.0)

> Use NSWindowSharingReadOnly instead

## Declaration

```swift
static var readWrite: NSWindow.SharingType { get }
```

<a id="Discussion"></a>

## Discussion

The window’s contents can be read and modified by another process.

## See Also

### Constants

- [NSWindow.SharingType.none](none.md): A legacy constant that macOS no longer uses.
- [NSWindow.SharingType.readOnly](readonly.md)

# NSWindowSharingReadWrite (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+ (deprecated in 15.0)

> Use NSWindowSharingReadOnly instead

## Declaration

```objectivec
static const NSWindowSharingType NSWindowSharingReadWrite;
```

<a id="Discussion"></a>

## Discussion

The window’s contents can be read and modified by another process.

## See Also

### Constants

- [NSWindowSharingNone](none.md): A legacy constant that macOS no longer uses.
- [NSWindowSharingReadOnly](readonly.md)
