> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/renderingattributes(forlink:at:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/renderingattributes(forlink:at:))

# renderingAttributes(forLink:at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a dictionary of rendering attributes for rendering a link.

## Declaration

```swift
func renderingAttributes(forLink link: Any, at location: any NSTextLocation) -> [NSAttributedString.Key : Any]
```

## Parameters

- `link`: The link.
- `location`: The location of the link in the text.

<a id="return-value"></a>

## Return Value

A  dictionary of rendering attributes.

<a id="Discussion"></a>

## Discussion

As with other rendering attributes, specifying [NSNull](../../foundation/nsnull.md) removes the attribute from the final attributes the framework uses for rendering. It has priority over the general rendering attributes.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute(\_:value:for:)](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributes(from:reverse:using:)](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [invalidateRenderingAttributes(for:)](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute(\_:for:)](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

# renderingAttributesForLink:atLocation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a dictionary of rendering attributes for rendering a link.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) renderingAttributesForLink:(id) link atLocation:(id<NSTextLocation>) location;
```

## Parameters

- `link`: The link.
- `location`: The location of the link in the text.

<a id="return-value"></a>

## Return Value

A  dictionary of rendering attributes.

<a id="Discussion"></a>

## Discussion

As with other rendering attributes, specifying [NSNull](../../foundation/nsnull.md) removes the attribute from the final attributes the framework uses for rendering. It has priority over the general rendering attributes.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute:value:forTextRange:](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributesFromLocation:reverse:usingBlock:](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [invalidateRenderingAttributesForTextRange:](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute:forTextRange:](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.
