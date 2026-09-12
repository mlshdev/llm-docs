> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller/inputview](https://developer.apple.com/documentation/uikit/uiinputviewcontroller/inputview)

# inputView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The primary view for the input view controller.

## Declaration

```swift
var inputView: UIInputView? { get set }
```

<a id="Discussion"></a>

## Discussion

When you use an input view controller subclass as the primary view controller for a custom keyboard, this property’s [UIInputView](../uiinputview.md) object is initially empty. To display your keyboard’s user interface, add controls and views to the [inputView](inputview.md) property.

# inputView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The primary view for the input view controller.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIInputView * inputView;
```

<a id="Discussion"></a>

## Discussion

When you use an input view controller subclass as the primary view controller for a custom keyboard, this property’s [UIInputView](../uiinputview.md) object is initially empty. To display your keyboard’s user interface, add controls and views to the [inputView](inputview.md) property.
