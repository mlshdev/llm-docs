> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintent/init(profilenumber:profilelabel:)](https://developer.apple.com/documentation/intents/insaveprofileincarintent/init(profilenumber:profilelabel:))

# init(profileNumber:profileLabel:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

Creates the intent object with the specified profile name information.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc convenience init(profileNumber: Int? = nil, profileLabel: String? = nil)
```

## Parameters

- `profileNumber`: An integer number to use when saving the profile. This value represents the index of the profile in your system. The index can be a soft index inside your vehicle’s electronics systems or it can correspond to physical buttons that the user presses.
- `profileLabel`: The name of the profile.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to save the current settings. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
