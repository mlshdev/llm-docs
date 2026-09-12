> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse/consumptionformulaarguments](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/consumptionformulaarguments)

# consumptionFormulaArguments (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The parameters the electric vehicle’s consumption model uses to calculate its energy consumption.

## Declaration

```swift
var consumptionFormulaArguments: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property’s value is a dictionary of serializable objects that contains the parameters the electric vehicle’s consumption model uses to calculate its energy consumption as it travels. The keys of the dictionary must match those of the corresponding charging model. `model_id` is a mandatory key and must be the identifier of the consumption model the vehicle uses.

## See Also

### Providing Formula Arguments

- [chargingFormulaArguments](chargingformulaarguments.md): The parameters the electric vehicle’s charging model uses to calculate the duration of a charge.

# consumptionFormulaArguments (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The parameters the electric vehicle’s consumption model uses to calculate its energy consumption.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * consumptionFormulaArguments;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDictionary<NSString *,id> * consumptionFormulaArguments;
```

<a id="Discussion"></a>

## Discussion

This property’s value is a dictionary of serializable objects that contains the parameters the electric vehicle’s consumption model uses to calculate its energy consumption as it travels. The keys of the dictionary must match those of the corresponding charging model. `model_id` is a mandatory key and must be the identifier of the consumption model the vehicle uses.

## See Also

### Providing Formula Arguments

- [chargingFormulaArguments](chargingformulaarguments.md): The parameters the electric vehicle’s charging model uses to calculate the duration of a charge.
