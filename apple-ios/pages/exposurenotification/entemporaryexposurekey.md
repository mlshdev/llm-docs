> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/entemporaryexposurekey](https://developer.apple.com/documentation/exposurenotification/entemporaryexposurekey)

# ENTemporaryExposureKey (Swift)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The key used to generate rolling proximity identifiers.

> No longer supported.

## Declaration

```swift
class ENTemporaryExposureKey
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, and in iOS 13.5 and later.

Upon a positive diagnosis, the user is allowed to submit their temporary exposure keys to their Health Authority server as diagnosis keys. Use [getDiagnosisKeys(completionHandler:)](enmanager/getdiagnosiskeys%28completionhandler_%29.md) to obtain the user’s diagnosis keys for submission.

## Topics

### Exposure Criteria

- [transmissionRiskLevel](entemporaryexposurekey/transmissionrisklevel.md): Deprecated. The risk of transmission associated with the person a key came from.
- [rollingPeriod](entemporaryexposurekey/rollingperiod.md): Deprecated. The length of time that this key is valid.
- [keyData](entemporaryexposurekey/keydata.md): Deprecated. The temporary exposure key information.
- [rollingStartNumber](entemporaryexposurekey/rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
- [ENIntervalNumber](enintervalnumber.md): Deprecated. A number assigned to each 10-minute window shared between all devices participating in the protocol.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Obtaining Exposure Keys

- [getDiagnosisKeys(completionHandler:)](enmanager/getdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys from the user’s device to share with a server.
- [getTestDiagnosisKeys(completionHandler:)](enmanager/gettestdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys, including the current key, used by this device for testing.

# ENTemporaryExposureKey (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Class  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The key used to generate rolling proximity identifiers.

> No longer supported.

## Declaration

```objectivec
@interface ENTemporaryExposureKey : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  This class is available in iOS 12.5, and in iOS 13.5 and later.

Upon a positive diagnosis, the user is allowed to submit their temporary exposure keys to their Health Authority server as diagnosis keys. Use [getDiagnosisKeysWithCompletionHandler:](enmanager/getdiagnosiskeys%28completionhandler_%29.md) to obtain the user’s diagnosis keys for submission.

## Topics

### Exposure Criteria

- [transmissionRiskLevel](entemporaryexposurekey/transmissionrisklevel.md): Deprecated. The risk of transmission associated with the person a key came from.
- [rollingPeriod](entemporaryexposurekey/rollingperiod.md): Deprecated. The length of time that this key is valid.
- [keyData](entemporaryexposurekey/keydata.md): Deprecated. The temporary exposure key information.
- [rollingStartNumber](entemporaryexposurekey/rollingstartnumber.md): Deprecated. A number that indicates when a key’s rolling period started.
- [ENIntervalNumber](enintervalnumber.md): Deprecated. A number assigned to each 10-minute window shared between all devices participating in the protocol.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Obtaining Exposure Keys

- [getDiagnosisKeysWithCompletionHandler:](enmanager/getdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys from the user’s device to share with a server.
- [getTestDiagnosisKeysWithCompletionHandler:](enmanager/gettestdiagnosiskeys%28completionhandler_%29.md): Deprecated. Requests the temporary exposure keys, including the current key, used by this device for testing.
