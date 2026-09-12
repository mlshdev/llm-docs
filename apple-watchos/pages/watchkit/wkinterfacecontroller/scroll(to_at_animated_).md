> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/scroll(to:at:animated:)](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/scroll(to:at:animated:))

# scroll(to:at:animated:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+

Scrolls the specified object to the given position onscreen.

## Declaration

```swift
func scroll(to object: WKInterfaceObject, at scrollPosition: WKInterfaceScrollPosition, animated: Bool)
```

## Parameters

- `object`: The interface object to scroll to.
- `scrollPosition`: The specified object’s desired position on the screen.
- `animated`: A Boolean value that determines whether the scroll action is animated.

## See Also

### Managing Scrolling

- [WKInterfaceScrollPosition](../wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop()](interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop()](interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom()](interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [isTableScrollingHapticFeedbackEnabled](istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

# scrollToObject:atScrollPosition:animated: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 4.0+

Scrolls the specified object to the given position onscreen.

## Declaration

```objectivec
- (void) scrollToObject:(WKInterfaceObject *) object atScrollPosition:(WKInterfaceScrollPosition) scrollPosition animated:(BOOL) animated;
```

## Parameters

- `object`: The interface object to scroll to.
- `scrollPosition`: The specified object’s desired position on the screen.
- `animated`: A Boolean value that determines whether the scroll action is animated.

## See Also

### Managing Scrolling

- [WKInterfaceScrollPosition](../wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop](interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop](interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom](interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [tableScrollingHapticFeedbackEnabled](istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.
