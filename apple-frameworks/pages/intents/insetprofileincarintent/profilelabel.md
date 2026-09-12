> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintent/profilelabel](https://developer.apple.com/documentation/intents/insetprofileincarintent/profilelabel)

# profileLabel (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.2) · iPadOS 10.0+ (deprecated in 10.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The name assigned to the profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var profileLabel: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the settings if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [isDefaultProfile](isdefaultprofile.md): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileName](profilename.md): Deprecated. The name assigned to the profile.
- [profileNumber](profilenumber-37vj8.md): Deprecated. The profile index from which to restore the settings.

# profileLabel (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.2) · iPadOS 10.0+ (deprecated in 10.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 10.1) · visionOS 1.0+ (deprecated in 1.0)

The name assigned to the profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * profileLabel;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * profileLabel;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the settings if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [defaultProfile](https://developer.apple.com/documentation/intents/insetprofileincarintent/defaultprofile-4ztep): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileName](profilename.md): Deprecated. The name assigned to the profile.
- [profileNumber](https://developer.apple.com/documentation/intents/insetprofileincarintent/profilenumber-50f30): Deprecated. The profile index from which to restore the settings.
