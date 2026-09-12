> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutmanager/invalidaterenderingattributes(for:)](https://developer.apple.com/documentation/appkit/nstextlayoutmanager/invalidaterenderingattributes(for:))

# invalidateRenderingAttributes(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Invalidates the rendering attributes of the specified text range.

## Declaration

```swift
func invalidateRenderingAttributes(for textRange: NSTextRange)
```

## Parameters

- `textRange`: The range of the text to invalidate.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute(\_:value:for:)](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributes(from:reverse:using:)](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributes(forLink:at:)](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [removeRenderingAttribute(\_:for:)](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

# invalidateRenderingAttributesForTextRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Invalidates the rendering attributes of the specified text range.

## Declaration

```objectivec
- (void) invalidateRenderingAttributesForTextRange:(NSTextRange *) textRange;
```

## Parameters

- `textRange`: The range of the text to invalidate.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute:value:forTextRange:](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributesFromLocation:reverse:usingBlock:](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributesForLink:atLocation:](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [removeRenderingAttribute:forTextRange:](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.
