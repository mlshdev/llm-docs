> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/istablescrollinghapticfeedbackenabled](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/istablescrollinghapticfeedbackenabled)

# isTableScrollingHapticFeedbackEnabled (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

## Declaration

```swift
var isTableScrollingHapticFeedbackEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true). In Apple Watch Series 4 and later, the watch provides haptic feedback as the user rotates the digital crown. When this property is [true](https://developer.apple.com/documentation/swift/true), the watch provides haptic feedback whenever new rows scroll into view. However, if there are additional interface items at the top level, or if the table view contains a row that is taller than the screen, the crown falls back to providing linear feedback.

When this property is [false](https://developer.apple.com/documentation/swift/false), the watch provides linear feedback. For example, you can use this property to force linear feedback when a table contains rows of varying heights, and the row-based feedback doesn’t feel right.

## See Also

### Related Documentation

- [isHapticFeedbackEnabled](../wkcrownsequencer/ishapticfeedbackenabled.md): A Boolean value that determines whether the crown sequencer’s haptic feedback is enabled.

### Managing Scrolling

- [scroll(to:at:animated:)](scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [WKInterfaceScrollPosition](../wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop()](interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop()](interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom()](interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.

# tableScrollingHapticFeedbackEnabled (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 5.0+

A Boolean value that determines whether haptic feedback coordinates with the appearance of new rows as the user scrolls through a table.

## Declaration

```objectivec
@property (nonatomic, getter=isTableScrollingHapticFeedbackEnabled) BOOL tableScrollingHapticFeedbackEnabled;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true). In Apple Watch Series 4 and later, the watch provides haptic feedback as the user rotates the digital crown. When this property is [true](https://developer.apple.com/documentation/swift/true), the watch provides haptic feedback whenever new rows scroll into view. However, if there are additional interface items at the top level, or if the table view contains a row that is taller than the screen, the crown falls back to providing linear feedback.

When this property is [false](https://developer.apple.com/documentation/swift/false), the watch provides linear feedback. For example, you can use this property to force linear feedback when a table contains rows of varying heights, and the row-based feedback doesn’t feel right.

## See Also

### Related Documentation

- [hapticFeedbackEnabled](../wkcrownsequencer/ishapticfeedbackenabled.md): A Boolean value that determines whether the crown sequencer’s haptic feedback is enabled.

### Managing Scrolling

- [scrollToObject:atScrollPosition:animated:](scroll%28to_at_animated_%29.md): Scrolls the specified object to the given position onscreen.
- [WKInterfaceScrollPosition](../wkinterfacescrollposition.md): Onscreen scroll positions.
- [interfaceDidScrollToTop](interfacedidscrolltotop%28%29.md): Tells the interface controller that the user has performed a scroll-to-top gesture (for example, tapping the status bar) and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToTop](interfaceoffsetdidscrolltotop%28%29.md): Tells the interface controller that the user has scrolled to the top of the interface and that the scrolling animation has finished.
- [interfaceOffsetDidScrollToBottom](interfaceoffsetdidscrolltobottom%28%29.md): Tells the interface controller that the user has scrolled to the bottom of the interface and that the scrolling animation has finished.
