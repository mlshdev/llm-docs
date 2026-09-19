> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/indailyroutinerelevanceprovider/init(situation:)

# init(situation:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a daily routine relevance provider with the specified situation.

## Declaration

```swift
init(situation: INDailyRoutineRelevanceProvider.Situation)
```

## Parameters

- `situation`: The relevant daily routine situation for the provider.

<a id="return-value"></a>

## Return Value

A a newly initialized daily routine relevance provider.

# initWithSituation: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a daily routine relevance provider with the specified situation.

## Declaration

```objectivec
- (instancetype) initWithSituation:(INDailyRoutineSituation) situation;
```

## Parameters

- `situation`: The relevant daily routine situation for the provider.

<a id="return-value"></a>

## Return Value

A a newly initialized daily routine relevance provider.
