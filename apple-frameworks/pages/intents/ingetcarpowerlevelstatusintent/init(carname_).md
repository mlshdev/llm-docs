> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintent/init(carname:)](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintent/init(carname:))

# init(carName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes a car power intent with the provided car name.

## Declaration

```swift
init(carName: INSpeakableString?)
```

## Parameters

- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.

<a id="return-value"></a>

## Return Value

A newly initialized `INGetCarPowerLevelStatusIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Siri creates instances when the user asks for the car’s power level. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.

# initWithCarName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes a car power intent with the provided car name.

## Declaration

```objectivec
- (instancetype) initWithCarName:(INSpeakableString *) carName;
```

## Parameters

- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.

<a id="return-value"></a>

## Return Value

A newly initialized `INGetCarPowerLevelStatusIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Siri creates instances when the user asks for the car’s power level. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.
