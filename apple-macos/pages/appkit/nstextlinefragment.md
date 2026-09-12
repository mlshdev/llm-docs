> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlinefragment](https://developer.apple.com/documentation/appkit/nstextlinefragment)

# NSTextLineFragment (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.

## Declaration

```swift
class NSTextLineFragment
```

## Topics

### Creating line fragments

- [init(attributedString:range:)](nstextlinefragment/init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [init(coder:)](nstextlinefragment/init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
- [init(string:attributes:range:)](nstextlinefragment/init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.

### Line fragment characteristics

- [attributedString](nstextlinefragment/attributedstring.md): The source attributed string.
- [characterRange](nstextlinefragment/characterrange.md): The string range for the source attributed string that corresponds to this line fragment.
- [glyphOrigin](nstextlinefragment/glyphorigin.md): Rendering origin for the left-most glyph in the line fragment coordinate system.
- [typographicBounds](nstextlinefragment/typographicbounds.md): The typographic bounds that specifies the dimensions of the line fragment for laying out line fragments to each other.

### Finding specific text

- [characterIndex(for:)](nstextlinefragment/characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [fractionOfDistanceThroughGlyph(for:)](nstextlinefragment/fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacter(at:)](nstextlinefragment/locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.

### Drawing

- [draw(at:in:)](nstextlinefragment/draw%28at_in_%29.md): Renders the line fragment contents at the rendering origin.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Layout

- [Using TextKit 2 to interact with text](https://developer.apple.com/documentation/uikit/using-textkit-2-to-interact-with-text): Interact with text by managing text selection and inserting custom text elements.
- [Managing viewport layout and attachment reuse in text views](https://developer.apple.com/documentation/uikit/managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.

# NSTextLineFragment (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that represents a line fragment as a single textual layout and rendering unit inside a text layout fragment.

## Declaration

```objectivec
@interface NSTextLineFragment : NSObject
```

## Topics

### Creating line fragments

- [initWithAttributedString:range:](nstextlinefragment/init%28attributedstring_range_%29.md): Creates a new line fragment from the attributed string for the range of characters you specify.
- [initWithCoder:](nstextlinefragment/init%28coder_%29.md): Creates a new line fragment with from data in an unarchiver.
- [initWithString:attributes:range:](nstextlinefragment/init%28string_attributes_range_%29.md): Creates a new line fragment using the string, attributes, and range you provide.

### Line fragment characteristics

- [attributedString](nstextlinefragment/attributedstring.md): The source attributed string.
- [characterRange](nstextlinefragment/characterrange.md): The string range for the source attributed string that corresponds to this line fragment.
- [glyphOrigin](nstextlinefragment/glyphorigin.md): Rendering origin for the left-most glyph in the line fragment coordinate system.
- [typographicBounds](nstextlinefragment/typographicbounds.md): The typographic bounds that specifies the dimensions of the line fragment for laying out line fragments to each other.

### Finding specific text

- [characterIndexForPoint:](nstextlinefragment/characterindex%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [fractionOfDistanceThroughGlyphForPoint:](nstextlinefragment/fractionofdistancethroughglyph%28for_%29.md): Returns character index for a point inside the line fragment coordinate system.
- [locationForCharacterAtIndex:](nstextlinefragment/locationforcharacter%28at_%29.md): Returns the location of the character at the specified index.

### Drawing

- [drawAtPoint:inContext:](nstextlinefragment/draw%28at_in_%29.md): Renders the line fragment contents at the rendering origin.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Layout

- [Using TextKit 2 to interact with text](https://developer.apple.com/documentation/uikit/using-textkit-2-to-interact-with-text): Interact with text by managing text selection and inserting custom text elements.
- [Managing viewport layout and attachment reuse in text views](https://developer.apple.com/documentation/uikit/managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass): Customize layout and preserve attachment views in your text view subclass.
- [NSTextLayoutManager](nstextlayoutmanager.md): The primary class that you use to manage text layout and presentation for custom text displays.
- [NSTextContainer](nstextcontainer.md): A region where text layout occurs.
- [NSTextLayoutFragment](nstextlayoutfragment.md): A class that represents the layout fragment typically corresponding to a rendering surface, such as a layer or view subclass.
- [NSTextViewportLayoutController](nstextviewportlayoutcontroller.md): Manages the layout process inside the viewport interacting with its delegate.
- [NSTextLayoutOrientationProvider](nstextlayoutorientationprovider.md): A set of methods that define the orientation of text for an object.
- [NSTextViewportRenderingSurface](nstextviewportrenderingsurface.md): A protocol that identifies a view or layer as a drawable element for a text layout fragment.
- [NSTextViewportRenderingSurfaceKey](nstextviewportrenderingsurfacekey.md): A protocol that lets you use an object to identify a rendering surface when storing or retrieving it.
