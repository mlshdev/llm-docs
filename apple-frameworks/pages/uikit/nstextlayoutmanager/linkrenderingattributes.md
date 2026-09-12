> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutmanager/linkrenderingattributes](https://developer.apple.com/documentation/uikit/nstextlayoutmanager/linkrenderingattributes)

# linkRenderingAttributes (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the default set of attributes for rendering a link.

## Declaration

```swift
class var linkRenderingAttributes: [NSAttributedString.Key : Any] { get }
```

<a id="Discussion"></a>

## Discussion

The base [NSTextLayoutManager](../nstextlayoutmanager.md) class returns with [single](../nsunderlinestyle/single.md) for [underlineStyle](../../foundation/nsattributedstring/key/underlinestyle.md) in Swift or [NSUnderlineStyleAttributeName](../nsunderlinestyleattributename.md) in Objective-C, and the platform link color for [foregroundColor](../../foundation/nsattributedstring/key/foregroundcolor.md) in Swift or [NSForegroundColorAttributeName](../nsforegroundcolorattributename.md) in Objective-C. The platform color for macOS is `linkColor`. Other platforms uses `blueColor`.

## See Also

### Adjusting rendering

- [addRenderingAttribute(\_:value:for:)](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributes(from:reverse:using:)](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributes(forLink:at:)](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributes(for:)](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute(\_:for:)](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes(\_:for:)](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.

# linkRenderingAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the default set of attributes for rendering a link.

## Declaration

```objectivec
@property (class, readonly) NSDictionary<NSString *,id> * linkRenderingAttributes;
```

<a id="Discussion"></a>

## Discussion

The base [NSTextLayoutManager](../nstextlayoutmanager.md) class returns with [NSUnderlineStyleSingle](../nsunderlinestyle/single.md) for [underlineStyle](../../foundation/nsattributedstring/key/underlinestyle.md) in Swift or [NSUnderlineStyleAttributeName](../nsunderlinestyleattributename.md) in Objective-C, and the platform link color for [foregroundColor](../../foundation/nsattributedstring/key/foregroundcolor.md) in Swift or [NSForegroundColorAttributeName](../nsforegroundcolorattributename.md) in Objective-C. The platform color for macOS is `linkColor`. Other platforms uses `blueColor`.

## See Also

### Adjusting rendering

- [addRenderingAttribute:value:forTextRange:](addrenderingattribute%28__value_for_%29.md): Sets the rendering attribute for the value and range you specify.
- [enumerateRenderingAttributesFromLocation:reverse:usingBlock:](enumeraterenderingattributes%28from_reverse_using_%29.md): Enumerates the rendering attributes from a location you specify.
- [renderingAttributesForLink:atLocation:](renderingattributes%28forlink_at_%29.md): Returns a dictionary of rendering attributes for rendering a link.
- [invalidateRenderingAttributesForTextRange:](invalidaterenderingattributes%28for_%29.md): Invalidates the rendering attributes of the specified text range.
- [removeRenderingAttribute:forTextRange:](removerenderingattribute%28__for_%29.md): Removes the rendering attribute from the specified text range.
- [setRenderingAttributes:forTextRange:](setrenderingattributes%28__for_%29.md): Sets the rendering attributes for the range you specify.
