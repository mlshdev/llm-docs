> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asdeliveredverificationcodesmanager](https://developer.apple.com/documentation/authenticationservices/asdeliveredverificationcodesmanager)

# ASDeliveredVerificationCodesManager

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

This class allows interacting with one-time codes delivered to the system.

## Declaration

```swift
class ASDeliveredVerificationCodesManager
```

<a id="overview"></a>

## Overview

The codes may be delivered from many different sources, for example, email or SMS.

## Topics

### Structures

- [ASDeliveredVerificationCodesManager.VerificationError](asdeliveredverificationcodesmanager/verificationerror.md)

### Initializers

- [init()](asdeliveredverificationcodesmanager/init%28%29.md)

### Instance Methods

- [consumeOneTimeCode(\_:)](asdeliveredverificationcodesmanager/consumeonetimecode%28__%29.md): Mark a one-time code as “consumed” by the current process.
- [oneTimeCodes(preferredDuration:anchor:)](asdeliveredverificationcodesmanager/onetimecodes%28preferredduration_anchor_%29-6x2k6.md): Stream one-time codes received by the system.
- [oneTimeCodes(preferredDuration:anchor:)](asdeliveredverificationcodesmanager/onetimecodes%28preferredduration_anchor_%29-tyrg.md): Stream one-time codes received by the system.
