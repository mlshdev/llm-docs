> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocationui/locationbutton](https://developer.apple.com/documentation/corelocationui/locationbutton)

# LocationButton

**Framework:** CoreLocationUI  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · watchOS 8.0+

A SwiftUI button that grants one-time location authorization.

## Declaration

```swift
@MainActor @preconcurrency struct LocationButton
```

<a id="overview"></a>

## Overview

`LocationButton` simplifies requesting one-time authorization to access location data. Add this button to your SwiftUI user interface in situations when users may want to grant temporary access to their location data each time they use a particular feature of your app.

![Screenshot of the location button with an icon that uses the filled arrow style and a label that shows Current Location.](https://developer.apple.com/images/com.apple.CoreLocationUI/locationbutton-1@2x.png)

The first time a user taps this button, [Core Location](../corelocation.md) asks the user to confirm that they’re comfortable using this UI element when they want to grant temporary access to their location data. If the user agrees, the app receives temporary [CLAuthorizationStatus.authorizedWhenInUse](../corelocation/clauthorizationstatus/authorizedwheninuse.md) authorization, like when the user chooses *Allow Once* in response to your app’s standard location authorization request. This temporary authorization expires when your app is no longer in use.

After the user agrees to using `LocationButton`, the button becomes approved to request future authorizations without displaying an additional alert to the user. The next time the user taps it, this button simply grants one-time authorization without requiring confirmation.

After you receive this temporary authorization, fetch the user’s location using the [Core Location](../corelocation.md) API and perform any app-specific tasks related to that location data. Connect the button to initiate the tasks you want to perform after getting authorization by specifying an action when you create the button. Keep in mind that this action activates every time the user taps this button, regardless of whether the app already has location authorization.

Create a `LocationButton` in SwiftUI like this:

```swift
LocationButton(.currentLocation) {
    // Fetch location with Core Location.
}
.symbolVariant(.fill)
.labelStyle(.titleAndIcon)
```

> **Important**

> When a user taps the button, it only provides one-time authorization to fetch location data — not the location data itself. For more details about fetching location data, see [Configuring your app to use location services](../corelocation/configuring-your-app-to-use-location-services.md).

Configure the button to display an icon, a label, or both using the [labelStyle(\_:)](https://developer.apple.com/documentation/swiftui/view/labelstyle%28_:%29) view modifier. If you include an icon, you can customize its appearance using the [symbolVariant(\_:)](https://developer.apple.com/documentation/swiftui/view/symbolvariant%28_:%29) modifier. For design guidance, see [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessing-user-data/).

## Topics

### Creating a location button

- [init(\_:action:)](locationbutton/init%28__action_%29.md): Creates a location button with the specified title and action.
- [LocationButton.Title](locationbutton/title.md): Constants that specify the text of a button title.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Location authorization

- [Sharing Your Location to Find a Park](sharing-your-location-to-find-a-park.md): Ask for location access using a customizable location button.
- [CLLocationButton](cllocationbutton.md): A button that grants one-time location authorization.
