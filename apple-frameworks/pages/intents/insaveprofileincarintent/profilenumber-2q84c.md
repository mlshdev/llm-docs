> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insaveprofileincarintent/profilenumber-2q84c](https://developer.apple.com/documentation/intents/insaveprofileincarintent/profilenumber-2q84c)

# profileNumber

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

The profile index in which to save the settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@nonobjc final var profileNumber: Int? { get }
```

<a id="Discussion"></a>

## Discussion

If your vehicle saves profile information using defined indexes, use this property to get the integer index of the profile slot to use.

## See Also

### Getting the Profile Information

- [profileName](profilename.md): Deprecated. The name to assign to the profile.
- [profileLabel](profilelabel.md): Deprecated. The name to assign to the profile.
