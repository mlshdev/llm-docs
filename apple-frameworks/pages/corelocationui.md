> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocationui](https://developer.apple.com/documentation/corelocationui)

# CoreLocationUI (Swift)

**Framework:** CoreLocationUI  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 10.0+

Streamline access to users’ location data through a standard, secure UI.

<a id="Overview"></a>

## Overview

The CoreLocationUI framework contains a standardized UI that interacts securely with [Core Location](corelocation.md) to request authorization to access location data.

CoreLocationUI provides [LocationButton](corelocationui/locationbutton.md) for SwiftUI apps and [CLLocationButton](corelocationui/cllocationbutton.md) for UIKit apps. Add these buttons to your UI when you want someone to grant one-time authorization for your app to fetch their location. The button’s style is consistent with the standard Core Location design language, giving users a sense of familiarity and trust when they interact with it.

> **Note**

> The location button ignores user input on Mac apps built with Mac Catalyst, and on compatible iPad and iPhone apps running in visionOS.

## Topics

### Location authorization

- [Sharing Your Location to Find a Park](corelocationui/sharing-your-location-to-find-a-park.md): Ask for location access using a customizable location button.
- [LocationButton](corelocationui/locationbutton.md): A SwiftUI button that grants one-time location authorization.
- [CLLocationButton](corelocationui/cllocationbutton.md): A button that grants one-time location authorization.

### Button customization

- [CLLocationButtonIcon](corelocationui/cllocationbuttonicon.md): Constants that specify styles for the location arrow icon on the button.
- [CLLocationButtonLabel](corelocationui/cllocationbuttonlabel.md): Constants that specify the text of the button label.

# CoreLocationUI (Objective-C)

**Framework:** CoreLocationUI  
**Kind:** Framework  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 10.0+

Streamline access to users’ location data through a standard, secure UI.

<a id="Overview"></a>

## Overview

The CoreLocationUI framework contains a standardized UI that interacts securely with [Core Location](corelocation.md) to request authorization to access location data.

CoreLocationUI provides [LocationButton](corelocationui/locationbutton.md) for SwiftUI apps and [CLLocationButton](corelocationui/cllocationbutton.md) for UIKit apps. Add these buttons to your UI when you want someone to grant one-time authorization for your app to fetch their location. The button’s style is consistent with the standard Core Location design language, giving users a sense of familiarity and trust when they interact with it.

> **Note**

> The location button ignores user input on Mac apps built with Mac Catalyst, and on compatible iPad and iPhone apps running in visionOS.

## Topics

### Location authorization

- [Sharing Your Location to Find a Park](corelocationui/sharing-your-location-to-find-a-park.md): Ask for location access using a customizable location button.
- [CLLocationButton](corelocationui/cllocationbutton.md): A button that grants one-time location authorization.

### Button customization

- [CLLocationButtonIcon](corelocationui/cllocationbuttonicon.md): Constants that specify styles for the location arrow icon on the button.
- [CLLocationButtonLabel](corelocationui/cllocationbuttonlabel.md): Constants that specify the text of the button label.

### Framework version

- [CoreLocationUIVersionNumber](corelocationui/corelocationuiversionnumber.md): The project version number for CoreLocationUI.
- [CoreLocationUIVersionString](corelocationui/corelocationuiversionstring.md): The project version string for CoreLocationUI.
