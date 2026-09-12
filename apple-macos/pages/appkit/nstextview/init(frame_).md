> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/init(frame:)](https://developer.apple.com/documentation/appkit/nstextview/init(frame:))

# init(frame:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes a text view.

## Declaration

```swift
init(frame frameRect: NSRect)
```

## Parameters

- `frameRect`: The frame rectangle of the text view.

<a id="return-value"></a>

## Return Value

An initialized text view.

<a id="Discussion"></a>

## Discussion

This method creates the entire collection of objects associated with a text view—its text container, layout manager, and text storage—and invokes [init(frame:textContainer:)](init%28frame_textcontainer_%29.md).

This method creates the text web in such a manner that the text view is the principal owner of the objects in the web.

## See Also

### Creating a text view

- [init(frame:textContainer:)](init%28frame_textcontainer_%29.md): Initializes a text view.
- [init(usingTextLayoutManager:)](init%28usingtextlayoutmanager_%29.md)
- [init(coder:)](init%28coder_%29.md): Initializes a text view with data in an unarchiver.

# initWithFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes a text view.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect;
```

## Parameters

- `frameRect`: The frame rectangle of the text view.

<a id="return-value"></a>

## Return Value

An initialized text view.

<a id="Discussion"></a>

## Discussion

This method creates the entire collection of objects associated with a text view—its text container, layout manager, and text storage—and invokes [initWithFrame:textContainer:](init%28frame_textcontainer_%29.md).

This method creates the text web in such a manner that the text view is the principal owner of the objects in the web.

## See Also

### Creating a text view

- [initWithFrame:textContainer:](init%28frame_textcontainer_%29.md): Initializes a text view.
- [initUsingTextLayoutManager:](init%28usingtextlayoutmanager_%29.md)
- [textViewUsingTextLayoutManager:](textviewusingtextlayoutmanager_.md)
- [initWithCoder:](init%28coder_%29.md): Initializes a text view with data in an unarchiver.
