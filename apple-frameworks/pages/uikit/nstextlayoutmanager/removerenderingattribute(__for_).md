> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/removerenderingattribute(_:for:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/removerenderingattribute(_:for:))

# removeRenderingAttribute(\_:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Removes the rendering attribute from the specified text range.

## Declaration

```swift
func removeRenderingAttribute(_ renderingAttribute: NSAttributedString.Key, for textRange: NSTextRange)
```

## Parameters

- `renderingAttribute`: The [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) attribute to remove
- `textRange`: The range over which to remove the rendering attribute.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute(\_:value:for:)](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributes(from:reverse:using:)](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributes(forLink:at:)](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributes(for:)](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

# removeRenderingAttribute:forTextRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Removes the rendering attribute from the specified text range.

## Declaration

```objectivec
- (void) removeRenderingAttribute:(NSAttributedStringKey) renderingAttribute forTextRange:(NSTextRange *) textRange;
```

## Parameters

- `renderingAttribute`: The [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) attribute to remove
- `textRange`: The range over which to remove the rendering attribute.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute:value:forTextRange:](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributesFromLocation:reverse:usingBlock:](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributesForLink:atLocation:](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributesForTextRange:](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.
