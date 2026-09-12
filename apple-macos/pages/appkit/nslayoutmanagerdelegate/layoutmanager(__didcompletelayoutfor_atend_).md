> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:didcompletelayoutfor:atend:)](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanager(_:didcompletelayoutfor:atend:))

# layoutManager(\_:didCompleteLayoutFor:atEnd:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Informs the delegate when the layout manager finishes laying out text in the specified text container.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, didCompleteLayoutFor textContainer: NSTextContainer?, atEnd layoutFinishedFlag: Bool)
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `textContainer`: The text container in which layout is complete. If `nil`, if there aren’t enough containers to hold all the text; the delegate can use this information as a cue to add another text container.
- `layoutFinishedFlag`: If [true](https://developer.apple.com/documentation/swift/true), `aLayoutManager` is finished laying out its text—this also means that `aTextContainer` is the final text container used by the layout manager. Delegates can use this information to show an indicator or background or to enable or disable a button that forces immediate layout of text.

<a id="Discussion"></a>

## Discussion

This message is sent whenever a text container has been filled. This method can be useful for paginating.

## See Also

### Responding to text container layout

- [layoutManager(\_:textContainer:didChangeGeometryFrom:)](layoutmanager%28__textcontainer_didchangegeometryfrom_%29.md): Informs the delegate when the layout manager invalidates layout due to a change in the geometry of the specified text container.

# layoutManager:didCompleteLayoutForTextContainer:atEnd: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Informs the delegate when the layout manager finishes laying out text in the specified text container.

## Declaration

```objectivec
- (void) layoutManager:(NSLayoutManager *) layoutManager didCompleteLayoutForTextContainer:(NSTextContainer *) textContainer atEnd:(BOOL) layoutFinishedFlag;
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `textContainer`: The text container in which layout is complete. If `nil`, if there aren’t enough containers to hold all the text; the delegate can use this information as a cue to add another text container.
- `layoutFinishedFlag`: If [true](https://developer.apple.com/documentation/swift/true), `aLayoutManager` is finished laying out its text—this also means that `aTextContainer` is the final text container used by the layout manager. Delegates can use this information to show an indicator or background or to enable or disable a button that forces immediate layout of text.

<a id="Discussion"></a>

## Discussion

This message is sent whenever a text container has been filled. This method can be useful for paginating.

## See Also

### Responding to text container layout

- [layoutManager:textContainer:didChangeGeometryFromSize:](layoutmanager%28__textcontainer_didchangegeometryfrom_%29.md): Informs the delegate when the layout manager invalidates layout due to a change in the geometry of the specified text container.
