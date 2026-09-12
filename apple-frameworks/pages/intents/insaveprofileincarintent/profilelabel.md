> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintent/profilelabel](https://developer.apple.com/documentation/intents/insaveprofileincarintent/profilelabel)

# profileLabel (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.2) · iPadOS 10.0+ (deprecated in 10.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The name to assign to the profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var profileLabel: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [profileNumber](profilenumber-2q84c.md): Deprecated. The profile index in which to save the settings.
- [profileName](profilename.md): Deprecated. The name to assign to the profile.

# profileLabel (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 10.2) · iPadOS 10.0+ (deprecated in 10.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 10.1) · visionOS 1.0+ (deprecated in 1.0)

The name to assign to the profile.

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

Use this property if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [profileNumber](https://developer.apple.com/documentation/intents/insaveprofileincarintent/profilenumber-7z4u2): Deprecated. The profile index in which to save the settings.
- [profileName](profilename.md): Deprecated. The name to assign to the profile.
