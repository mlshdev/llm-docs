> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacescrollposition](https://developer.apple.com/documentation/watchkit/wkinterfacescrollposition)

# WKInterfaceScrollPosition (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

Onscreen scroll positions.

## Declaration

```swift
enum WKInterfaceScrollPosition
```

## Topics

### Enumeration Cases

- [WKInterfaceScrollPosition.bottom](wkinterfacescrollposition/bottom.md): The bottom of the screen.
- [WKInterfaceScrollPosition.centeredVertically](wkinterfacescrollposition/centeredvertically.md): The vertical center of the screen.
- [WKInterfaceScrollPosition.top](wkinterfacescrollposition/top.md): The top of the screen.

### Initializers

- [init(rawValue:)](wkinterfacescrollposition/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Scrolling

- [scroll(to:at:animated:)](wkinterfacecontroller/scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [interfaceDidScrollToTop()](wkinterfacecontroller/interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop()](wkinterfacecontroller/interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom()](wkinterfacecontroller/interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [isTableScrollingHapticFeedbackEnabled](wkinterfacecontroller/istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

# WKInterfaceScrollPosition (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 4.0+

Onscreen scroll positions.

## Declaration

```objectivec
enum WKInterfaceScrollPosition : NSInteger;
```

## Topics

### Enumeration Cases

- [WKInterfaceScrollPositionBottom](wkinterfacescrollposition/bottom.md): The bottom of the screen.
- [WKInterfaceScrollPositionCenteredVertically](wkinterfacescrollposition/centeredvertically.md): The vertical center of the screen.
- [WKInterfaceScrollPositionTop](wkinterfacescrollposition/top.md): The top of the screen.

## See Also

### Managing Scrolling

- [scrollToObject:atScrollPosition:animated:](wkinterfacecontroller/scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [interfaceDidScrollToTop](wkinterfacecontroller/interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop](wkinterfacecontroller/interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom](wkinterfacecontroller/interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
- [tableScrollingHapticFeedbackEnabled](wkinterfacecontroller/istablescrollinghapticfeedbackenabled.md): A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.
