> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cppointofinteresttemplatedelegate

# CPPointOfInterestTemplateDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods to handle a point of interest template’s events.

## Declaration

```swift
@MainActor protocol CPPointOfInterestTemplateDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You use the `CPPointOfInterestTemplateDelegate` protocol to respond to a point of interest template’s events. The protocol defines methods that CarPlay calls in response to these events, and your implementation provides the appropriate behavior for when the events occur. For example, when the user pans the template’s map and the visible region changes, update the points of interest that the template displays to only those relevant to the new region.

## Topics

### Responding to map region changes

- [pointOfInterestTemplate(\_:didChangeMapRegion:)](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didchangemapregion_%29.md): Tells the delegate about changes to the visible region of the template’s map.

### Responding to a point of interest selection

- [pointOfInterestTemplate(\_:didSelectPointOfInterest:)](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didselectpointofinterest_%29.md): Tells the delegate when the user selects a point of interest.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling events

- [pointOfInterestDelegate](cppointofinteresttemplate/pointofinterestdelegate.md): The object that serves as the template’s delegate.

# CPPointOfInterestTemplateDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The methods to handle a point of interest template’s events.

## Declaration

```objectivec
@protocol CPPointOfInterestTemplateDelegate <NSObject>
```

<a id="overview"></a>

## Overview

You use the `CPPointOfInterestTemplateDelegate` protocol to respond to a point of interest template’s events. The protocol defines methods that CarPlay calls in response to these events, and your implementation provides the appropriate behavior for when the events occur. For example, when the user pans the template’s map and the visible region changes, update the points of interest that the template displays to only those relevant to the new region.

## Topics

### Responding to map region changes

- [pointOfInterestTemplate:didChangeMapRegion:](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didchangemapregion_%29.md): Tells the delegate about changes to the visible region of the template’s map.

### Responding to a point of interest selection

- [pointOfInterestTemplate:didSelectPointOfInterest:](cppointofinteresttemplatedelegate/pointofinteresttemplate%28__didselectpointofinterest_%29.md): Tells the delegate when the user selects a point of interest.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling events

- [pointOfInterestDelegate](cppointofinteresttemplate/pointofinterestdelegate.md): The object that serves as the template’s delegate.
