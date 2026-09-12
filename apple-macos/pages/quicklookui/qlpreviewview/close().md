> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/close()](https://developer.apple.com/documentation/quicklookui/qlpreviewview/close())

# close() (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Closes the view, releasing the current preview item.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

Once a [QLPreviewView](../qlpreviewview.md) is closed, it won’t accept any more preview items. You only need to call this method if [shouldCloseWithWindow](shouldclosewithwindow.md) is set to [false](https://developer.apple.com/documentation/swift/false). If you don’t close a [QLPreviewView](../qlpreviewview.md) when you are done using it, your app will leak memory.

## See Also

### Closing a Preview

- [shouldCloseWithWindow](shouldclosewithwindow.md): A Boolean value that determines whether the preview should close when its window closes.

# close (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Closes the view, releasing the current preview item.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

Once a [QLPreviewView](../qlpreviewview.md) is closed, it won’t accept any more preview items. You only need to call this method if [shouldCloseWithWindow](shouldclosewithwindow.md) is set to [false](https://developer.apple.com/documentation/swift/false). If you don’t close a [QLPreviewView](../qlpreviewview.md) when you are done using it, your app will leak memory.

## See Also

### Closing a Preview

- [shouldCloseWithWindow](shouldclosewithwindow.md): A Boolean value that determines whether the preview should close when its window closes.
