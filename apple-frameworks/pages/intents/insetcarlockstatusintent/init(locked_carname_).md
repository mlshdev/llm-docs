> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetcarlockstatusintent/init(locked:carname:)](https://developer.apple.com/documentation/intents/insetcarlockstatusintent/init(locked:carname:))

# init(locked:carName:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · watchOS 3.2+

Initializes an intent to set the lock status of the named car.

## Declaration

```swift
@nonobjc convenience init(locked: Bool?, carName: INSpeakableString?)
```

## Parameters

- `locked`: A Boolean value that indicates whether the car should be locked ([true](https://developer.apple.com/documentation/swift/true)) or unlocked ([false](https://developer.apple.com/documentation/swift/false)).
- `carName`: A name that identifies the user’s car. If `nil`, the intent is instantiated with a [carName](carname.md) property containing the string `myCar`.

<a id="return-value"></a>

## Return Value

A newly initialized `INSetCarLockStatusIntent` object.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, Siri creates instances when the user asks it to lock or unlock the car. However, you can use this method during testing to create intent objects to validate your intent-handling code paths.
