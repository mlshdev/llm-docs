> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/window(_:willencoderestorablestate:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/window(_:willencoderestorablestate:))

# window(\_:willEncodeRestorableState:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the window is about to add its restorable state to a given archiver.

## Declaration

```swift
@MainActor optional func window(_ window: NSWindow, willEncodeRestorableState state: NSCoder)
```

## Parameters

- `window`: The window adding its restorable state to an archive.
- `state`: The coder creating the archive.

<a id="Discussion"></a>

## Discussion

This method is called during the window’s [encodeRestorableState(with:)](../nsresponder/encoderestorablestate%28with_%29.md) method.

## See Also

### Managing Restorable State

- [window(\_:didDecodeRestorableState:)](window%28__diddecoderestorablestate_%29.md): Tells the delegate the window is has extracted its restorable state from a given archiver.

# window:willEncodeRestorableState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the window is about to add its restorable state to a given archiver.

## Declaration

```objectivec
- (void) window:(NSWindow *) window willEncodeRestorableState:(NSCoder *) state;
```

## Parameters

- `window`: The window adding its restorable state to an archive.
- `state`: The coder creating the archive.

<a id="Discussion"></a>

## Discussion

This method is called during the window’s [encodeRestorableStateWithCoder:](../nsresponder/encoderestorablestate%28with_%29.md) method.

## See Also

### Managing Restorable State

- [window:didDecodeRestorableState:](window%28__diddecoderestorablestate_%29.md): Tells the delegate the window is has extracted its restorable state from a given archiver.
