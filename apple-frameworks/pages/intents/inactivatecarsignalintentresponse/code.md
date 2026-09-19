> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inactivatecarsignalintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code indicating success or failure when confirming or handling an intent.

## Declaration

```swift
var code: INActivateCarSignalIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INActivateCarSignalIntentResponseCode](../inactivatecarsignalintentresponsecode.md): Constants indicating the status of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code indicating success or failure when confirming or handling an intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INActivateCarSignalIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INActivateCarSignalIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INActivateCarSignalIntentResponseCode](../inactivatecarsignalintentresponsecode.md): Constants indicating the status of the response.
