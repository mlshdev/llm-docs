> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontrollerformattingdescriptor](https://developer.apple.com/documentation/uikit/uitextformattingviewcontrollerformattingdescriptor)

# UITextFormattingViewControllerFormattingDescriptor

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Object that represents current text formatting state. This can apply to formatting state of some selected range of text or currently applicable input formatting.

## Declaration

```objectivec
@interface UITextFormattingViewControllerFormattingDescriptor : NSObject
```

## Topics

### Instance Properties

- [fonts](uitextformattingviewcontrollerformattingdescriptor/fonts.md)
- [formattingStyleKey](uitextformattingviewcontrollerformattingdescriptor/formattingstylekey.md)
- [highlights](uitextformattingviewcontrollerformattingdescriptor/highlights.md)
- [lineHeight](uitextformattingviewcontrollerformattingdescriptor/lineheight.md)
- [strikethroughPresent](uitextformattingviewcontrollerformattingdescriptor/strikethroughpresent.md)
- [textAlignments](uitextformattingviewcontrollerformattingdescriptor/textalignments.md)
- [textColors](uitextformattingviewcontrollerformattingdescriptor/textcolors.md)
- [textLists](uitextformattingviewcontrollerformattingdescriptor/textlists.md)
- [underlinePresent](uitextformattingviewcontrollerformattingdescriptor/underlinepresent.md)

### Instance Methods

- [init](uitextformattingviewcontrollerformattingdescriptor/init.md): Initializes formatting descriptor with default property values.
- [initWithAttributes:](uitextformattingviewcontrollerformattingdescriptor/initwithattributes_.md): Initializes formatting descriptor with attribute dictionary.
- [initWithString:range:](uitextformattingviewcontrollerformattingdescriptor/initwithstring_range_.md): Initializes formatting descriptor with a string and selected range of string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Classes

- [UITextFormattingViewControllerComponent](uitextformattingviewcontroller/component.md): Defines text formatting view component.
- [UITextFormattingViewControllerComponentGroup](uitextformattingviewcontroller/componentgroup.md): Defines grouping of text formatting components in view.
- [UITextFormattingViewControllerConfiguration](uitextformattingviewcontroller/configuration-swift.class.md): Text formatting view controller configuration object.
- [UITextFormattingViewControllerChangeValue](uitextformattingviewcontrollerchangevalue.md): Describes text formatting change that is a result of user action. Contains type of change, any associated value that may be applicable to that change.
- [UITextFormattingViewControllerFormattingStyle](uitextformattingviewcontrollerformattingstyle.md): Type that defines formatting style presented in text formatting view.
