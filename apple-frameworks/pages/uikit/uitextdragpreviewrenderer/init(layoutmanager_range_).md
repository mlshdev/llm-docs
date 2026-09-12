> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragpreviewrenderer/init(layoutmanager:range:)](https://developer.apple.com/documentation/uikit/uitextdragpreviewrenderer/init(layoutmanager:range:))

# init(layoutManager:range:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a text drag preview renderer with the specified layout managers and range to render the text drag preview.

## Declaration

```swift
convenience init(layoutManager: NSLayoutManager, range: NSRange)
```

## Parameters

- `layoutManager`: The layout manager that renders the text drag preview.
- `range`: The range to render the text drag preview.

<a id="return-value"></a>

## Return Value

A renderer of a text drag preview using the specified layout manager and range.

## See Also

### Initializing a text drag preview renderer

- [init(layoutManager:range:unifyRects:)](init%28layoutmanager_range_unifyrects_%29.md): Returns an initialized renderer of a text drag preview with the specified layout manager, range, and rectangle detection behavior.

# initWithLayoutManager:range: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes and returns a text drag preview renderer with the specified layout managers and range to render the text drag preview.

## Declaration

```objectivec
- (instancetype) initWithLayoutManager:(NSLayoutManager *) layoutManager range:(NSRange) range;
```

## Parameters

- `layoutManager`: The layout manager that renders the text drag preview.
- `range`: The range to render the text drag preview.

<a id="return-value"></a>

## Return Value

A renderer of a text drag preview using the specified layout manager and range.

## See Also

### Initializing a text drag preview renderer

- [initWithLayoutManager:range:unifyRects:](init%28layoutmanager_range_unifyrects_%29.md): Returns an initialized renderer of a text drag preview with the specified layout manager, range, and rectangle detection behavior.
