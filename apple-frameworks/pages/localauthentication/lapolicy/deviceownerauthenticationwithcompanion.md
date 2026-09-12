> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapolicy/deviceownerauthenticationwithcompanion](https://developer.apple.com/documentation/localauthentication/lapolicy/deviceownerauthenticationwithcompanion)

# LAPolicy.deviceOwnerAuthenticationWithCompanion (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Device owner will be authenticated by a companion device e.g. Watch, Mac, etc.

## Declaration

```swift
case deviceOwnerAuthenticationWithCompanion
```

<a id="discussion"></a>

## Discussion

Companion authentication is required. If no nearby paired companion device can be found, LAErrorCompanionNotAvailable is returned.

```
        Users should follow instructions on the companion device to authenticate.
```

# LAPolicyDeviceOwnerAuthenticationWithCompanion (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

Device owner will be authenticated by a companion device e.g. Watch, Mac, etc.

## Declaration

```objectivec
LAPolicyDeviceOwnerAuthenticationWithCompanion
```

<a id="discussion"></a>

## Discussion

Companion authentication is required. If no nearby paired companion device can be found, LAErrorCompanionNotAvailable is returned.

```
        Users should follow instructions on the companion device to authenticate.
```
