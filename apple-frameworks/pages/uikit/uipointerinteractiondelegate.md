> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteractiondelegate](https://developer.apple.com/documentation/uikit/uipointerinteractiondelegate)

# UIPointerInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An interface for handling pointer movements within the interaction’s view.

## Declaration

```swift
@MainActor protocol UIPointerInteractionDelegate : NSObjectProtocol
```

## Topics

### Defining pointer styles for regions

- [pointerInteraction(\_:regionFor:defaultRegion:)](uipointerinteractiondelegate/pointerinteraction%28__regionfor_defaultregion_%29.md): Asks the delegate for a region as the pointer moves within the interaction’s view.
- [pointerInteraction(\_:styleFor:)](uipointerinteractiondelegate/pointerinteraction%28__stylefor_%29.md): Asks the delegate for a pointer style after an interaction receives a new region.

### Handling animations for pointer regions

- [pointerInteraction(\_:willEnter:animator:)](uipointerinteractiondelegate/pointerinteraction%28__willenter_animator_%29.md): Informs the delegate when the pointer enters a given region.
- [pointerInteraction(\_:willExit:animator:)](uipointerinteractiondelegate/pointerinteraction%28__willexit_animator_%29.md): Informs the delegate when the pointer exits a given region.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [UIPointerInteraction](uipointerinteraction.md): An interaction that enables support for effects on a view or customizes the pointer’s appearance within a region of an app.
- [Integrating pointer interactions into your iPad app](integrating-pointer-interactions-into-your-ipad-app.md): Support touch interactions in your iPad app by adding pointer interactions to your views.
- [Enhancing your iPad app with pointer interactions](enhancing-your-ipad-app-with-pointer-interactions.md): Provide a great user experience with pointing devices, by incorporating pointer content effects and shape customizations.

# UIPointerInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An interface for handling pointer movements within the interaction’s view.

## Declaration

```objectivec
@protocol UIPointerInteractionDelegate <NSObject>
```

## Topics

### Defining pointer styles for regions

- [pointerInteraction:regionForRequest:defaultRegion:](uipointerinteractiondelegate/pointerinteraction%28__regionfor_defaultregion_%29.md): Asks the delegate for a region as the pointer moves within the interaction’s view.
- [pointerInteraction:styleForRegion:](uipointerinteractiondelegate/pointerinteraction%28__stylefor_%29.md): Asks the delegate for a pointer style after an interaction receives a new region.

### Handling animations for pointer regions

- [pointerInteraction:willEnterRegion:animator:](uipointerinteractiondelegate/pointerinteraction%28__willenter_animator_%29.md): Informs the delegate when the pointer enters a given region.
- [pointerInteraction:willExitRegion:animator:](uipointerinteractiondelegate/pointerinteraction%28__willexit_animator_%29.md): Informs the delegate when the pointer exits a given region.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [UIPointerInteraction](uipointerinteraction.md): An interaction that enables support for effects on a view or customizes the pointer’s appearance within a region of an app.
- [Integrating pointer interactions into your iPad app](integrating-pointer-interactions-into-your-ipad-app.md): Support touch interactions in your iPad app by adding pointer interactions to your views.
- [Enhancing your iPad app with pointer interactions](enhancing-your-ipad-app-with-pointer-interactions.md): Provide a great user experience with pointing devices, by incorporating pointer content effects and shape customizations.
