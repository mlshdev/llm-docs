> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapolicy/deviceownerauthenticationwithbiometricsorcompanion](https://developer.apple.com/documentation/localauthentication/lapolicy/deviceownerauthenticationwithbiometricsorcompanion)

# LAPolicy.deviceOwnerAuthenticationWithBiometricsOrCompanion (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Device owner will be authenticated by biometry or a companion device e.g. Watch, Mac, etc.

## Declaration

```swift
case deviceOwnerAuthenticationWithBiometricsOrCompanion
```

<a id="discussion"></a>

## Discussion

Companion or biometric authentication is required. If no nearby paired companion device can be found, it behaves as LAPolicyDeviceOwnerAuthenticationWithBiometrics. Similarly, if biometry is unavailable it behaves as LAPolicyDeviceOwnerAuthenticationWithCompanion.

```
        Depending on the companion type and biometry and companion availability,
        either a user is asked to authenticate with biometry and on a companion device in parallel
        or the companion authentication takes precedence
        and a user is asked to authenticate exclusively on the companion device if available.
        Users should follow instructions on the companion device to authenticate.
```

# LAPolicyDeviceOwnerAuthenticationWithBiometricsOrCompanion (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Device owner will be authenticated by biometry or a companion device e.g. Watch, Mac, etc.

## Declaration

```objectivec
LAPolicyDeviceOwnerAuthenticationWithBiometricsOrCompanion
```

<a id="discussion"></a>

## Discussion

Companion or biometric authentication is required. If no nearby paired companion device can be found, it behaves as LAPolicyDeviceOwnerAuthenticationWithBiometrics. Similarly, if biometry is unavailable it behaves as LAPolicyDeviceOwnerAuthenticationWithCompanion.

```
        Depending on the companion type and biometry and companion availability,
        either a user is asked to authenticate with biometry and on a companion device in parallel
        or the companion authentication takes precedence
        and a user is asked to authenticate exclusively on the companion device if available.
        Users should follow instructions on the companion device to authenticate.
```
