> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintent/isdefaultprofile](https://developer.apple.com/documentation/intents/insetprofileincarintent/isdefaultprofile)

# isDefaultProfile

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 10.0+ (deprecated in 15.0)

A Boolean value indicating whether to make the profile the default profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var isDefaultProfile: Bool? { get }
```

<a id="Discussion"></a>

## Discussion

When the value in this property is [true](https://developer.apple.com/documentation/swift/true), the user wants to make the profile the default profile for the vehicle.

## See Also

### Getting the Profile Information

- [profileName](profilename.md): Deprecated. The name assigned to the profile.
- [profileNumber](profilenumber-37vj8.md): Deprecated. The profile index from which to restore the settings.
- [profileLabel](profilelabel.md): Deprecated. The name assigned to the profile.
