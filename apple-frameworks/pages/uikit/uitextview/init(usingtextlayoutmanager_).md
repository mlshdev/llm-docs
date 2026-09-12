> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/init(usingtextlayoutmanager:)](https://developer.apple.com/documentation/uikit/uitextview/init(usingtextlayoutmanager:))

# init(usingTextLayoutManager:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new text view, with or without a text layout manager depending on the Boolean value you specify.

## Declaration

```swift
convenience init(usingTextLayoutManager: Bool)
```

## Parameters

- `usingTextLayoutManager`: A Boolean value that indicates whether the framework should create the text view with an [NSTextLayoutManager](../nstextlayoutmanager.md).

## See Also

### Initializing the text view

- [init(frame:textContainer:)](init%28frame_textcontainer_%29.md): Creates a new text view with the specified text container.
- [init(coder:)](init%28coder_%29.md): Creates a text view from data in an unarchiver.

# textViewUsingTextLayoutManager: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new text view, with or without a text layout manager depending on the Boolean value you specify.

## Declaration

```objectivec
+ (instancetype) textViewUsingTextLayoutManager:(BOOL) usingTextLayoutManager;
```

## Parameters

- `usingTextLayoutManager`: A Boolean value that indicates whether the framework should create the text view with an [NSTextLayoutManager](../nstextlayoutmanager.md).

## See Also

### Initializing the text view

- [initWithFrame:textContainer:](init%28frame_textcontainer_%29.md): Creates a new text view with the specified text container.
- [initWithCoder:](init%28coder_%29.md): Creates a text view from data in an unarchiver.
