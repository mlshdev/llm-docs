> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/init(ecoscore:)](https://developer.apple.com/documentation/carplay/cproutedetail/init(ecoscore:))

# init(ecoScore:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for an eco-score rating.

## Declaration

```swift
convenience init(ecoScore value: Double)
```

## Parameters

- `value`: The eco-score rating from 0.0 to 100.0. Values outside this range will be clamped. Higher scores indicate more environmentally friendly routes.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the eco-score

<a id="discussion"></a>

## Discussion

Use this method to display a normalized environmental efficiency score for the route. The score should be a value between 0.0 and 100.0, where higher values indicate more environmentally friendly routing options.

The eco-score can incorporate multiple factors including carbon emissions, fuel efficiency, traffic congestion impact, terrain characteristics, and route optimization. The system displays this as a percentage-like value with appropriate visual indicators. Use consistent calculation methodology across all routes to enable meaningful comparison.

> **Note**

> The interpretation and calculation methodology of eco-scores may vary by app. Consider documenting your scoring algorithm in your app’s help or settings, and ensure the score remains consistent across app updates to maintain user trust and understanding.

# routeDetailWithEcoScore: (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates additional route information for an eco-score rating.

## Declaration

```objectivec
+ (instancetype) routeDetailWithEcoScore:(double) value;
```

## Parameters

- `value`: The eco-score rating from 0.0 to 100.0. Values outside this range will be clamped. Higher scores indicate more environmentally friendly routes.

<a id="return-value"></a>

## Return Value

A new @c CPRouteDetail instance representing the eco-score

<a id="discussion"></a>

## Discussion

Use this method to display a normalized environmental efficiency score for the route. The score should be a value between 0.0 and 100.0, where higher values indicate more environmentally friendly routing options.

The eco-score can incorporate multiple factors including carbon emissions, fuel efficiency, traffic congestion impact, terrain characteristics, and route optimization. The system displays this as a percentage-like value with appropriate visual indicators. Use consistent calculation methodology across all routes to enable meaningful comparison.

> **Note**

> The interpretation and calculation methodology of eco-scores may vary by app. Consider documenting your scoring algorithm in your app’s help or settings, and ensure the score remains consistent across app updates to maintain user trust and understanding.
