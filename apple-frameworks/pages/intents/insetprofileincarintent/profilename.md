> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintent/profilename](https://developer.apple.com/documentation/intents/insetprofileincarintent/profilename)

# profileName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 15.0) · iPadOS 10.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The name assigned to the profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var profileName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the settings if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [isDefaultProfile](isdefaultprofile.md): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileNumber](profilenumber-37vj8.md): Deprecated. The profile index from which to restore the settings.
- [profileLabel](profilelabel.md): Deprecated. The name assigned to the profile.

# profileName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 15.0) · iPadOS 10.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The name assigned to the profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * profileName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * profileName;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the settings if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [defaultProfile](https://developer.apple.com/documentation/intents/insetprofileincarintent/defaultprofile-4ztep): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileLabel](profilelabel.md): Deprecated. The name assigned to the profile.
- [profileNumber](https://developer.apple.com/documentation/intents/insetprofileincarintent/profilenumber-50f30): Deprecated. The profile index from which to restore the settings.
