> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/backingstoretype/retained](https://developer.apple.com/documentation/appkit/nswindow/backingstoretype/retained)

# NSWindow.BackingStoreType.retained (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.

## Declaration

```swift
case retained
```

<a id="Discussion"></a>

## Discussion

You should not use this mode. It combines the limitations of `NSBackingStoreNonretained` with the memory use of `NSBackingStoreBuffered`. The original NeXTSTEP implementation was an interesting compromise that worked well with fast memory mapped framebuffers on the CPU bus—something that hasn’t been in general use since around 1994. These tend to have performance problems.

In macOS 10.5 and later, requests for retained windows will result in the window system creating a buffered window, as that better matches actual use.

## See Also

### Constants

- [NSWindow.BackingStoreType.nonretained](nonretained.md): Deprecated. The window draws directly to the screen without using any buffer.
- [NSWindow.BackingStoreType.buffered](buffered.md): The window renders all drawing into a display buffer and then flushes it to the screen.

# NSBackingStoreRetained (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+ (deprecated in 10.13)

The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.

## Declaration

```objectivec
NSBackingStoreRetained
```

<a id="Discussion"></a>

## Discussion

You should not use this mode. It combines the limitations of `NSBackingStoreNonretained` with the memory use of `NSBackingStoreBuffered`. The original NeXTSTEP implementation was an interesting compromise that worked well with fast memory mapped framebuffers on the CPU bus—something that hasn’t been in general use since around 1994. These tend to have performance problems.

In macOS 10.5 and later, requests for retained windows will result in the window system creating a buffered window, as that better matches actual use.

## See Also

### Constants

- [NSBackingStoreNonretained](nonretained.md): Deprecated. The window draws directly to the screen without using any buffer.
- [NSBackingStoreBuffered](buffered.md): The window renders all drawing into a display buffer and then flushes it to the screen.
