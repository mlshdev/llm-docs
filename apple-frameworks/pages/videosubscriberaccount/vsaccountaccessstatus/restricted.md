> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountaccessstatus/restricted](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountaccessstatus/restricted)

# VSAccountAccessStatus.restricted (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The app isn’t allowed to access subscription information.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

This status can result if parental controls prohibit the user from allowing access.

## See Also

### Statuses

- [VSAccountAccessStatus.denied](denied.md): The user denied the app access to subscription information.
- [VSAccountAccessStatus.granted](granted.md): The user allowed the app to access subscription information.
- [VSAccountAccessStatus.notDetermined](notdetermined.md): The user hasn’t chosen whether to allow the app to access subscription information.

# VSAccountAccessStatusRestricted (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The app isn’t allowed to access subscription information.

## Declaration

```objectivec
VSAccountAccessStatusRestricted
```

<a id="Discussion"></a>

## Discussion

This status can result if parental controls prohibit the user from allowing access.

## See Also

### Statuses

- [VSAccountAccessStatusDenied](denied.md): The user denied the app access to subscription information.
- [VSAccountAccessStatusGranted](granted.md): The user allowed the app to access subscription information.
- [VSAccountAccessStatusNotDetermined](notdetermined.md): The user hasn’t chosen whether to allow the app to access subscription information.
