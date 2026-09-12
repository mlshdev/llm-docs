> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplatedelegate/pointofinteresttemplate(_:didselectpointofinterest:)](https://developer.apple.com/documentation/carplay/cppointofinteresttemplatedelegate/pointofinteresttemplate(_:didselectpointofinterest:))

# pointOfInterestTemplate(\_:didSelectPointOfInterest:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate when the user selects a point of interest.

## Declaration

```swift
optional func pointOfInterestTemplate(_ pointOfInterestTemplate: CPPointOfInterestTemplate, didSelectPointOfInterest pointOfInterest: CPPointOfInterest)
```

## Parameters

- `pointOfInterestTemplate`: The template that displays the map that contains the points of interest.
- `pointOfInterest`: The point of interest that the user selects.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method whenever the user selects a point of interest from the template’s map. The template displays a detail card for the selection, which contains secondary information and optional actions the user can perform.

Use the [userInfo](../cppointofinterest/userinfo.md) property to attach a value that provides additional context for the point of interest. You can then reference that value in your implementation of this method.

# pointOfInterestTemplate:didSelectPointOfInterest: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate when the user selects a point of interest.

## Declaration

```objectivec
- (void) pointOfInterestTemplate:(CPPointOfInterestTemplate *) pointOfInterestTemplate didSelectPointOfInterest:(CPPointOfInterest *) pointOfInterest;
```

## Parameters

- `pointOfInterestTemplate`: The template that displays the map that contains the points of interest.
- `pointOfInterest`: The point of interest that the user selects.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method whenever the user selects a point of interest from the template’s map. The template displays a detail card for the selection, which contains secondary information and optional actions the user can perform.

Use the [userInfo](../cppointofinterest/userinfo.md) property to attach a value that provides additional context for the point of interest. You can then reference that value in your implementation of this method.
