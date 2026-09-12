> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/decoration/image(_:color:size:)](https://developer.apple.com/documentation/uikit/uicalendarview/decoration/image(_:color:size:))

# image(\_:color:size:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a new calendar view decoration with the image, color, and size that you specify.

## Declaration

```swift
@MainActor @preconcurrency static func image(_ image: UIImage?, color: UIColor? = nil, size: UICalendarView.DecorationSize = .medium) -> UICalendarView.Decoration
```

## Parameters

- `image`: An image to display as the decoration.
- `color`: A color for the decoration.
- `size`: A relative size for the decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

<a id="Discussion"></a>

## Discussion

The image defaults to `circlebadge.fill` if you don’t specify it.

The color defaults to [systemFill](../../uicolor/systemfill.md) if you don’t specify it.

The size defaults to [UICalendarView.DecorationSize.medium](../decorationsize/medium.md) if nil.
