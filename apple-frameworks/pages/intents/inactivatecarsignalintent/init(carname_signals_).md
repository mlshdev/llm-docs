> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inactivatecarsignalintent/init(carname:signals:)](https://developer.apple.com/documentation/intents/inactivatecarsignalintent/init(carname:signals:))

# init(carName:signals:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes an intent to trigger audio or visual signals from the car.

## Declaration

```swift
init(carName: INSpeakableString?, signals: INCarSignalOptions = [])
```

## Parameters

- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.
- `signals`: The set of signals to be activated. For a list of valid signals, see [INCarSignalOptions](../incarsignaloptions.md).

<a id="return-value"></a>

## Return Value

A newly initialized `INActivateCarSignalIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Siri creates instances when the user asks for an audible or visual signal from the car. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.

# initWithCarName:signals: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes an intent to trigger audio or visual signals from the car.

## Declaration

```objectivec
- (instancetype) initWithCarName:(INSpeakableString *) carName signals:(INCarSignalOptions) signals;
```

## Parameters

- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.
- `signals`: The set of signals to be activated. For a list of valid signals, see [INCarSignalOptions](../incarsignaloptions.md).

<a id="return-value"></a>

## Return Value

A newly initialized `INActivateCarSignalIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Siri creates instances when the user asks for an audible or visual signal from the car. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.
