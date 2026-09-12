> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarlockstatusintent/init(carname:)](https://developer.apple.com/documentation/intents/ingetcarlockstatusintent/init(carname:))

# init(carName:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes an intent to get the lock status of the named car.

## Declaration

```swift
init(carName: INSpeakableString?)
```

## Parameters

- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.

<a id="return-value"></a>

## Return Value

A newly initialized `INGetCarLockStatusIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when a user asks for the lock status of the car. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.

# initWithCarName: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes an intent to get the lock status of the named car.

## Declaration

```objectivec
- (instancetype) initWithCarName:(INSpeakableString *) carName;
```

## Parameters

- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.

<a id="return-value"></a>

## Return Value

A newly initialized `INGetCarLockStatusIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when a user asks for the lock status of the car. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.
