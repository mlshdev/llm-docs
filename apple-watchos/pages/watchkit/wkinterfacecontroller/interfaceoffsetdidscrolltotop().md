> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/interfaceoffsetdidscrolltotop()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/interfaceoffsetdidscrolltotop())

# interfaceOffsetDidScrollToTop() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+

Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.

## Declaration

```swift
func interfaceOffsetDidScrollToTop()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. You can override this method to take actions when the user scrolls to the top of the interface.

## See Also

### Managing Scrolling

- [scroll(to:at:animated:)](scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [WKInterfaceScrollPosition](../wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop()](interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom()](interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [isTableScrollingHapticFeedbackEnabled](istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

# interfaceOffsetDidScrollToTop (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+

Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.

## Declaration

```objectivec
- (void) interfaceOffsetDidScrollToTop;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. You can override this method to take actions when the user scrolls to the top of the interface.

## See Also

### Managing Scrolling

- [scrollToObject:atScrollPosition:animated:](scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [WKInterfaceScrollPosition](../wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop](interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom](interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [tableScrollingHapticFeedbackEnabled](istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.
