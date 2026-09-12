> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowshouldzoom(_:toframe:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowshouldzoom(_:toframe:))

# windowShouldZoom(\_:toFrame:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate whether the specified window should zoom to the specified frame.

## Declaration

```swift
@MainActor optional func windowShouldZoom(_ window: NSWindow, toFrame newFrame: NSRect) -> Bool
```

## Parameters

- `window`: The window being zoomed.
- `newFrame`: The rectangle to which the specified window is being zoomed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow `window`’s frame to become `newFrame`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Zooming Window

- [windowWillUseStandardFrame(\_:defaultFrame:)](windowwillusestandardframe%28__defaultframe_%29.md): Called by `NSWindow`’s [zoom(\_:)](../nswindow/zoom%28__%29.md) method while determining the frame a window may be zoomed to.

# windowShouldZoom:toFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Asks the delegate whether the specified window should zoom to the specified frame.

## Declaration

```objectivec
- (BOOL) windowShouldZoom:(NSWindow *) window toFrame:(NSRect) newFrame;
```

## Parameters

- `window`: The window being zoomed.
- `newFrame`: The rectangle to which the specified window is being zoomed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to allow `window`’s frame to become `newFrame`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Zooming Window

- [windowWillUseStandardFrame:defaultFrame:](windowwillusestandardframe%28__defaultframe_%29.md): Called by `NSWindow`’s [zoom:](../nswindow/zoom%28__%29.md) method while determining the frame a window may be zoomed to.
