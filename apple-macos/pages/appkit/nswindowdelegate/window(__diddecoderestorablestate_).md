> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:diddecoderestorablestate:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:diddecoderestorablestate:))

# window(\_:didDecodeRestorableState:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the window is has extracted its restorable state from a given archiver.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, didDecodeRestorableState state: NSCoder)
```

## Parameters

- `window`: The window extracting its restorable state from an archive.
- `state`: The coder extracting the archive.

<a id="Discussion"></a>

## Discussion

This method is called during the window’s [restoreState(with:)](../nsresponder/restorestate%28with_%29.md) method.

## See Also

### Managing Restorable State

- [window(\_:willEncodeRestorableState:)](window%28__willencoderestorablestate_%29.md): Tells the delegate the window is about to add its restorable state to a given archiver.

# window:didDecodeRestorableState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the window is has extracted its restorable state from a given archiver.

## Declaration

```objectivec
- (void) window:(NSWindow *) window didDecodeRestorableState:(NSCoder *) state;
```

## Parameters

- `window`: The window extracting its restorable state from an archive.
- `state`: The coder extracting the archive.

<a id="Discussion"></a>

## Discussion

This method is called during the window’s [restoreStateWithCoder:](../nsresponder/restorestate%28with_%29.md) method.

## See Also

### Managing Restorable State

- [window:willEncodeRestorableState:](window%28__willencoderestorablestate_%29.md): Tells the delegate the window is about to add its restorable state to a given archiver.
