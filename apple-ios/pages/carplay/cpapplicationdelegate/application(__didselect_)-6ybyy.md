> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpapplicationdelegate/application(_:didselect:)-6ybyy](https://developer.apple.com/documentation/carplay/cpapplicationdelegate/application(_:didselect:)-6ybyy)

# application(\_:didSelect:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the app delegate that the user selected a maneuver.

## Declaration

```swift
optional func application(_ application: UIApplication, didSelect maneuver: CPManeuver)
```

## Parameters

- `application`: Your singleton app object.
- `maneuver`: The maneuver selected by the user.

<a id="Discussion"></a>

## Discussion

When your app posts a maneuver while running in the background, CarPlay may display a notification banner. If the user taps the banner, the system displays your app on the CarPlay screen, then calls this method.

# application:didSelectManeuver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the app delegate that the user selected a maneuver.

## Declaration

```objectivec
- (void) application:(UIApplication *) application didSelectManeuver:(CPManeuver *) maneuver;
```

## Parameters

- `application`: Your singleton app object.
- `maneuver`: The maneuver selected by the user.

<a id="Discussion"></a>

## Discussion

When your app posts a maneuver while running in the background, CarPlay may display a notification banner. If the user taps the banner, the system displays your app on the CarPlay screen, then calls this method.
