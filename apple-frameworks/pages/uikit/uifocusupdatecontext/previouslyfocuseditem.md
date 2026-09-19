> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uifocusupdatecontext/previouslyfocuseditem

# previouslyFocusedItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The item that was focused before the update.

## Declaration

```swift
weak var previouslyFocusedItem: (any UIFocusItem)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` when there was no previously focused item.

## See Also

### Getting related focus items

- [nextFocusedItem](nextfocuseditem.md): The item to be focused after the update.

# previouslyFocusedItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The item that was focused before the update.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIFocusItem> previouslyFocusedItem;
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` when there was no previously focused item.

## See Also

### Getting related focus items

- [nextFocusedItem](nextfocuseditem.md): The item to be focused after the update.
