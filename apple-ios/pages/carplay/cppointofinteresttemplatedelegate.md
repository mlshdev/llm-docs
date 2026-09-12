> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplatedelegate](https://developer.apple.com/documentation/carplay/cppointofinteresttemplatedelegate)

# CPPointOfInterestTemplateDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods to handle a Point of Interest template’s events.

## Declaration

```swift
@MainActor protocol CPPointOfInterestTemplateDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use the `CPPointOfInterestTemplateDelegate` protocol to respond to a Point of Interest template’s events. The protocol defines methods that CarPlay calls in response to these events, and your implementation provides the appropriate behavior for when the events occur. For example, when the user pans the template’s map and the visible region changes, update the points of interest that the template displays to only those relevant to the new region.

## Topics

### Responding to Map Region Changes

- [pointOfInterestTemplate(\_:didChangeMapRegion:)](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didchangemapregion_%29.md): Tells the delegate about changes to the visible region of the template’s map.

### Responding to Point of Interest Selection

- [pointOfInterestTemplate(\_:didSelectPointOfInterest:)](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didselectpointofinterest_%29.md): Tells the delegate when the user selects a point of interest.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling Template Events

- [pointOfInterestDelegate](cppointofinteresttemplate/pointofinterestdelegate.md): The object that serves as the template’s delegate.

# CPPointOfInterestTemplateDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods to handle a Point of Interest template’s events.

## Declaration

```objectivec
@protocol CPPointOfInterestTemplateDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use the `CPPointOfInterestTemplateDelegate` protocol to respond to a Point of Interest template’s events. The protocol defines methods that CarPlay calls in response to these events, and your implementation provides the appropriate behavior for when the events occur. For example, when the user pans the template’s map and the visible region changes, update the points of interest that the template displays to only those relevant to the new region.

## Topics

### Responding to Map Region Changes

- [pointOfInterestTemplate:didChangeMapRegion:](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didchangemapregion_%29.md): Tells the delegate about changes to the visible region of the template’s map.

### Responding to Point of Interest Selection

- [pointOfInterestTemplate:didSelectPointOfInterest:](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didselectpointofinterest_%29.md): Tells the delegate when the user selects a point of interest.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling Template Events

- [pointOfInterestDelegate](cppointofinteresttemplate/pointofinterestdelegate.md): The object that serves as the template’s delegate.
