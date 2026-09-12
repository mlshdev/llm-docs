> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingviewcontroller](https://developer.apple.com/documentation/uikit/uitextformattingviewcontroller)

# UITextFormattingViewController (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 26.0+

A view controller that manages the interface for common text formatting options.

## Declaration

```swift
@MainActor class UITextFormattingViewController
```

## Topics

### Classes

- [UITextFormattingViewController.Component](uitextformattingviewcontroller/component.md): Defines text formatting view component.
- [UITextFormattingViewController.ComponentGroup](uitextformattingviewcontroller/componentgroup.md): Defines grouping of text formatting components in view.
- [UITextFormattingViewController.Configuration](uitextformattingviewcontroller/configuration-swift.class.md): Text formatting view controller configuration object.

### Global variables

- [fontAttributes](uitextformattingviewcontroller/componentkey/fontattributes.md)
- [fontPicker](uitextformattingviewcontroller/componentkey/fontpicker.md)
- [fontPointSize](uitextformattingviewcontroller/componentkey/fontpointsize.md)
- [fontSize](uitextformattingviewcontroller/componentkey/fontsize.md)
- [formattingStyles](uitextformattingviewcontroller/componentkey/formattingstyles.md)
- [highlight](uitextformattingviewcontroller/componentkey/highlight.md)
- [highlightPicker](uitextformattingviewcontroller/componentkey/highlightpicker.md)
- [lineHeight](uitextformattingviewcontroller/componentkey/lineheight.md)
- [listStyles](uitextformattingviewcontroller/componentkey/liststyles.md)
- [textAlignment](uitextformattingviewcontroller/componentkey/textalignment.md)
- [textAlignmentAndJustification](uitextformattingviewcontroller/componentkey/textalignmentandjustification.md)
- [textColor](uitextformattingviewcontroller/componentkey/textcolor.md)
- [textIndentation](uitextformattingviewcontroller/componentkey/textindentation.md)
- [blue](uitextformattingviewcontroller/highlight/blue.md)
- [default](uitextformattingviewcontroller/highlight/default.md)
- [mint](uitextformattingviewcontroller/highlight/mint.md)
- [orange](uitextformattingviewcontroller/highlight/orange.md)
- [pink](uitextformattingviewcontroller/highlight/pink.md)
- [purple](uitextformattingviewcontroller/highlight/purple.md)
- [center](uitextformattingviewcontroller/textalignment/center.md)
- [justified](uitextformattingviewcontroller/textalignment/justified.md)
- [left](uitextformattingviewcontroller/textalignment/left.md)
- [natural](uitextformattingviewcontroller/textalignment/natural.md)
- [right](uitextformattingviewcontroller/textalignment/right.md)
- [decimal](uitextformattingviewcontroller/textlist/decimal.md)
- [disc](uitextformattingviewcontroller/textlist/disc.md)
- [hyphen](uitextformattingviewcontroller/textlist/hyphen.md)
- [other](uitextformattingviewcontroller/textlist/other.md)

### Protocols

- [UITextFormattingViewController.Delegate](uitextformattingviewcontroller/delegate-swift.protocol.md)

### Structures

- [UITextFormattingViewController.FormattingDescriptor](uitextformattingviewcontroller/formattingdescriptor-swift.struct.md)
- [UITextFormattingViewController.FormattingStyle](uitextformattingviewcontroller/formattingstyle.md)

### Initializers

- [init()](uitextformattingviewcontroller/init%28%29.md)
- [init(configuration:)](uitextformattingviewcontroller/init%28configuration_%29.md)

### Instance Properties

- [configuration](uitextformattingviewcontroller/configuration-swift.property.md): Current text formatting configuration object.
- [delegate](uitextformattingviewcontroller/delegate-52zfw.md)
- [formattingDescriptor](uitextformattingviewcontroller/formattingdescriptor-9sir9.md)

### Enumerations

- [UITextFormattingViewController.ChangeValue](uitextformattingviewcontroller/changevalue.md)

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIContentContainer](uicontentcontainer.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UIStateRestoring](uistaterestoring.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

# UITextFormattingViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

A view controller that manages the interface for common text formatting options.

## Declaration

```objectivec
@interface UITextFormattingViewController : UIViewController
```

## Topics

### Classes

- [UITextFormattingViewControllerComponent](uitextformattingviewcontroller/component.md): Defines text formatting view component.
- [UITextFormattingViewControllerComponentGroup](uitextformattingviewcontroller/componentgroup.md): Defines grouping of text formatting components in view.
- [UITextFormattingViewControllerConfiguration](uitextformattingviewcontroller/configuration-swift.class.md): Text formatting view controller configuration object.
- [UITextFormattingViewControllerChangeValue](uitextformattingviewcontrollerchangevalue.md): Describes text formatting change that is a result of user action. Contains type of change, any associated value that may be applicable to that change.
- [UITextFormattingViewControllerFormattingDescriptor](uitextformattingviewcontrollerformattingdescriptor.md): Object that represents current text formatting state. This can apply to formatting state of some selected range of text or currently applicable input formatting.
- [UITextFormattingViewControllerFormattingStyle](uitextformattingviewcontrollerformattingstyle.md): Type that defines formatting style presented in text formatting view.

### Global variables

- [UITextFormattingViewControllerFontAttributesComponentKey](uitextformattingviewcontroller/componentkey/fontattributes.md)
- [UITextFormattingViewControllerFontPickerComponentKey](uitextformattingviewcontroller/componentkey/fontpicker.md)
- [UITextFormattingViewControllerFontPointSizeComponentKey](uitextformattingviewcontroller/componentkey/fontpointsize.md)
- [UITextFormattingViewControllerFontSizeComponentKey](uitextformattingviewcontroller/componentkey/fontsize.md)
- [UITextFormattingViewControllerFormattingStylesComponentKey](uitextformattingviewcontroller/componentkey/formattingstyles.md)
- [UITextFormattingViewControllerHighlightComponentKey](uitextformattingviewcontroller/componentkey/highlight.md)
- [UITextFormattingViewControllerHighlightPickerComponentKey](uitextformattingviewcontroller/componentkey/highlightpicker.md)
- [UITextFormattingViewControllerLineHeightComponentKey](uitextformattingviewcontroller/componentkey/lineheight.md)
- [UITextFormattingViewControllerListStylesComponentKey](uitextformattingviewcontroller/componentkey/liststyles.md)
- [UITextFormattingViewControllerTextAlignmentComponentKey](uitextformattingviewcontroller/componentkey/textalignment.md)
- [UITextFormattingViewControllerTextAlignmentAndJustificationComponentKey](uitextformattingviewcontroller/componentkey/textalignmentandjustification.md)
- [UITextFormattingViewControllerTextColorComponentKey](uitextformattingviewcontroller/componentkey/textcolor.md)
- [UITextFormattingViewControllerTextIndentationComponentKey](uitextformattingviewcontroller/componentkey/textindentation.md)
- [UITextFormattingViewControllerHighlightBlue](uitextformattingviewcontroller/highlight/blue.md)
- [UITextFormattingViewControllerHighlightDefault](uitextformattingviewcontroller/highlight/default.md)
- [UITextFormattingViewControllerHighlightMint](uitextformattingviewcontroller/highlight/mint.md)
- [UITextFormattingViewControllerHighlightOrange](uitextformattingviewcontroller/highlight/orange.md)
- [UITextFormattingViewControllerHighlightPink](uitextformattingviewcontroller/highlight/pink.md)
- [UITextFormattingViewControllerHighlightPurple](uitextformattingviewcontroller/highlight/purple.md)
- [UITextFormattingViewControllerTextAlignmentCenter](uitextformattingviewcontroller/textalignment/center.md)
- [UITextFormattingViewControllerTextAlignmentJustified](uitextformattingviewcontroller/textalignment/justified.md)
- [UITextFormattingViewControllerTextAlignmentLeft](uitextformattingviewcontroller/textalignment/left.md)
- [UITextFormattingViewControllerTextAlignmentNatural](uitextformattingviewcontroller/textalignment/natural.md)
- [UITextFormattingViewControllerTextAlignmentRight](uitextformattingviewcontroller/textalignment/right.md)
- [UITextFormattingViewControllerTextListDecimal](uitextformattingviewcontroller/textlist/decimal.md)
- [UITextFormattingViewControllerTextListDisc](uitextformattingviewcontroller/textlist/disc.md)
- [UITextFormattingViewControllerTextListHyphen](uitextformattingviewcontroller/textlist/hyphen.md)
- [UITextFormattingViewControllerTextListOther](uitextformattingviewcontroller/textlist/other.md)

### Protocols

- [UITextFormattingViewControllerDelegate](uitextformattingviewcontrollerdelegate.md)

### Instance Properties

- [configuration](uitextformattingviewcontroller/configuration-swift.property.md): Current text formatting configuration object.
- [delegate](uitextformattingviewcontroller/delegate-1mkbi.md)
- [formattingDescriptor](uitextformattingviewcontroller/formattingdescriptor-7nlvc.md)

### Instance Methods

- [init](uitextformattingviewcontroller/init%28%29.md)
- [initWithConfiguration:](uitextformattingviewcontroller/init%28configuration_%29.md)

## Relationships

### Inherits From

- [UIViewController](uiviewcontroller.md)
