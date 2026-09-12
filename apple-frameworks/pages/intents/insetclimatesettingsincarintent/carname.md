> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintent/carname](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintent/carname)

# carName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A name that identifies the user’s car.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var carName: INSpeakableString? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the correct car. If Siri doesn’t detect a car name, it sets this property to `myCar`.

Apps should register the names, makes, and models of cars as user vocabulary or global vocabulary. For example, an auto manufacturer could register the makes and models of the supported cars as global vocabulary, while an app may register a user’s nickname for a car as user vocabulary. Registering the car names helps the system identify those cars when users speak the car names.

# carName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

A name that identifies the user’s car.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpeakableString * carName;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpeakableString * carName;
```

<a id="Discussion"></a>

## Discussion

Use this property to identify the correct car. If Siri doesn’t detect a car name, it sets this property to `myCar`.

Apps should register the names, makes, and models of cars as user vocabulary or global vocabulary. For example, an auto manufacturer could register the makes and models of the supported cars as global vocabulary, while an app may register a user’s nickname for a car as user vocabulary. Registering the car names helps the system identify those cars when users speak the car names.
