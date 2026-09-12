> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewdelegate](https://developer.apple.com/documentation/browserenginekit/bescrollviewdelegate)

# BEScrollViewDelegate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A protocol for scroll view delegates to handle scroll updates and DOM nesting.

## Declaration

```swift
@MainActor protocol BEScrollViewDelegate : UIScrollViewDelegate
```

## Topics

### Nesting sibling scroll views

- [parentScrollView(for:)](bescrollviewdelegate/parentscrollview%28for_%29.md): Returns the scroll view that acts as the DOM container of the given scroll view.

### Handling scroll events

- [scrollView(\_:handle:completion:)](bescrollviewdelegate/scrollview%28__handle_completion_%29.md): Handles a scroll update before the scroll view reacts to it.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIScrollViewDelegate](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate)

## See Also

### Scroll view interaction

- [BEScrollView](bescrollview.md): A scroll view that works with its delegate to handle nesting and customize scroll interactions.
- [BEScrollViewScrollUpdate](bescrollviewscrollupdate.md): An object that describes a change in a scroll view’s scroll state.

# BEScrollViewDelegate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A protocol for scroll view delegates to handle scroll updates and DOM nesting.

## Declaration

```objectivec
@protocol BEScrollViewDelegate <UIScrollViewDelegate>
```

## Topics

### Nesting sibling scroll views

- [parentScrollViewForScrollView:](bescrollviewdelegate/parentscrollview%28for_%29.md): Returns the scroll view that acts as the DOM container of the given scroll view.

### Handling scroll events

- [scrollView:handleScrollUpdate:completion:](bescrollviewdelegate/scrollview%28__handle_completion_%29.md): Handles a scroll update before the scroll view reacts to it.

## Relationships

### Inherits From

- [UIScrollViewDelegate](https://developer.apple.com/documentation/uikit/uiscrollviewdelegate)

## See Also

### Scroll view interaction

- [BEScrollView](bescrollview.md): A scroll view that works with its delegate to handle nesting and customize scroll interactions.
- [BEScrollViewScrollUpdate](bescrollviewscrollupdate.md): An object that describes a change in a scroll view’s scroll state.
