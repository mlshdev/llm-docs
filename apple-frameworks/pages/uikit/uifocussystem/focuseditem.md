> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/focuseditem](https://developer.apple.com/documentation/uikit/uifocussystem/focuseditem)

# focusedItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The item that’s currently focused.

## Declaration

```swift
weak var focusedItem: (any UIFocusItem)? { get }
```

<a id="Discussion"></a>

## Discussion

If the current object or none of its children are focused, this property is set to `nil`.

# focusedItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The item that’s currently focused.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIFocusItem> focusedItem;
```

<a id="Discussion"></a>

## Discussion

If the current object or none of its children are focused, this property is set to `nil`.
