> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/unobscuredcontentrect](https://developer.apple.com/documentation/uikit/uitextinput/unobscuredcontentrect)

# unobscuredContentRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · tvOS 26.4+ · visionOS 26.4+

The visible content region, excluding parts covered by view-specific UI.

## Declaration

```swift
optional var unobscuredContentRect: CGRect { get }
```

<a id="return-value"></a>

## Return Value

The visible content rectangle, or CGRectNull if there is no specific constraint.

<a id="discussion"></a>

## Discussion

Account for scroll position, insets, and any custom UI elements (toolbars, accessories, etc.) that obscure content. The system automatically accounts for keyboard obscuring when editing.

The rectangle is in the `textInputView` coordinate space.

# unobscuredContentRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · tvOS 26.4+ · visionOS 26.4+

The visible content region, excluding parts covered by view-specific UI.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect unobscuredContentRect;
```

<a id="return-value"></a>

## Return Value

The visible content rectangle, or CGRectNull if there is no specific constraint.

<a id="discussion"></a>

## Discussion

Account for scroll position, insets, and any custom UI elements (toolbars, accessories, etc.) that obscure content. The system automatically accounts for keyboard obscuring when editing.

The rectangle is in the `textInputView` coordinate space.
