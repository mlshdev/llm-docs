> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/code

# code (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code that indicates success or failure when confirming or handling an intent.

## Declaration

```swift
var code: INGetCarPowerLevelStatusIntentResponseCode { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INGetCarPowerLevelStatusIntentResponseCode](../ingetcarpowerlevelstatusintentresponsecode.md): Constants that indicate the status of the response.

# code (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The code that indicates success or failure when confirming or handling an intent.

## Declaration

```objectivec
@property (nonatomic, readonly) INGetCarPowerLevelStatusIntentResponseCode code;
```

```objectivec
@property (atomic, readonly) INGetCarPowerLevelStatusIntentResponseCode code;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Response Code

- [INGetCarPowerLevelStatusIntentResponseCode](../ingetcarpowerlevelstatusintentresponsecode.md): Constants that indicate the status of the response.
