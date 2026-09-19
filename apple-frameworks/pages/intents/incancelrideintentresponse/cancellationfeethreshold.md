> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/incancelrideintentresponse/cancellationfeethreshold

# cancellationFeeThreshold (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The amount of time that must elapse before cancellation fees apply.

## Declaration

```swift
var cancellationFeeThreshold: DateComponents? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the time after which cancellation fees apply. If cancellation fees apply immediately after booking, set this property to `nil`. The default value of this property is `nil`.

## See Also

### Specifying Cancellation Fees

- [cancellationFee](cancellationfee.md): The cancellation fee charged by your service.

# cancellationFeeThreshold (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The amount of time that must elapse before cancellation fees apply.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSDateComponents * cancellationFeeThreshold;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSDateComponents * cancellationFeeThreshold;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the time after which cancellation fees apply. If cancellation fees apply immediately after booking, set this property to `nil`. The default value of this property is `nil`.

## See Also

### Specifying Cancellation Fees

- [cancellationFee](cancellationfee.md): The cancellation fee charged by your service.
