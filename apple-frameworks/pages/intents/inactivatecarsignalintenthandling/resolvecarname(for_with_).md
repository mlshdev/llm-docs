> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintenthandling/resolvecarname(for:with:)](https://developer.apple.com/documentation/intents/inactivatecarsignalintenthandling/resolvecarname(for:with:))

# resolveCarName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the name of the user’s car.

## Declaration

```swift
optional func resolveCarName(for intent: INActivateCarSignalIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveCarName(for intent: INActivateCarSignalIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the name of the user’s car.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the car’s name. If the app has access to more than one car, use the intent’s [carName](../inactivatecarsignalintent/carname.md) property to identify the correct car. If the app has access to only a single car, you can call the completion block with a `notRequired()` resolution for Swift and `resolutionResultNotRequired` for Objective-C, to indicate that the car name is not necessary.

## See Also

### Resolving the Intent Parameters

- [resolveSignals(for:with:)](resolvesignals%28for_with_%29.md): Resolves the type of signal (audible or visual).

# resolveCarNameForActivateCarSignal:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the name of the user’s car.

## Declaration

```objectivec
- (void) resolveCarNameForActivateCarSignal:(INActivateCarSignalIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the name of the user’s car.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the car’s name. If the app has access to more than one car, use the intent’s [carName](../inactivatecarsignalintent/carname.md) property to identify the correct car. If the app has access to only a single car, you can call the completion block with a `notRequired()` resolution for Swift and `resolutionResultNotRequired` for Objective-C, to indicate that the car name is not necessary.

## See Also

### Resolving the Intent Parameters

- [resolveSignalsForActivateCarSignal:withCompletion:](resolvesignals%28for_with_%29.md): Resolves the type of signal (audible or visual).
