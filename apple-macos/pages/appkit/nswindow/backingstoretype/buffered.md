> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/backingstoretype/buffered](https://developer.apple.com/documentation/appkit/nswindow/backingstoretype/buffered)

# NSWindow.BackingStoreType.buffered (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

The window renders all drawing into a display buffer and then flushes it to the screen.

## Declaration

```swift
case buffered
```

<a id="Discussion"></a>

## Discussion

You should use this mode. It supports hardware acceleration, Quartz drawing, and takes advantage of the GPU when possible. It also supports alpha channel drawing, opacity controls, using the compositor.

## See Also

### Constants

- [NSWindow.BackingStoreType.retained](retained.md): Deprecated. The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.
- [NSWindow.BackingStoreType.nonretained](nonretained.md): Deprecated. The window draws directly to the screen without using any buffer.

# NSBackingStoreBuffered (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

The window renders all drawing into a display buffer and then flushes it to the screen.

## Declaration

```objectivec
NSBackingStoreBuffered
```

<a id="Discussion"></a>

## Discussion

You should use this mode. It supports hardware acceleration, Quartz drawing, and takes advantage of the GPU when possible. It also supports alpha channel drawing, opacity controls, using the compositor.

## See Also

### Constants

- [NSBackingStoreRetained](retained.md): Deprecated. The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.
- [NSBackingStoreNonretained](nonretained.md): Deprecated. The window draws directly to the screen without using any buffer.
