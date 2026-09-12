> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/close()](https://developer.apple.com/documentation/appkit/nswindowcontroller/close())

# close() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Closes the window if it was loaded.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

Because this method closes the window without asking the user for confirmation, you usually do not invoke it when the Close menu command is chosen. Instead invoke NSWindow’s [performClose(\_:)](../nswindow/performclose%28__%29.md) on the receiver’s window.

## See Also

### Closing the Window

- [shouldCloseDocument](shouldclosedocument.md): A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.

# close (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Closes the window if it was loaded.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

Because this method closes the window without asking the user for confirmation, you usually do not invoke it when the Close menu command is chosen. Instead invoke NSWindow’s [performClose:](../nswindow/performclose%28__%29.md) on the receiver’s window.

## See Also

### Closing the Window

- [shouldCloseDocument](shouldclosedocument.md): A Boolean value that indicates whether the receiver necessarily closes the associated document when the window it manages is closed.
