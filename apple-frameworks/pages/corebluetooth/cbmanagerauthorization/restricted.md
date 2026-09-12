> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanagerauthorization/restricted](https://developer.apple.com/documentation/corebluetooth/cbmanagerauthorization/restricted)

# CBManagerAuthorization.restricted (Swift)

**Framework:** Core Bluetooth  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A state that indicates this app isn’t authorized to use Bluetooth.

## Declaration

```swift
case restricted
```

<a id="Discussion"></a>

## Discussion

In this state, the user can’t change the Bluetooth authorization status, possibly due to active restrictions such as parental controls.

## See Also

### Authorization States

- [CBManagerAuthorization.allowedAlways](allowedalways.md): A state that indicates the user has authorized Bluetooth at any time.
- [CBManagerAuthorization.denied](denied.md): A state that indicates the user explicitly denied Bluetooth access for this app.
- [CBManagerAuthorization.notDetermined](notdetermined.md): A state that indicates the user has yet to authorize Bluetooth for this app.

# CBManagerAuthorizationRestricted (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A state that indicates this app isn’t authorized to use Bluetooth.

## Declaration

```objectivec
CBManagerAuthorizationRestricted
```

<a id="Discussion"></a>

## Discussion

In this state, the user can’t change the Bluetooth authorization status, possibly due to active restrictions such as parental controls.

## See Also

### Authorization States

- [CBManagerAuthorizationAllowedAlways](allowedalways.md): A state that indicates the user has authorized Bluetooth at any time.
- [CBManagerAuthorizationDenied](denied.md): A state that indicates the user explicitly denied Bluetooth access for this app.
- [CBManagerAuthorizationNotDetermined](notdetermined.md): A state that indicates the user has yet to authorize Bluetooth for this app.
