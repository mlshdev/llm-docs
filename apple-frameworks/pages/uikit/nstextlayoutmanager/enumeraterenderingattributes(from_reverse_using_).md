> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/enumeraterenderingattributes(from:reverse:using:)](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/enumeraterenderingattributes(from:reverse:using:))

# enumerateRenderingAttributes(from:reverse:using:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates the rendering attributes from a location you specify.

## Declaration

```swift
func enumerateRenderingAttributes(from location: any NSTextLocation, reverse: Bool, using block: (NSTextLayoutManager, [NSAttributedString.Key : Any], NSTextRange) -> Bool)
```

## Parameters

- `location`: The location at which to start the enumeration.
- `reverse`: Whether to start the enumeration from the end of the range.
- `block`: A closure you provide to determine if the enumeration finishes early.

<a id="Discussion"></a>

## Discussion

This method only enumerates ranges with text that specify rendering attributes. Returning `false` from `block` breaks out of the enumeration.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute(\_:value:for:)](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [renderingAttributes(forLink:at:)](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributes(for:)](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute(\_:for:)](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

# enumerateRenderingAttributesFromLocation:reverse:usingBlock: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Enumerates the rendering attributes from a location you specify.

## Declaration

```objectivec
- (void) enumerateRenderingAttributesFromLocation:(id<NSTextLocation>) location reverse:(BOOL) reverse usingBlock:(BOOL (^)(NSTextLayoutManager *textLayoutManager, NSDictionary<NSString *,id> *attributes, NSTextRange *textRange)) block;
```

## Parameters

- `location`: The location at which to start the enumeration.
- `reverse`: Whether to start the enumeration from the end of the range.
- `block`: A closure you provide to determine if the enumeration finishes early.

<a id="Discussion"></a>

## Discussion

This method only enumerates ranges with text that specify rendering attributes. Returning `false` from `block` breaks out of the enumeration.

## See Also

### Adjusting rendering

- [linkRenderingAttributes](linkrenderingattributes.md): Returns the default set of attributes for rendering a link.
- [addRenderingAttribute:value:forTextRange:](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [renderingAttributesForLink:atLocation:](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributesForTextRange:](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute:forTextRange:](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.
