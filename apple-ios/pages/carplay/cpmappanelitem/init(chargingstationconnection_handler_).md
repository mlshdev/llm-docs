> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(chargingstationconnection:handler:)

# init(chargingStationConnection:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with charging connection details.

## Declaration

```swift
init(chargingStationConnection: CPChargingStationConnection, handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `chargingStationConnection`: The details of a charging station.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with charging information.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the charging connector type and the supported power and voltage outputs.

# initWithChargingStationConnection:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with charging connection details.

## Declaration

```objectivec
- (instancetype) initWithChargingStationConnection:(CPChargingStationConnection *) chargingStationConnection handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `chargingStationConnection`: The details of a charging station.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with charging information.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays the charging connector type and the supported power and voltage outputs.
