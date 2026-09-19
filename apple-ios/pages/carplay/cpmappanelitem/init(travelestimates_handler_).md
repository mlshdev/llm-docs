> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(travelestimates:handler:)

# init(travelEstimates:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with travel estimate information.

## Declaration

```swift
init(travelEstimates: CPTravelEstimates, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `travelEstimates`: The object that provides the remaining distance and time values for a trip.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with travel estimates.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the expected arrival time, along with the remaining distance and time information.

# initWithTravelEstimates:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with travel estimate information.

## Declaration

```objectivec
- (instancetype) initWithTravelEstimates:(CPTravelEstimates *) travelEstimates handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `travelEstimates`: The object that provides the remaining distance and time values for a trip.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with travel estimates.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the expected arrival time, along with the remaining distance and time information.
