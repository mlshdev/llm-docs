> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/chargingformulaarguments](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/chargingformulaarguments)

# chargingFormulaArguments (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The parameters the electric vehicle’s charging model uses to calculate the duration of a charge.

## Declaration

```swift
var chargingFormulaArguments: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property’s value is a dictionary of serializable objects that contains the parameters the electric vehicle’s charging model uses to calculate the duration of charge at a charging point. The keys of the dictionary must match those of the corresponding charging model. `model_id` is a mandatory key and must be the identifier of the charging model the vehicle uses.

## See Also

### Providing Formula Arguments

- [consumptionFormulaArguments](consumptionformulaarguments.md): The parameters the electric vehicle’s consumption model uses to calculate its energy consumption.

# chargingFormulaArguments (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The parameters the electric vehicle’s charging model uses to calculate the duration of a charge.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * chargingFormulaArguments;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * chargingFormulaArguments;
```

<a id="Discussion"></a>

## Discussion

This property’s value is a dictionary of serializable objects that contains the parameters the electric vehicle’s charging model uses to calculate the duration of charge at a charging point. The keys of the dictionary must match those of the corresponding charging model. `model_id` is a mandatory key and must be the identifier of the charging model the vehicle uses.

## See Also

### Providing Formula Arguments

- [consumptionFormulaArguments](consumptionformulaarguments.md): The parameters the electric vehicle’s consumption model uses to calculate its energy consumption.
