> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowcontroller/loadwindow()](https://developer.apple.com/documentation/appkit/nswindowcontroller/loadwindow())

# loadWindow() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Loads the receiver’s window from the nib file.

## Declaration

```swift
func loadWindow()
```

<a id="Discussion"></a>

## Discussion

You should never directly invoke this method. Instead, access the [window](window.md) property so the [windowDidLoad()](windowdidload%28%29.md) and [windowWillLoad()](windowwillload%28%29.md) methods are invoked. Subclasses can override this method if the way it finds and loads the window is not adequate. It uses the [Bundle](https://developer.apple.com/documentation/foundation/bundle) class’s [init(for:)](https://developer.apple.com/documentation/foundation/bundle/init%28for:%29) method to get the bundle, using the class of the nib file owner as argument. It then locates the nib file within the bundle and, if successful, loads it; if unsuccessful, it tries to find the nib file in the main bundle.

## See Also

### Loading and Displaying the Window

- [showWindow(\_:)](showwindow%28__%29.md): Displays the window associated with the receiver.
- [isWindowLoaded](iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad()](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad()](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.

# loadWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Loads the receiver’s window from the nib file.

## Declaration

```objectivec
- (void) loadWindow;
```

<a id="Discussion"></a>

## Discussion

You should never directly invoke this method. Instead, access the [window](window.md) property so the [windowDidLoad](windowdidload%28%29.md) and [windowWillLoad](windowwillload%28%29.md) methods are invoked. Subclasses can override this method if the way it finds and loads the window is not adequate. It uses the [NSBundle](https://developer.apple.com/documentation/foundation/bundle) class’s [bundleForClass:](https://developer.apple.com/documentation/foundation/bundle/init%28for:%29) method to get the bundle, using the class of the nib file owner as argument. It then locates the nib file within the bundle and, if successful, loads it; if unsuccessful, it tries to find the nib file in the main bundle.

## See Also

### Loading and Displaying the Window

- [showWindow:](showwindow%28__%29.md): Displays the window associated with the receiver.
- [windowLoaded](iswindowloaded.md): A Boolean value that indicates whether the nib file containing the receiver’s window has been loaded.
- [window](window.md): The window owned by the receiver.
- [windowDidLoad](windowdidload%28%29.md): Sent after the window owned by the receiver has been loaded.
- [windowWillLoad](windowwillload%28%29.md): Sent before the window owned by the receiver is loaded.
