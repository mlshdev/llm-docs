> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewview/shouldclosewithwindow](https://developer.apple.com/documentation/quicklookui/qlpreviewview/shouldclosewithwindow)

# shouldCloseWithWindow (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that determines whether the preview should close when its window closes.

## Declaration

```swift
var shouldCloseWithWindow: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which means that the preview automatically closes when its window closes. If you set this property to [false](https://developer.apple.com/documentation/swift/false), close the preview by calling the [close()](close%28%29.md) method when finished with it. Once you close a [QLPreviewView](../qlpreviewview.md), it won’t accept any more preview items.

## See Also

### Closing a Preview

- [close()](close%28%29.md): Closes the view, releasing the current preview item.

# shouldCloseWithWindow (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

A Boolean value that determines whether the preview should close when its window closes.

## Declaration

```objectivec
@property BOOL shouldCloseWithWindow;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which means that the preview automatically closes when its window closes. If you set this property to [false](https://developer.apple.com/documentation/swift/false), close the preview by calling the [close](close%28%29.md) method when finished with it. Once you close a [QLPreviewView](../qlpreviewview.md), it won’t accept any more preview items.

## See Also

### Closing a Preview

- [close](close%28%29.md): Closes the view, releasing the current preview item.
