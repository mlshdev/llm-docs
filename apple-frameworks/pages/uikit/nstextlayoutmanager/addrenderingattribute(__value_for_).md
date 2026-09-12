> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/addrenderingattribute(_:value:for:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/addrenderingattribute(_:value:for:))

# addRenderingAttribute(\_:value:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Sets the rendering attribute for the value and range you specify.

## Declaration

```swift
func addRenderingAttribute(_ renderingAttribute: NSAttributedString.Key, value: Any?, for textRange: NSTextRange)
```

## Parameters

- `renderingAttribute`: The [NSAttributedString.Key](../../foundation/nsattributedstring/key.md) that represents the attribute.
- `value`: The value for the attribute.
- `textRange`: The range over which to apply the attribute.

<a id="Discussion"></a>

## Discussion

Passing `nil` overrides the specified attribute by removing it from the final attributes the framework passes to the layout and rendering engine. This is a convenience method for [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md).

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [enumerateRenderingAttributes(from:reverse:using:)](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributes(forLink:at:)](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributes(for:)](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute(\_:for:)](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

# addRenderingAttribute:value:forTextRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Sets the rendering attribute for the value and range you specify.

## Declaration

```objectivec
- (void) addRenderingAttribute:(NSAttributedStringKey) renderingAttribute value:(id) value forTextRange:(NSTextRange *) textRange;
```

## Parameters

- `renderingAttribute`: The [NSAttributedStringKey](../../foundation/nsattributedstring/key.md) that represents the attribute.
- `value`: The value for the attribute.
- `textRange`: The range over which to apply the attribute.

<a id="Discussion"></a>

## Discussion

Passing `nil` overrides the specified attribute by removing it from the final attributes the framework passes to the layout and rendering engine. This is a convenience method for [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md).

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [enumerateRenderingAttributesFromLocation:reverse:usingBlock:](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributesForLink:atLocation:](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributesForTextRange:](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute:forTextRange:](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.
