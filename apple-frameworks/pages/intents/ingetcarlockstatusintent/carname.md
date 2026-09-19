> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/ingetcarlockstatusintent/carname

# carName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A name that identifies the user’s car.

## Declaration

```swift
@NSCopying var carName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the correct car. If Siri does not detect a car name, it sets this property to `myCar`.

Apps should register the names, makes, and models of cars as user vocabulary or global vocabulary. For example, an auto manufacturer could register the makes and models of the supported cars as global vocabulary, while an app may register a user’s nickname for a car as user vocabulary. Registering the car names helps the system identify those cars when users speak the car names.

# carName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A name that identifies the user’s car.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * carName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * carName;
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the correct car. If Siri does not detect a car name, it sets this property to `myCar`.

Apps should register the names, makes, and models of cars as user vocabulary or global vocabulary. For example, an auto manufacturer could register the makes and models of the supported cars as global vocabulary, while an app may register a user’s nickname for a car as user vocabulary. Registering the car names helps the system identify those cars when users speak the car names.
