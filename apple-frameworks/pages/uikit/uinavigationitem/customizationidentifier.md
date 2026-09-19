> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uinavigationitem/customizationidentifier

# customizationIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A globally unique string that enables user customization of the navigation bar layout.

## Declaration

```swift
var customizationIdentifier: String? { get set }
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Set a customization identifier to support a personalized navigation bar layout experience. When you assign a string to this property, UIKit allows people to customize the layout of the items in the navigation bar by choosing the customize option in the overflow menu. UIKit automatically saves and restores this custom layout across app launches.

# customizationIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A globally unique string that enables user customization of the navigation bar layout.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * customizationIdentifier;
```

## Mentioned In

- [Building a desktop-class iPad app](../building-a-desktop-class-ipad-app.md)

<a id="Discussion"></a>

## Discussion

Set a customization identifier to support a personalized navigation bar layout experience. When you assign a string to this property, UIKit allows people to customize the layout of the items in the navigation bar by choosing the customize option in the overflow menu. UIKit automatically saves and restores this custom layout across app launches.
