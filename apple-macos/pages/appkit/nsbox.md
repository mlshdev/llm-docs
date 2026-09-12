> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbox](https://developer.apple.com/documentation/appkit/nsbox)

# NSBox (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A stylized rectangular box with an optional title.

## Declaration

```swift
class NSBox
```

<a id="overview"></a>

## Overview

Use box objects to visually group the contents of your window. For example, you might use boxes to group related views. Use an [NSBox](nsbox.md) object to configure the appearance of the box.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

An `NSBox` object is a view that draws a line around its rectangular bounds and that displays a title on or near the line (or might display neither line nor title). You can adjust the style of the line (bezel, grooved, or plain) as well as the placement and font of the title. An `NSBox` also has a content view to which other views can be added; it thus offers a way for an application to group related views. You could create a custom subclass of `NSBox` that alters or augments its appearance or that modifies its grouping behavior. For example, you might add color to the lines or background, add a new line style, or have the views in the group automatically snap to an invisible grid when added.

<a id="Methods-to-Override"></a>

#### Methods to Override

You must override the [draw(\_:)](nsview/draw%28__%29.md) method (inherited from `NSView`) if you want to customize the appearance of your `NSBox` objects. Depending on the visual effect you’re trying to achieve, you may have to invoke `super`‘s implementation first. For example, if you are compositing a small image in a corner of the box, you would invoke the superclass implementation first. If you’re adding a new style of line, you would provide a way to store a request for this line type (such as a boolean instance variable and related accessor methods). Then, in [draw(\_:)](nsview/draw%28__%29.md), if a request for this line type exists, you would draw the entire view yourself (that is, without calling `super`). Otherwise, you would invoke the superclass implementation.

If you wish to change grouping behavior or other behavioral characteristics of the `NSBox` class, consider overriding [contentView](nsbox/contentview.md), [sizeToFit()](nsbox/sizetofit%28%29.md), or [addSubview(\_:)](nsview/addsubview%28__%29.md) (inherited from `NSView`).

<a id="Special-Considerations"></a>

#### Special Considerations

If you are drawing the custom `NSBox` entirely by yourself, and you want it to look exactly like the superclass object (except for your changes), it may take some effort and time to get the details right.

## Topics

### Configuring Boxes

- [borderRect](nsbox/borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](nsbox/boxtype-swift.property.md): The receiver’s box type.
- [borderType](nsbox/bordertype.md): Deprecated. The receiver’s border type.
- [isTransparent](nsbox/istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](nsbox/title.md): The receiver’s title.
- [titleFont](nsbox/titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](nsbox/titleposition-swift.property.md): A constant representing the title position.
- [titleCell](nsbox/titlecell.md): The cell used to display the receiver’s title.
- [titleRect](nsbox/titlerect.md): The rectangle in which the receiver’s title is drawn.

### Customizing

- [borderColor](nsbox/bordercolor.md): The color of the receiver’s border when the receiver is a custom box with a simple line border.
- [borderWidth](nsbox/borderwidth.md): The width of the receiver’s border when the receiver is a custom box with a simple line border.
- [cornerRadius](nsbox/cornerradius.md): The radius of the receiver’s corners when the receiver is a custom box with a simple line border.
- [fillColor](nsbox/fillcolor.md): The color of the receiver’s background when the receiver is a custom box with a simple line border.

### Managing Content

- [contentView](nsbox/contentview.md): The receiver’s content view.
- [contentViewMargins](nsbox/contentviewmargins.md): The distances between the border and the content view.

### Sizing

- [setFrameFromContentFrame(\_:)](nsbox/setframefromcontentframe%28__%29.md): Places the receiver so its content view lies on the specified frame.
- [sizeToFit()](nsbox/sizetofit%28%29.md): Resizes and moves the receiver’s content view so it just encloses its subviews.

### Constants

- [NSBox.TitlePosition](nsbox/titleposition-swift.enum.md): Specify the location of a box’s title with respect to its border.
- [NSBox.BoxType](nsbox/boxtype-swift.enum.md): These constants and data type identifies box types, which, in conjunction with a box’s border type, define the appearance of the box.

## Relationships

### Inherits From

- [NSView](nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Visual adornments

- [NSVisualEffectView](nsvisualeffectview.md): A view that adds translucency and vibrancy effects to the views in your interface.

# NSBox (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A stylized rectangular box with an optional title.

## Declaration

```objectivec
@interface NSBox : NSView
```

<a id="overview"></a>

## Overview

Use box objects to visually group the contents of your window. For example, you might use boxes to group related views. Use an [NSBox](nsbox.md) object to configure the appearance of the box.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

An `NSBox` object is a view that draws a line around its rectangular bounds and that displays a title on or near the line (or might display neither line nor title). You can adjust the style of the line (bezel, grooved, or plain) as well as the placement and font of the title. An `NSBox` also has a content view to which other views can be added; it thus offers a way for an application to group related views. You could create a custom subclass of `NSBox` that alters or augments its appearance or that modifies its grouping behavior. For example, you might add color to the lines or background, add a new line style, or have the views in the group automatically snap to an invisible grid when added.

<a id="Methods-to-Override"></a>

#### Methods to Override

You must override the [drawRect:](nsview/draw%28__%29.md) method (inherited from `NSView`) if you want to customize the appearance of your `NSBox` objects. Depending on the visual effect you’re trying to achieve, you may have to invoke `super`‘s implementation first. For example, if you are compositing a small image in a corner of the box, you would invoke the superclass implementation first. If you’re adding a new style of line, you would provide a way to store a request for this line type (such as a boolean instance variable and related accessor methods). Then, in [drawRect:](nsview/draw%28__%29.md), if a request for this line type exists, you would draw the entire view yourself (that is, without calling `super`). Otherwise, you would invoke the superclass implementation.

If you wish to change grouping behavior or other behavioral characteristics of the `NSBox` class, consider overriding [contentView](nsbox/contentview.md), [sizeToFit](nsbox/sizetofit%28%29.md), or [addSubview:](nsview/addsubview%28__%29.md) (inherited from `NSView`).

<a id="Special-Considerations"></a>

#### Special Considerations

If you are drawing the custom `NSBox` entirely by yourself, and you want it to look exactly like the superclass object (except for your changes), it may take some effort and time to get the details right.

## Topics

### Configuring Boxes

- [borderRect](nsbox/borderrect.md): The rectangle in which the receiver’s border is drawn.
- [boxType](nsbox/boxtype-swift.property.md): The receiver’s box type.
- [borderType](nsbox/bordertype.md): Deprecated. The receiver’s border type.
- [transparent](nsbox/istransparent.md): A Boolean value that indicates whether the receiver is transparent.
- [title](nsbox/title.md): The receiver’s title.
- [titleFont](nsbox/titlefont.md): The font object used to draw the receiver’s title.
- [titlePosition](nsbox/titleposition-swift.property.md): A constant representing the title position.
- [setTitleWithMnemonic:](nsbox/settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with a character denoted as an access key.
- [titleCell](nsbox/titlecell.md): The cell used to display the receiver’s title.
- [titleRect](nsbox/titlerect.md): The rectangle in which the receiver’s title is drawn.

### Customizing

- [borderColor](nsbox/bordercolor.md): The color of the receiver’s border when the receiver is a custom box with a simple line border.
- [borderWidth](nsbox/borderwidth.md): The width of the receiver’s border when the receiver is a custom box with a simple line border.
- [cornerRadius](nsbox/cornerradius.md): The radius of the receiver’s corners when the receiver is a custom box with a simple line border.
- [fillColor](nsbox/fillcolor.md): The color of the receiver’s background when the receiver is a custom box with a simple line border.

### Managing Content

- [contentView](nsbox/contentview.md): The receiver’s content view.
- [contentViewMargins](nsbox/contentviewmargins.md): The distances between the border and the content view.

### Sizing

- [setFrameFromContentFrame:](nsbox/setframefromcontentframe%28__%29.md): Places the receiver so its content view lies on the specified frame.
- [sizeToFit](nsbox/sizetofit%28%29.md): Resizes and moves the receiver’s content view so it just encloses its subviews.

### Constants

- [NSTitlePosition](nsbox/titleposition-swift.enum.md): Specify the location of a box’s title with respect to its border.
- [NSBoxType](nsbox/boxtype-swift.enum.md): These constants and data type identifies box types, which, in conjunction with a box’s border type, define the appearance of the box.

## Relationships

### Inherits From

- [NSView](nsview.md)

## See Also

### Visual adornments

- [NSVisualEffectView](nsvisualeffectview.md): A view that adds translucency and vibrancy effects to the views in your interface.
