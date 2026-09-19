> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/localauthentication/laenvironment/state-swift.class/userpassword

# userPassword (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var userPassword: LAEnvironment.MechanismUserPassword? { get }
```

<a id="discussion"></a>

## Discussion

Information about local user password (on macOS) or passcode (on embedded platforms).

@c nil if user password or passcode is not supported by this device.

# userPassword (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) LAEnvironmentMechanismUserPassword * userPassword;
```

<a id="discussion"></a>

## Discussion

Information about local user password (on macOS) or passcode (on embedded platforms).

@c nil if user password or passcode is not supported by this device.
