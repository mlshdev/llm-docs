> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusupdatecontext/previouslyfocusedview](https://developer.apple.com/documentation/uikit/uifocusupdatecontext/previouslyfocusedview)

# previouslyFocusedView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The view that was focused before the focus update.

## Declaration

```swift
weak var previouslyFocusedView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

If your app targets tvOS 10 and later, use [previouslyFocusedItem](previouslyfocuseditem.md) instead.

This property returns `nil` when no view was previously focused, such as when setting the initial focus.

## See Also

### Locating focus direction

- [nextFocusedView](nextfocusedview.md): The view that takes the focus after the focus update.
- [focusHeading](focusheading.md): The heading in which the focus update is occurring.
- [UIFocusHeading](../uifocusheading.md): The general type of an event.

# previouslyFocusedView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The view that was focused before the focus update.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIView * previouslyFocusedView;
```

<a id="Discussion"></a>

## Discussion

If your app targets tvOS 10 and later, use [previouslyFocusedItem](previouslyfocuseditem.md) instead.

This property returns `nil` when no view was previously focused, such as when setting the initial focus.

## See Also

### Locating focus direction

- [nextFocusedView](nextfocusedview.md): The view that takes the focus after the focus update.
- [focusHeading](focusheading.md): The heading in which the focus update is occurring.
- [UIFocusHeading](../uifocusheading.md): The general type of an event.
