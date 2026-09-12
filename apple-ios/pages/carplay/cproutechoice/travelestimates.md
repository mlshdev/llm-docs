> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutechoice/travelestimates](https://developer.apple.com/documentation/carplay/cproutechoice/travelestimates)

# travelEstimates (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Trip preview information such as battery, fuel, or toll information to display for this route choice.

## Declaration

```swift
var travelEstimates: CPTravelEstimates? { get }
```

<a id="discussion"></a>

## Discussion

The travel estimates associated with this route choice provide comprehensive information about the route, including traditional metrics (time and distance) and supplementary information (tolls, energy consumption, etc.).

During route selection, the system displays this information to help users make informed decisions. For example, users can compare toll costs between different route options or evaluate whether their vehicle’s battery level will be sufficient for a particular route.

> **Note**

> This property is read-only and set during initialization. To update route information, create a new CPRouteChoice instance with updated travel estimates.

# travelEstimates (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Trip preview information such as battery, fuel, or toll information to display for this route choice.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) CPTravelEstimates * travelEstimates;
```

<a id="discussion"></a>

## Discussion

The travel estimates associated with this route choice provide comprehensive information about the route, including traditional metrics (time and distance) and supplementary information (tolls, energy consumption, etc.).

During route selection, the system displays this information to help users make informed decisions. For example, users can compare toll costs between different route options or evaluate whether their vehicle’s battery level will be sufficient for a particular route.

> **Note**

> This property is read-only and set during initialization. To update route information, create a new CPRouteChoice instance with updated travel estimates.
