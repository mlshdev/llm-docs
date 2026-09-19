> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifocusupdatecontext/nextfocuseditem

# nextFocusedItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The item to be focused after the update.

## Declaration

```swift
weak var nextFocusedItem: (any UIFocusItem)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` if no item is receiving the focus.

## See Also

### Getting related focus items

- [previouslyFocusedItem](previouslyfocuseditem.md): The item that was focused before the update.

# nextFocusedItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The item to be focused after the update.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIFocusItem> nextFocusedItem;
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` if no item is receiving the focus.

## See Also

### Getting related focus items

- [previouslyFocusedItem](previouslyfocuseditem.md): The item that was focused before the update.
