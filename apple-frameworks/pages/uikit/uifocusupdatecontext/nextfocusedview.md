> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusupdatecontext/nextfocusedview](https://developer.apple.com/documentation/uikit/uifocusupdatecontext/nextfocusedview)

# nextFocusedView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The view that takes the focus after the focus update.

## Declaration

```swift
weak var nextFocusedView: UIView? { get }
```

<a id="Discussion"></a>

## Discussion

If your app targets tvOS 10 and later, use [nextFocusedItem](nextfocuseditem.md) instead.

This property returns `nil` if no view will be focused after the update.

## See Also

### Locating focus direction

- [previouslyFocusedView](previouslyfocusedview.md): The view that was focused before the focus update.
- [focusHeading](focusheading.md): The heading in which the focus update is occurring.
- [UIFocusHeading](../uifocusheading.md): The general type of an event.

# nextFocusedView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The view that takes the focus after the focus update.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) UIView * nextFocusedView;
```

<a id="Discussion"></a>

## Discussion

If your app targets tvOS 10 and later, use [nextFocusedItem](nextfocuseditem.md) instead.

This property returns `nil` if no view will be focused after the update.

## See Also

### Locating focus direction

- [previouslyFocusedView](previouslyfocusedview.md): The view that was focused before the focus update.
- [focusHeading](focusheading.md): The heading in which the focus update is occurring.
- [UIFocusHeading](../uifocusheading.md): The general type of an event.
