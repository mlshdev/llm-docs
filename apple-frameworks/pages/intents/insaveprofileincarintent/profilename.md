> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insaveprofileincarintent/profilename

# profileName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 15.0) · iPadOS 10.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The name to assign to the profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var profileName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [profileNumber](profilenumber-2q84c.md): Deprecated. The profile index in which to save the settings.
- [profileLabel](profilelabel.md): Deprecated. The name to assign to the profile.

# profileName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ (deprecated in 15.0) · iPadOS 10.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The name to assign to the profile.

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

Use this property if your vehicle supports saving named profiles.

## See Also

### Getting the Profile Information

- [profileNumber](https://developer.apple.com/documentation/intents/insaveprofileincarintent/profilenumber-7z4u2): Deprecated. The profile index in which to save the settings.
- [profileLabel](profilelabel.md): Deprecated. The name to assign to the profile.
