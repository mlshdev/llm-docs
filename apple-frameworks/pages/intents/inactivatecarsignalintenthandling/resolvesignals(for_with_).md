> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintenthandling/resolvesignals(for:with:)](https://developer.apple.com/documentation/intents/inactivatecarsignalintenthandling/resolvesignals(for:with:))

# resolveSignals(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the type of signal (audible or visual).

## Declaration

```swift
optional func resolveSignals(for intent: INActivateCarSignalIntent, with completion: @escaping @Sendable (INCarSignalOptionsResolutionResult) -> Void)
```

```swift
optional func resolveSignals(for intent: INActivateCarSignalIntent) async -> INCarSignalOptionsResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object that specifies the requested signal types.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the requested signal type (audible or visual). For the complete list of possible signals, see [INCarSignalOptions](../incarsignaloptions.md).

## See Also

### Resolving the Intent Parameters

- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.

# resolveSignalsForActivateCarSignal:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the type of signal (audible or visual).

## Declaration

```objectivec
- (void) resolveSignalsForActivateCarSignal:(INActivateCarSignalIntent *) intent withCompletion:(void (^)(INCarSignalOptionsResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object that specifies the requested signal types.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the requested signal type (audible or visual). For the complete list of possible signals, see [INCarSignalOptions](../incarsignaloptions.md).

## See Also

### Resolving the Intent Parameters

- [resolveCarNameForActivateCarSignal:withCompletion:](resolvecarname%28for_with_%29.md): Resolves the name of the user’s car.
