> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationbarappearance](https://developer.apple.com/documentation/uikit/uinavigationbarappearance)

# UINavigationBarAppearance (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of a navigation bar.

## Declaration

```swift
@MainActor class UINavigationBarAppearance
```

<a id="overview"></a>

## Overview

After creating a [UINavigationBarAppearance](uinavigationbarappearance.md) object, use the methods and properties of this class to specify the appearance you want for items in the navigation bar. Use the inherited properties from [UIBarAppearance](uibarappearance.md) to configure the background and shadow attributes of the navigation bar itself.

## Topics

### Configuring the title

- [titleTextAttributes](uinavigationbarappearance/titletextattributes.md): String attributes to apply to the text of a standard-size title.
- [largeTitleTextAttributes](uinavigationbarappearance/largetitletextattributes.md): String attributes to apply to the text of a large-size title.
- [titlePositionAdjustment](uinavigationbarappearance/titlepositionadjustment.md): The distance, in points, by which to offset the title horizontally and vertically.

### Configuring the subtitle

- [subtitleTextAttributes](uinavigationbarappearance/subtitletextattributes.md): The default text attributes to apply to the subtitle rendered in the navigation bar.
- [largeSubtitleTextAttributes](uinavigationbarappearance/largesubtitletextattributes.md): The default text attributes to apply to the subtitle when it’s rendered under the large title.

### Configuring bar button items

- [buttonAppearance](uinavigationbarappearance/buttonappearance.md): The appearance attributes for plain bar button items in the navigation bar.

### Configuring the Back button

- [backButtonAppearance](uinavigationbarappearance/backbuttonappearance.md): The appearance attributes for the back button.
- [backIndicatorImage](uinavigationbarappearance/backindicatorimage.md): The image to display on the leading edge of the back button.
- [backIndicatorTransitionMaskImage](uinavigationbarappearance/backindicatortransitionmaskimage.md): The image for masking content flowing under the back indicator image during push and pop transitions.
- [setBackIndicatorImage(\_:transitionMaskImage:)](uinavigationbarappearance/setbackindicatorimage%28__transitionmaskimage_%29.md): Sets the back button indicator image and its transition mask.

### Configuring the Done button

- [doneButtonAppearance](uinavigationbarappearance/donebuttonappearance.md): Deprecated. The appearance attributes for Done buttons.

### Instance Properties

- [prominentButtonAppearance](uinavigationbarappearance/prominentbuttonappearance.md): The appearance attributes for Prominent buttons.

## Relationships

### Inherits From

- [UIBarAppearance](uibarappearance.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UINavigationBarAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object for customizing the appearance of a navigation bar.

## Declaration

```objectivec
@interface UINavigationBarAppearance : UIBarAppearance
```

<a id="overview"></a>

## Overview

After creating a [UINavigationBarAppearance](uinavigationbarappearance.md) object, use the methods and properties of this class to specify the appearance you want for items in the navigation bar. Use the inherited properties from [UIBarAppearance](uibarappearance.md) to configure the background and shadow attributes of the navigation bar itself.

## Topics

### Configuring the title

- [titleTextAttributes](uinavigationbarappearance/titletextattributes.md): String attributes to apply to the text of a standard-size title.
- [largeTitleTextAttributes](uinavigationbarappearance/largetitletextattributes.md): String attributes to apply to the text of a large-size title.
- [titlePositionAdjustment](uinavigationbarappearance/titlepositionadjustment.md): The distance, in points, by which to offset the title horizontally and vertically.

### Configuring the subtitle

- [subtitleTextAttributes](uinavigationbarappearance/subtitletextattributes.md): The default text attributes to apply to the subtitle rendered in the navigation bar.
- [largeSubtitleTextAttributes](uinavigationbarappearance/largesubtitletextattributes.md): The default text attributes to apply to the subtitle when it’s rendered under the large title.

### Configuring bar button items

- [buttonAppearance](uinavigationbarappearance/buttonappearance.md): The appearance attributes for plain bar button items in the navigation bar.

### Configuring the Back button

- [backButtonAppearance](uinavigationbarappearance/backbuttonappearance.md): The appearance attributes for the back button.
- [backIndicatorImage](uinavigationbarappearance/backindicatorimage.md): The image to display on the leading edge of the back button.
- [backIndicatorTransitionMaskImage](uinavigationbarappearance/backindicatortransitionmaskimage.md): The image for masking content flowing under the back indicator image during push and pop transitions.
- [setBackIndicatorImage:transitionMaskImage:](uinavigationbarappearance/setbackindicatorimage%28__transitionmaskimage_%29.md): Sets the back button indicator image and its transition mask.

### Configuring the Done button

- [doneButtonAppearance](uinavigationbarappearance/donebuttonappearance.md): Deprecated. The appearance attributes for Done buttons.

### Instance Properties

- [prominentButtonAppearance](uinavigationbarappearance/prominentbuttonappearance.md): The appearance attributes for Prominent buttons.

## Relationships

### Inherits From

- [UIBarAppearance](uibarappearance.md)
