> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/cttelephonynetworkinfo/radioaccesstechnologydidchangemessage](https://developer.apple.com/documentation/coretelephony/cttelephonynetworkinfo/radioaccesstechnologydidchangemessage)

# CTTelephonyNetworkInfo.RadioAccessTechnologyDidChangeMessage

**Framework:** Core Telephony  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A message that posts when the radio access technology changes for one of the services.

## Declaration

```swift
struct RadioAccessTechnologyDidChangeMessage
```

<a id="overview"></a>

## Overview

Use the [serviceIdentifier](radioaccesstechnologydidchangemessage/serviceidentifier.md) property  as the key in [serviceCurrentRadioAccessTechnology](servicecurrentradioaccesstechnology.md) to get the value of the new radio access technology for the service.

## Topics

### Instance Properties

- [serviceIdentifier](radioaccesstechnologydidchangemessage/serviceidentifier.md): The service identifier for which the radio access technology changed.

## Relationships

### Conforms To

- [NotificationCenter.AsyncMessage](../../foundation/notificationcenter/asyncmessage.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
