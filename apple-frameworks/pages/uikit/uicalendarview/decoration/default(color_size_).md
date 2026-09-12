> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarview/decoration/default(color:size:)](https://developer.apple.com/documentation/uikit/uicalendarview/decoration/default(color:size:))

# default(color:size:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Creates a default calendar view decoration with a filled circle image, using the color and size you specify.

## Declaration

```swift
@MainActor @preconcurrency static func `default`(color: UIColor? = nil, size: UICalendarView.DecorationSize = .medium) -> UICalendarView.Decoration
```

## Parameters

- `color`: A color for the decoration.
- `size`: A relative size for the decoration.

<a id="return-value"></a>

## Return Value

A calendar view decoration.

## See Also

### Creating a Default Decoration View

- [init()](init%28%29.md): Creates a default calendar view decoration with a filled circle image, using the system fill color and medium size.
