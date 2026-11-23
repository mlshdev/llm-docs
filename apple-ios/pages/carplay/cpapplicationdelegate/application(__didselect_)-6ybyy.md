> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:didselect:)-6ybyy

# application(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

If your application posts a @c CPManeuver while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the maneuver the user tapped.

## Declaration

```swift
optional func application(_ application: UIApplication, didSelect maneuver: CPManeuver)
```

# application:didSelectManeuver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

If your application posts a @c CPManeuver while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the maneuver the user tapped.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didSelectManeuver:(CPManeuver *) maneuver;
```
