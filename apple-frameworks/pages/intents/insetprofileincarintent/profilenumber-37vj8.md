> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintent/profilenumber-37vj8](https://developer.apple.com/documentation/intents/insetprofileincarintent/profilenumber-37vj8)

# profileNumber

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

The profile index from which to restore the settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
final var profileNumber: Int? { get }
```

<a id="Discussion"></a>

## Discussion

If your vehicle saves profile information using defined indexes, use this property to get the integer index of the profile slot from which to retrieve the settings.

## See Also

### Getting the Profile Information

- [isDefaultProfile](isdefaultprofile.md): Deprecated. A Boolean value indicating whether to make the profile the default profile.
- [profileName](profilename.md): Deprecated. The name assigned to the profile.
- [profileLabel](profilelabel.md): Deprecated. The name assigned to the profile.
