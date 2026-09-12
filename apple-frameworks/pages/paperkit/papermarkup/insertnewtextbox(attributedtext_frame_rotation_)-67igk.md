> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkup/insertnewtextbox(attributedtext:frame:rotation:)-67igk](https://developer.apple.com/documentation/paperkit/papermarkup/insertnewtextbox(attributedtext:frame:rotation:)-67igk)

# insertNewTextbox(attributedText:frame:rotation:)

**Framework:** PaperKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Add a new text box on top of the paper.

## Declaration

```swift
mutating func insertNewTextbox(attributedText: NSAttributedString, frame: CGRect, rotation: CGFloat = 0)
```

## Parameters

- `attributedText`: The text inside the element.
- `frame`: The frame to add the element at.
- `rotation`: The rotation in radians to add the element with.

## See Also

### Inserting elements

- [insertNewShape(configuration:frame:rotation:)](insertnewshape%28configuration_frame_rotation_%29.md): Add a new element on top of the paper.
- [insertNewImage(\_:frame:rotation:)](insertnewimage%28__frame_rotation_%29.md): Add a new image on top of the paper.
- [insertNewLine(configuration:from:to:startMarker:endMarker:)](insertnewline%28configuration_from_to_startmarker_endmarker_%29.md): Add a line element on top of the paper.
- [insertNewTextbox(attributedText:frame:rotation:)](insertnewtextbox%28attributedtext_frame_rotation_%29-53rs.md): Add a new text box on top of the paper.
