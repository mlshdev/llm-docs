> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelrideintentresponse/cancellationfee](https://developer.apple.com/documentation/intents/incancelrideintentresponse/cancellationfee)

# cancellationFee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The cancellation fee charged by your service.

## Declaration

```swift
@NSCopying var cancellationFee: INCurrencyAmount? { get set }
```

<a id="Discussion"></a>

## Discussion

SiriKit communicates your cancellation fee to the user as part of the confirmation process. Specify a value for the [cancellationFeeThreshold](cancellationfeethreshold.md) property if cancellation fees apply only after a period of time has elapsed.

## See Also

### Specifying Cancellation Fees

- [cancellationFeeThreshold](cancellationfeethreshold.md): The amount of time that must elapse before cancellation fees apply.

# cancellationFee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The cancellation fee charged by your service.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INCurrencyAmount * cancellationFee;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INCurrencyAmount * cancellationFee;
```

<a id="Discussion"></a>

## Discussion

SiriKit communicates your cancellation fee to the user as part of the confirmation process. Specify a value for the [cancellationFeeThreshold](cancellationfeethreshold.md) property if cancellation fees apply only after a period of time has elapsed.

## See Also

### Specifying Cancellation Fees

- [cancellationFeeThreshold](cancellationfeethreshold.md): The amount of time that must elapse before cancellation fees apply.
