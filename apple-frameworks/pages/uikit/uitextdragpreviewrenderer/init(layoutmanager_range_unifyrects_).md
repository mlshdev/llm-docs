> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragpreviewrenderer/init(layoutmanager:range:unifyrects:)](https://developer.apple.com/documentation/uikit/uitextdragpreviewrenderer/init(layoutmanager:range:unifyrects:))

# init(layoutManager:range:unifyRects:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an initialized renderer of a text drag preview with the specified layout manager, range, and rectangle detection behavior.

## Declaration

```swift
init(layoutManager: NSLayoutManager, range: NSRange, unifyRects: Bool)
```

## Parameters

- `layoutManager`: The layout manager that renders the preview.
- `range`: The range to render the preview.
- `unifyRects`: A Boolean value that indicates whether the vertical position and height of the detection rectangles adjust to touch each other. If `true`, the [firstLineRect](firstlinerect.md), [bodyRect](bodyrect.md), and [lastLineRect](lastlinerect.md) properties adjust; otherwise, they don’t. The default value is `true`.

<a id="return-value"></a>

## Return Value

A renderer of a text drag preview using the specified layout manager, range, and detection behavior.

## See Also

### Initializing a text drag preview renderer

- [init(layoutManager:range:)](init%28layoutmanager_range_%29.md): Initializes and returns a text drag preview renderer with the specified layout managers and range to render the text drag preview.

# initWithLayoutManager:range:unifyRects: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns an initialized renderer of a text drag preview with the specified layout manager, range, and rectangle detection behavior.

## Declaration

```objectivec
- (instancetype) initWithLayoutManager:(NSLayoutManager *) layoutManager range:(NSRange) range unifyRects:(BOOL) unifyRects;
```

## Parameters

- `layoutManager`: The layout manager that renders the preview.
- `range`: The range to render the preview.
- `unifyRects`: A Boolean value that indicates whether the vertical position and height of the detection rectangles adjust to touch each other. If `true`, the [firstLineRect](firstlinerect.md), [bodyRect](bodyrect.md), and [lastLineRect](lastlinerect.md) properties adjust; otherwise, they don’t. The default value is `true`.

<a id="return-value"></a>

## Return Value

A renderer of a text drag preview using the specified layout manager, range, and detection behavior.

## See Also

### Initializing a text drag preview renderer

- [initWithLayoutManager:range:](init%28layoutmanager_range_%29.md): Initializes and returns a text drag preview renderer with the specified layout managers and range to render the text drag preview.
