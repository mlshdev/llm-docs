> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:didselect:)-478jb

# application(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

If your application posts a @c CPNavigationAlert while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the alert the user tapped.

## Declaration

```swift
optional func application(_ application: UIApplication, didSelect navigationAlert: CPNavigationAlert)
```

# application:didSelectNavigationAlert: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

If your application posts a @c CPNavigationAlert while backgrounded, a notification banner may be presented to the user. If the user taps on that banner, your application will launch on the car screen and this method will be called with the alert the user tapped.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didSelectNavigationAlert:(CPNavigationAlert *) navigationAlert;
```
