> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview](https://developer.apple.com/documentation/appkit/nsimageview)

# NSImageView (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A display of image data in a frame.

## Declaration

```swift
class NSImageView
```

<a id="overview"></a>

## Overview

Image views can be static or editable. A static image view only displays the image that you specify. An editable image view object lets the user change the displayed image. You can also configure an image view to allow copying, pasting, deleting, and dragging of the image.

> **Note**

>  An image view calls its action method only when the user drags an image into the image view’s bounds, and the image view must be editable to receive dragged images. If you want to display an image and respond to clicks in the image, use an [NSButton](https://developer.apple.com/library/archive/technotes/tn2219/_index.html#//apple_ref/doc/uid/DTS10004624-CH1-SUBSECTION12) object instead.

## Topics

### Creating the view

- [init(image:)](nsimageview/init%28image_%29.md): Creates a non-editable image view containing the provided image. The image is scaled proportionally down to fit the view, and is centered within the view.

### Configuring the cell

- [NSImageCell](nsimagecell.md): An `NSImageCell` object displays a single image (encapsulated in an [NSImage](nsimage.md) object) in a frame. This class provides methods for choosing the frame and for aligning and scaling the image to fit the frame.

### Specifying the image

- [symbolConfiguration](nsimageview/symbolconfiguration.md): Specifies a combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [image](nsimageview/image.md): The image displayed by the image view.

### Specifying the visual characteristics

- [imageFrameStyle](nsimageview/imageframestyle.md): The style of frame that appears around the image.
- [imageAlignment](nsimageview/imagealignment.md): The alignment of the cell’s image inside the image view.
- [imageScaling](nsimageview/imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
- [animates](nsimageview/animates.md): A Boolean value indicating whether the image view automatically plays animated images.
- [contentTintColor](nsimageview/contenttintcolor.md): A tint color to be used when rendering template image content.

### Specifying the dynamic range

- [imageDynamicRange](nsimageview/imagedynamicrange.md): The resolved dynamic range of the fully resolved image content.
- [preferredImageDynamicRange](nsimageview/preferredimagedynamicrange.md): The preferred dynamic range when displaying an image in the receiving image view.
- [defaultPreferredImageDynamicRange](nsimageview/defaultpreferredimagedynamicrange.md): The default preferred image dynamic range.

### Responding to user events

- [isEditable](nsimageview/iseditable.md): A Boolean value indicating whether the user can drag a new image into the image view.
- [allowsCutCopyPaste](nsimageview/allowscutcopypaste.md): A Boolean value indicating whether the image view lets the user cut, copy, and paste the image contents.

### Configuring symbol effects

- [addSymbolEffect(\_:options:animated:)](nsimageview/addsymboleffect%28__options_animated_%29-4kete.md): Adds an indefinite symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](nsimageview/addsymboleffect%28__options_animated_%29-4p7p7.md): Adds a discrete symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](nsimageview/addsymboleffect%28__options_animated_%29-66ckm.md): Adds a discrete, indefinite symbol effect to the image view with the specified options and animation.
- [setSymbolImage(\_:contentTransition:options:)](nsimageview/setsymbolimage%28__contenttransition_options_%29.md): Sets a symbol image using the specified content-transition effect and options.
- [removeSymbolEffect(ofType:options:animated:)](nsimageview/removesymboleffect%28oftype_options_animated_%29-8bszd.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](nsimageview/removesymboleffect%28oftype_options_animated_%29-4c6vq.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](nsimageview/removesymboleffect%28oftype_options_animated_%29-8tk6g.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](nsimageview/removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the image view, using the specified options and animation setting.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityImage](nsaccessibilityimage.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](nsdraggingdestination.md)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.

# NSImageView (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A display of image data in a frame.

## Declaration

```objectivec
@interface NSImageView : NSControl
```

<a id="overview"></a>

## Overview

Image views can be static or editable. A static image view only displays the image that you specify. An editable image view object lets the user change the displayed image. You can also configure an image view to allow copying, pasting, deleting, and dragging of the image.

> **Note**

>  An image view calls its action method only when the user drags an image into the image view’s bounds, and the image view must be editable to receive dragged images. If you want to display an image and respond to clicks in the image, use an [NSButton](https://developer.apple.com/library/archive/technotes/tn2219/_index.html#//apple_ref/doc/uid/DTS10004624-CH1-SUBSECTION12) object instead.

## Topics

### Creating the view

- [imageViewWithImage:](nsimageview/init%28image_%29.md): Creates a non-editable image view containing the provided image. The image is scaled proportionally down to fit the view, and is centered within the view.

### Configuring the cell

- [NSImageCell](nsimagecell.md): An `NSImageCell` object displays a single image (encapsulated in an [NSImage](nsimage.md) object) in a frame. This class provides methods for choosing the frame and for aligning and scaling the image to fit the frame.

### Specifying the image

- [symbolConfiguration](nsimageview/symbolconfiguration.md): Specifies a combination of point size, weight, and scale to use when sizing and displaying symbol images.
- [image](nsimageview/image.md): The image displayed by the image view.

### Specifying the visual characteristics

- [imageFrameStyle](nsimageview/imageframestyle.md): The style of frame that appears around the image.
- [imageAlignment](nsimageview/imagealignment.md): The alignment of the cell’s image inside the image view.
- [imageScaling](nsimageview/imagescaling.md): The scaling mode applied to make the cell’s image fit the frame of the image view.
- [animates](nsimageview/animates.md): A Boolean value indicating whether the image view automatically plays animated images.
- [contentTintColor](nsimageview/contenttintcolor.md): A tint color to be used when rendering template image content.

### Specifying the dynamic range

- [imageDynamicRange](nsimageview/imagedynamicrange.md): The resolved dynamic range of the fully resolved image content.
- [preferredImageDynamicRange](nsimageview/preferredimagedynamicrange.md): The preferred dynamic range when displaying an image in the receiving image view.
- [defaultPreferredImageDynamicRange](nsimageview/defaultpreferredimagedynamicrange.md): The default preferred image dynamic range.

### Responding to user events

- [editable](nsimageview/iseditable.md): A Boolean value indicating whether the user can drag a new image into the image view.
- [allowsCutCopyPaste](nsimageview/allowscutcopypaste.md): A Boolean value indicating whether the image view lets the user cut, copy, and paste the image contents.

### Configuring symbol effects

- [addSymbolEffect:](nsimageview/addsymboleffect_.md): Adds a symbol effect to the image view with default options and animation.
- [addSymbolEffect:options:](nsimageview/addsymboleffect_options_.md): Adds a symbol effect to the image view with the specified options and default animation.
- [addSymbolEffect:options:animated:](nsimageview/addsymboleffect_options_animated_.md): Adds a symbol effect to the image view with the specified options and animation.
- [setSymbolImage:withContentTransition:](nsimageview/setsymbolimage_withcontenttransition_.md): Sets a symbol image using the specified content-transition effect.
- [setSymbolImage:withContentTransition:options:](nsimageview/setsymbolimage_withcontenttransition_options_.md): Sets a symbol image using the specified content-transition effect and options.
- [removeSymbolEffectOfType:](nsimageview/removesymboleffectoftype_.md): Removes the symbol effect that matches the specified effect type.
- [removeSymbolEffectOfType:options:](nsimageview/removesymboleffectoftype_options_.md): Removes the symbol effect that matches the specified effect type, using the specified options.
- [removeSymbolEffectOfType:options:animated:](nsimageview/removesymboleffectoftype_options_animated_.md): Removes the symbol effect that matches the specified effect type, using the specified options and animation setting.
- [removeAllSymbolEffects](nsimageview/removeallsymboleffects.md): Removes all symbol effects from the image view.
- [removeAllSymbolEffectsWithOptions:](nsimageview/removeallsymboleffectswithoptions_.md): Removes all symbol effects from the image view, using the specified options.
- [removeAllSymbolEffectsWithOptions:animated:](nsimageview/removeallsymboleffectswithoptions_animated_.md): Removes all symbol effects from the image view, using the specified options and animation setting.

## Relationships

### Inherits From

- [NSControl](nscontrol.md)

### Conforms To

- [NSAccessibilityImage](nsaccessibilityimage.md)
- [NSMenuItemValidation](nsmenuitemvalidation.md)

## See Also

### Controls

- [Responding to control-based events using target-action](https://developer.apple.com/documentation/uikit/responding-to-control-based-events-using-target-action): Handle user input by connecting buttons, sliders, and other controls to your app’s code using the target-action design pattern.
- [NSButton](nsbutton.md): A control that defines an area on the screen that a user clicks to trigger an action.
- [NSColorWell](nscolorwell.md): A control that displays a color value and lets the user change that color value.
- [Combo Box](combo-box.md): Display a list of values in a pop-up menu that lets the user select a value or type in a custom value.
- [NSComboButton](nscombobutton.md): A button with a pull-down menu and a default action.
- [Date Picker](date-picker.md): Display a calendar date and provide controls for editing the date value.
- [NSLevelIndicator](nslevelindicator.md): A visual representation of a level or quantity, using discrete values.
- [Path Control](path-control.md): A display of a file system path or virtual path information.
- [NSPopUpButton](nspopupbutton.md): A control for selecting an item from a list.
- [NSProgressIndicator](nsprogressindicator.md): An interface that provides visual feedback to the user about the status of an ongoing task.
- [NSRuleEditor](nsruleeditor.md): An interface for configuring a rule-based list of options.
- [NSPredicateEditor](nspredicateeditor.md): A defined set of rules that allows the editing of predicate objects.
- [Search Field](search-field.md): Provide a text field that is optimized for text-based search interfaces.
- [NSSegmentedControl](nssegmentedcontrol.md): Display one or more buttons in a single horizontal group.
- [Slider](slider.md): Display a range of values from which the user selects a single value.
