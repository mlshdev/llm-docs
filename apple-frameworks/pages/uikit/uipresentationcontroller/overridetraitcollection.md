> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/overridetraitcollection](https://developer.apple.com/documentation/uikit/uipresentationcontroller/overridetraitcollection)

# overrideTraitCollection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Interface traits for the presented view controller, to use in place of traits from the iOS environment.

> Use [traitOverrides](traitoverrides-629ka.md) instead.

## Declaration

```swift
@NSCopying var overrideTraitCollection: UITraitCollection? { get set }
```

## Mentioned In

- [Choosing a specific interface style for your iOS app](../choosing-a-specific-interface-style-for-your-ios-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to provide an interface trait collection for the presented view controller, overriding one or more values in the iOS trait environment.

Each value you place in the [overrideTraitCollection](overridetraitcollection.md) property overrides the corresponding value in the iOS trait environment. For example, the following code snippet shows how to override the display scale for the presented view controller, leaving other traits as they are provided by the system. Place such code, typically, in the implementation file for the presenting view controller:

```objc
presentedVC.presentationController.overrideTraitCollection = [UITraitCollection traitCollectionWithDisplayScale: 1.5];
[self presentViewController: presentedVC animated: NO completion: nil];
```

The *presenting* view controller is not affected by use of this property.

The default value of the [overrideTraitCollection](overridetraitcollection.md) property is `nil`, which results in the full iOS trait environment being used by the presented view controller.

# overrideTraitCollection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 17.0) · iPadOS 8.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Interface traits for the presented view controller, to use in place of traits from the iOS environment.

> Use [traitOverrides](traitoverrides-629ka.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UITraitCollection * overrideTraitCollection;
```

## Mentioned In

- [Choosing a specific interface style for your iOS app](../choosing-a-specific-interface-style-for-your-ios-app.md)

<a id="Discussion"></a>

## Discussion

Use this property to provide an interface trait collection for the presented view controller, overriding one or more values in the iOS trait environment.

Each value you place in the [overrideTraitCollection](overridetraitcollection.md) property overrides the corresponding value in the iOS trait environment. For example, the following code snippet shows how to override the display scale for the presented view controller, leaving other traits as they are provided by the system. Place such code, typically, in the implementation file for the presenting view controller:

```objc
presentedVC.presentationController.overrideTraitCollection = [UITraitCollection traitCollectionWithDisplayScale: 1.5];
[self presentViewController: presentedVC animated: NO completion: nil];
```

The *presenting* view controller is not affected by use of this property.

The default value of the [overrideTraitCollection](overridetraitcollection.md) property is `nil`, which results in the full iOS trait environment being used by the presented view controller.
