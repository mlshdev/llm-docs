> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laenvironment/state-swift.class/biometry](https://developer.apple.com/documentation/localauthentication/laenvironment/state-swift.class/biometry)

# biometry (Swift)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
var biometry: LAEnvironment.MechanismBiometry? { get }
```

<a id="discussion"></a>

## Discussion

Information about biometric authentication (Touch ID, Face ID or Optic ID).

@c nil if biometry is not supported by this device.

# biometry (Objective-C)

**Framework:** Local Authentication  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) LAEnvironmentMechanismBiometry * biometry;
```

<a id="discussion"></a>

## Discussion

Information about biometric authentication (Touch ID, Face ID or Optic ID).

@c nil if biometry is not supported by this device.
