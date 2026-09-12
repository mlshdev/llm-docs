> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontrollerformattingstyle](https://developer.apple.com/documentation/uikit/uitextformattingviewcontrollerformattingstyle)

# UITextFormattingViewControllerFormattingStyle

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

Type that defines formatting style presented in text formatting view.

## Declaration

```objectivec
@interface UITextFormattingViewControllerFormattingStyle : NSObject
```

## Topics

### Instance Properties

- [attributes](uitextformattingviewcontrollerformattingstyle/attributes.md): Attributes corresponding to this formatting style.
- [styleKey](uitextformattingviewcontrollerformattingstyle/stylekey.md): Formatting style key.
- [title](uitextformattingviewcontrollerformattingstyle/title.md): Style title displayed in UI.

### Instance Methods

- [initWithStyleKey:title:attributes:](uitextformattingviewcontrollerformattingstyle/initwithstylekey_title_attributes_.md)

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
- [UITextFormattingViewControllerFormattingDescriptor](uitextformattingviewcontrollerformattingdescriptor.md): Object that represents current text formatting state. This can apply to formatting state of some selected range of text or currently applicable input formatting.
