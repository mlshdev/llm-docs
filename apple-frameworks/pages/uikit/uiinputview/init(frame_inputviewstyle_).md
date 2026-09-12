> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputview/init(frame:inputviewstyle:)](https://developer.apple.com/documentation/uikit/uiinputview/init(frame:inputviewstyle:))

# init(frame:inputViewStyle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns an input view using the specified style information.

## Declaration

```swift
init(frame: CGRect, inputViewStyle: UIInputView.Style)
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points. The origin of the frame is relative to the superview in which you plan to add it.
- `inputViewStyle`: The style to use when altering the appearance of the view and its subviews. For a list of possible values, see [UIInputView.Style](style.md)

<a id="return-value"></a>

## Return Value

An initialized view object or `nil` if the view could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the view and must be called by your subclass at initialization time.

## See Also

### Initializing an input view

- [init(coder:)](init%28coder_%29.md): Creates an input view from data in an unarchiver.

# initWithFrame:inputViewStyle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns an input view using the specified style information.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame inputViewStyle:(UIInputViewStyle) inputViewStyle;
```

## Parameters

- `frame`: The frame rectangle for the view, measured in points. The origin of the frame is relative to the superview in which you plan to add it.
- `inputViewStyle`: The style to use when altering the appearance of the view and its subviews. For a list of possible values, see [UIInputViewStyle](style.md)

<a id="return-value"></a>

## Return Value

An initialized view object or `nil` if the view could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the view and must be called by your subclass at initialization time.

## See Also

### Initializing an input view

- [initWithCoder:](init%28coder_%29.md): Creates an input view from data in an unarchiver.
