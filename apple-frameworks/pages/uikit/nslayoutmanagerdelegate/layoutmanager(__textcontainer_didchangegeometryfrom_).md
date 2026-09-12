> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:textcontainer:didchangegeometryfrom:)](https://developer.apple.com/documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:textcontainer:didchangegeometryfrom:))

# layoutManager(\_:textContainer:didChangeGeometryFrom:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Informs the delegate when the layout manager invalidates layout due to a change in the geometry of the specified text container.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, textContainer: NSTextContainer, didChangeGeometryFrom oldSize: CGSize)
```

## Parameters

- `layoutManager`: The layout manager invalidating layout.
- `textContainer`: The text container that changed geometry.
- `oldSize`: The size of the text container before it changed geometry.

<a id="Discussion"></a>

## Discussion

The delegate can react to the geometry change and perform adjustments such as recreating an exclusion path.

## See Also

### Responding to text container layout

- [layoutManager(\_:didCompleteLayoutFor:atEnd:)](layoutmanager%28__didcompletelayoutfor_atend_%29.md): Informs the delegate when the layout manager finishes laying out text in the specified text container.

# layoutManager:textContainer:didChangeGeometryFromSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Informs the delegate when the layout manager invalidates layout due to a change in the geometry of the specified text container.

## Declaration

```objectivec
- (void) layoutManager:(NSLayoutManager *) layoutManager textContainer:(NSTextContainer *) textContainer didChangeGeometryFromSize:(CGSize) oldSize;
```

## Parameters

- `layoutManager`: The layout manager invalidating layout.
- `textContainer`: The text container that changed geometry.
- `oldSize`: The size of the text container before it changed geometry.

<a id="Discussion"></a>

## Discussion

The delegate can react to the geometry change and perform adjustments such as recreating an exclusion path.

## See Also

### Responding to text container layout

- [layoutManager:didCompleteLayoutForTextContainer:atEnd:](layoutmanager%28__didcompletelayoutfor_atend_%29.md): Informs the delegate when the layout manager finishes laying out text in the specified text container.
