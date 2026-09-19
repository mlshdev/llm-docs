> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextview/init(frame:textcontainer:)

# init(frame:textContainer:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a new text view with the specified text container.

## Declaration

```swift
init(frame: CGRect, textContainer: NSTextContainer?)
```

## Parameters

- `frame`: The frame rectangle of the text view.
- `textContainer`: The text container to use for the receiver (can be `nil`).

<a id="return-value"></a>

## Return Value

An initialized text view.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `UITextView` objects.

## See Also

### Initializing the text view

- [init(usingTextLayoutManager:)](init%28usingtextlayoutmanager_%29.md): Creates a new text view, with or without a text layout manager depending on the Boolean value you specify.
- [init(coder:)](init%28coder_%29.md): Creates a text view from data in an unarchiver.

# initWithFrame:textContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a new text view with the specified text container.

## Declaration

```objectivec
- (instancetype) initWithFrame:(CGRect) frame textContainer:(NSTextContainer *) textContainer;
```

## Parameters

- `frame`: The frame rectangle of the text view.
- `textContainer`: The text container to use for the receiver (can be `nil`).

<a id="return-value"></a>

## Return Value

An initialized text view.

<a id="Discussion"></a>

## Discussion

This is the designated initializer for `UITextView` objects.

## See Also

### Initializing the text view

- [textViewUsingTextLayoutManager:](init%28usingtextlayoutmanager_%29.md): Creates a new text view, with or without a text layout manager depending on the Boolean value you specify.
- [initWithCoder:](init%28coder_%29.md): Creates a text view from data in an unarchiver.
