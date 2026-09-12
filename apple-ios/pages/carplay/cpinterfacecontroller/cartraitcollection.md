> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinterfacecontroller/cartraitcollection](https://developer.apple.com/documentation/carplay/cpinterfacecontroller/cartraitcollection)

# carTraitCollection (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The trait collection of the vehicle’s primary screen.

## Declaration

```swift
var carTraitCollection: UITraitCollection { get }
```

<a id="Discussion"></a>

## Discussion

Use this trait collection to derive metrics, such as display scale, for your CarPlay templates. For example, images you display in a [CPListTemplate](../cplisttemplate.md) can use this trait collection’s display scale rather than the scale of the user’s iPhone screen.

# carTraitCollection (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The trait collection of the vehicle’s primary screen.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UITraitCollection * carTraitCollection;
```

<a id="Discussion"></a>

## Discussion

Use this trait collection to derive metrics, such as display scale, for your CarPlay templates. For example, images you display in a [CPListTemplate](../cplisttemplate.md) can use this trait collection’s display scale rather than the scale of the user’s iPhone screen.
