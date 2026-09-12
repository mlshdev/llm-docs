> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/close()](https://developer.apple.com/documentation/webkit/webview-swift.class/close())

# close() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Closes the web view when it’s no longer needed.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

Closes the web view by unloading its webpage and canceling any pending load requests. A closed web view no longer responds to new requests nor sends delegate messages. It is invoked automatically if the receiver’s enclosing window or host window is closed and sending [shouldCloseWithWindow](shouldclosewithwindow.md) to the receiver returns [true](https://developer.apple.com/documentation/swift/true). Use this method to stop the receiver from loading and sending delegate messages.

## See Also

### Closing the View

- [shouldCloseWithWindow](shouldclosewithwindow.md): Deprecated. A Boolean that indicates whether the web view should close when its window or host window closes.

# close (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Closes the web view when it’s no longer needed.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

Closes the web view by unloading its webpage and canceling any pending load requests. A closed web view no longer responds to new requests nor sends delegate messages. It is invoked automatically if the receiver’s enclosing window or host window is closed and sending [shouldCloseWithWindow](shouldclosewithwindow.md) to the receiver returns [true](https://developer.apple.com/documentation/swift/true). Use this method to stop the receiver from loading and sending delegate messages.

## See Also

### Closing the View

- [shouldCloseWithWindow](shouldclosewithwindow.md): Deprecated. A Boolean that indicates whether the web view should close when its window or host window closes.
