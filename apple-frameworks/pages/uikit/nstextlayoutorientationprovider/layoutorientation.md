> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutorientationprovider/layoutorientation](https://developer.apple.com/documentation/uikit/nstextlayoutorientationprovider/layoutorientation)

# layoutOrientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The default layout orientation.

## Declaration

```swift
var layoutOrientation: NSLayoutManager.TextLayoutOrientation { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the default layout orientation for text in the object that adopts the protocol. If the text contains an explicit [verticalGlyphForm](../../foundation/nsattributedstring/key/verticalglyphform.md) attribute in Swift or an [NSVerticalGlyphFormAttributeName](../nsverticalglyphformattributename.md) attribute in Objective-C, that attribute overrides the value in this property. When rendering, TextKit assumes the coordinate system is appropriately rotated.

## See Also

### Getting layout orientation

- [NSLayoutManager.TextLayoutOrientation](../nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.

# layoutOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The default layout orientation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTextLayoutOrientation layoutOrientation;
```

<a id="Discussion"></a>

## Discussion

This property contains the default layout orientation for text in the object that adopts the protocol. If the text contains an explicit [verticalGlyphForm](../../foundation/nsattributedstring/key/verticalglyphform.md) attribute in Swift or an [NSVerticalGlyphFormAttributeName](../nsverticalglyphformattributename.md) attribute in Objective-C, that attribute overrides the value in this property. When rendering, TextKit assumes the coordinate system is appropriately rotated.

## See Also

### Getting layout orientation

- [NSTextLayoutOrientation](../nslayoutmanager/textlayoutorientation.md): Constants that describe the text layout orientation.
