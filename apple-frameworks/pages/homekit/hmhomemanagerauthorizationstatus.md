> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhomemanagerauthorizationstatus](https://developer.apple.com/documentation/homekit/hmhomemanagerauthorizationstatus)

# HMHomeManagerAuthorizationStatus (Swift)

**Framework:** HomeKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The possible home-access states.

## Declaration

```swift
struct HMHomeManagerAuthorizationStatus
```

<a id="overview"></a>

## Overview

Inspect the home manager’s [authorizationStatus](hmhomemanager/authorizationstatus.md) property for one or more of the bits defined by [HMHomeManagerAuthorizationStatus](hmhomemanagerauthorizationstatus.md).

## Topics

### Recognizing Status Values

- [determined](hmhomemanagerauthorizationstatus/determined.md): The user has set the app’s level of access to home data.
- [authorized](hmhomemanagerauthorizationstatus/authorized.md): The app has access to home data.
- [restricted](hmhomemanagerauthorizationstatus/restricted.md): The app doesn’t have access to home data.

### Creating an Authorization Status

- [init(rawValue:)](hmhomemanagerauthorizationstatus/init%28rawvalue_%29.md): Creates an access status from a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Inspecting authorization status

- [authorizationStatus](hmhomemanager/authorizationstatus.md): The current state of the app’s access to home data.

# HMHomeManagerAuthorizationStatus (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The possible home-access states.

## Declaration

```objectivec
enum HMHomeManagerAuthorizationStatus : NSUInteger;
```

<a id="overview"></a>

## Overview

Inspect the home manager’s [authorizationStatus](hmhomemanager/authorizationstatus.md) property for one or more of the bits defined by [HMHomeManagerAuthorizationStatus](hmhomemanagerauthorizationstatus.md).

## Topics

### Recognizing Status Values

- [HMHomeManagerAuthorizationStatusDetermined](hmhomemanagerauthorizationstatus/determined.md): The user has set the app’s level of access to home data.
- [HMHomeManagerAuthorizationStatusAuthorized](hmhomemanagerauthorizationstatus/authorized.md): The app has access to home data.
- [HMHomeManagerAuthorizationStatusRestricted](hmhomemanagerauthorizationstatus/restricted.md): The app doesn’t have access to home data.

## See Also

### Inspecting authorization status

- [authorizationStatus](hmhomemanager/authorizationstatus.md): The current state of the app’s access to home data.
