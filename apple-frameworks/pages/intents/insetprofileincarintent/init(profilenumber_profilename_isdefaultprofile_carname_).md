> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintent/init(profilenumber:profilename:isdefaultprofile:carname:)](https://developer.apple.com/documentation/intents/insetprofileincarintent/init(profilenumber:profilename:isdefaultprofile:carname:))

# init(profileNumber:profileName:isDefaultProfile:carName:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 12.0+ (deprecated in 15.0)

Initializes the intent object with the specified profile name and index information.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
convenience init(profileNumber: Int? = nil, profileName: String? = nil, isDefaultProfile: Bool? = nil, carName: INSpeakableString? = nil)
```

## Parameters

- `profileNumber`: An integer number that indicates which profile to use. This value represents the index of the profile in your system. The index can be a soft index inside your vehicle’s electronics systems or it can correspond to physical buttons that the user presses.
- `profileName`: The name of the profile. Specify `nil` when creating a profile based on a numerical index.
- `isDefaultProfile`: A Boolean value that indicates whether the profile should become the default profile.
- `carName`: The name of the car associated with the profile.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to restore settings from a profile. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Initializing the Intent Object

- [init(profileNumber:profileLabel:defaultProfile:)](init%28profilenumber_profilelabel_defaultprofile_%29.md): Deprecated. Creates the intent object with the specified profile name and index information.
- [init(defaultProfile:)](init%28defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileLabel:)](init%28profilelabel_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileLabel:defaultProfile:)](init%28profilelabel_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileLabel:isDefaultProfile:)](init%28profilelabel_isdefaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileName:defaultProfile:)](init%28profilename_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:defaultProfile:)](init%28profilenumber_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:profileLabel:)](init%28profilenumber_profilelabel_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:profileLabel:isDefaultProfile:)](init%28profilenumber_profilelabel_isdefaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
- [init(profileNumber:profileName:defaultProfile:)](init%28profilenumber_profilename_defaultprofile_%29.md): Deprecated. Creates an intent to set the car’s profile.
