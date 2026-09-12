> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdragoptions/striptextcolorfrompreviews](https://developer.apple.com/documentation/uikit/uitextdragoptions/striptextcolorfrompreviews)

# stripTextColorFromPreviews (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Strips the foreground and background colors for a system-provided text drag preview.

## Declaration

```swift
static var stripTextColorFromPreviews: UITextDragOptions { get }
```

<a id="Discussion"></a>

## Discussion

When the system creates a preview for a text drag operation, the preview keeps the foreground and background text colors. Using the [stripTextColorFromPreviews](striptextcolorfrompreviews.md) option strips away those colors, leaving the preview with black text on a clear background. This option changes only the preview, not the view used to create the preview. Also, this option doesn’t affect any images included in the preview.

# UITextDragOptionStripTextColorFromPreviews (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Strips the foreground and background colors for a system-provided text drag preview.

## Declaration

```objectivec
UITextDragOptionStripTextColorFromPreviews
```

<a id="Discussion"></a>

## Discussion

When the system creates a preview for a text drag operation, the preview keeps the foreground and background text colors. Using the [UITextDragOptionStripTextColorFromPreviews](striptextcolorfrompreviews.md) option strips away those colors, leaving the preview with black text on a clear background. This option changes only the preview, not the view used to create the preview. Also, this option doesn’t affect any images included in the preview.

## See Also

### Text drag options

- [UITextDragOptionsNone](uitextdragoptionsnone.md): Indicates no text drag options.
