> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/backingstoretype/nonretained](https://developer.apple.com/documentation/appkit/nswindow/backingstoretype/nonretained)

# NSWindow.BackingStoreType.nonretained (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The window draws directly to the screen without using any buffer.

## Declaration

```swift
case nonretained
```

<a id="Discussion"></a>

## Discussion

You should not use this mode. It exists primarily for use in the original Classic Blue Box. It does not support Quartz drawing, alpha blending, or opacity. Moreover, it does not support hardware acceleration, and interferes with system-wide display acceleration. If you use this mode, your application must manage visibility region clipping itself, and manage repainting on visibility changes.

## See Also

### Constants

- [NSWindow.BackingStoreType.retained](retained.md): Deprecated. The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.
- [NSWindow.BackingStoreType.buffered](buffered.md): The window renders all drawing into a display buffer and then flushes it to the screen.

# NSBackingStoreNonretained (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The window draws directly to the screen without using any buffer.

## Declaration

```objectivec
NSBackingStoreNonretained
```

<a id="Discussion"></a>

## Discussion

You should not use this mode. It exists primarily for use in the original Classic Blue Box. It does not support Quartz drawing, alpha blending, or opacity. Moreover, it does not support hardware acceleration, and interferes with system-wide display acceleration. If you use this mode, your application must manage visibility region clipping itself, and manage repainting on visibility changes.

## See Also

### Constants

- [NSBackingStoreRetained](retained.md): Deprecated. The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.
- [NSBackingStoreBuffered](buffered.md): The window renders all drawing into a display buffer and then flushes it to the screen.
