> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaylaterview](https://developer.apple.com/documentation/passkit/pkpaylaterview)

# PKPayLaterView (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

A view that displays the Apple Pay Later visual merchandising widget.

> Apple Pay Later is deprecated.

## Declaration

```swift
class PKPayLaterView
```

<a id="overview"></a>

## Overview

Use this view to display a widget that allows people to learn more about the Apple Pay Later feature.

## Topics

### Creating the widget

- [init(amount:currency:)](pkpaylaterview/init%28amount_currency_%29.md): Deprecated. Creates a new Apple Pay Later visual merchandising widget view with the shopping cart amount and currency you specify.

### Accessing information about the transaction

- [amount](pkpaylaterview/amount-f3gs.md): Deprecated. The decimal value that represents the amount of the customer’s shopping cart or item pricing.
- [currency](pkpaylaterview/currency.md): Deprecated. The ISO-4217 currency code for the country or region of the merchant’s principle place of business.

### Responding to changes in the view’s height

- [delegate](pkpaylaterview/delegate.md): Deprecated. A delegate object that receives messages about the changes to the Apple Pay Later view.
- [PKPayLaterViewDelegate](pkpaylaterviewdelegate.md): Deprecated. Methods the framework calls when the Apple Pay Later view’s size changes.

### Setting the user action

- [action](pkpaylaterview/action.md): Deprecated. The information style that the Apple Pay Later view presents.
- [PKPayLaterAction](pkpaylateraction.md): Deprecated. Values you use to set the Apple Pay Later action.

### Styling the view

- [displayStyle](pkpaylaterview/displaystyle.md): Deprecated. The style to use when presenting the Apple Pay Later visual merchandising widget view.
- [PKPayLaterDisplayStyle](pkpaylaterdisplaystyle.md): Deprecated. Values you use to style an Apple Pay Later visual merchandising widget.

### Validating transactions

- [PKPayLater](pkpaylater.md): Deprecated. Functions for validating information the framework displays in an Apple Pay Later visual merchandising widget.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Deprecated

- [PayLaterView](paylaterview.md): Deprecated. A view that displays the Apple Pay Later visual merchandising widget.

# PKPayLaterView (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · visionOS 1.0+

A view that displays the Apple Pay Later visual merchandising widget.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@interface PKPayLaterView : UIView
```

<a id="overview"></a>

## Overview

Use this view to display a widget that allows people to learn more about the Apple Pay Later feature.

## Topics

### Creating the widget

- [initWithAmount:currencyCode:](pkpaylaterview/initwithamount_currencycode_.md): Deprecated. Creates a new Apple Pay Later visual merchandising widget view with the amount and currency code you specify.

### Accessing information about the transaction

- [amount](pkpaylaterview/amount-1jzg2.md): Deprecated. The decimal value that represents the amount of the customer’s shopping cart or item pricing.
- [currencyCode](pkpaylaterview/currencycode.md): Deprecated. A string that represents the ISO-4217 currency code for the country or region of the merchant’s principle place of business.

### Responding to changes in the view’s height

- [delegate](pkpaylaterview/delegate.md): Deprecated. A delegate object that receives messages about the changes to the Apple Pay Later view.
- [PKPayLaterViewDelegate](pkpaylaterviewdelegate.md): Deprecated. Methods the framework calls when the Apple Pay Later view’s size changes.

### Setting the user action

- [action](pkpaylaterview/action.md): Deprecated. The information style that the Apple Pay Later view presents.
- [PKPayLaterAction](pkpaylateraction.md): Deprecated. Values you use to set the Apple Pay Later action.

### Styling the view

- [displayStyle](pkpaylaterview/displaystyle.md): Deprecated. The style to use when presenting the Apple Pay Later visual merchandising widget view.
- [PKPayLaterDisplayStyle](pkpaylaterdisplaystyle.md): Deprecated. Values you use to style an Apple Pay Later visual merchandising widget.

### Validating transactions

- [PKPayLaterValidateAmount](pkpaylatervalidateamount.md): Deprecated. Checks if the framework can display Apple Pay Later visual merchandising widget information for the given amount and currency.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)
