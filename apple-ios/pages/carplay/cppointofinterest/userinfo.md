> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinterest/userinfo](https://developer.apple.com/documentation/carplay/cppointofinterest/userinfo)

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An opaque value for the point of interest.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to attach a value that provides additional context for the point of interest. For example, you can attach a model object and reference it in your delegate’s [pointOfInterestTemplate(\_:didSelectPointOfInterest:)](../cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didselectpointofinterest_%29.md) method when the user selects the point of interest.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An opaque value for the point of interest.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="Discussion"></a>

## Discussion

Use this property to attach a value that provides additional context for the point of interest. For example, you can attach a model object and reference it in your delegate’s [pointOfInterestTemplate:didSelectPointOfInterest:](../cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didselectpointofinterest_%29.md) method when the user selects the point of interest.
