> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotnfcsession](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotnfcsession)

# TKSmartCardSlotNFCSession (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

NFC session that’s related to NFC smart card slot which was created.

## Declaration

```swift
class TKSmartCardSlotNFCSession
```

<a id="overview"></a>

## Overview

Lifetime of this session object is tied to the NFC smart card slot lifetime and once the NFC slot disappears (eg. after a user cancellation, calling end session, or an NFC timeout) the functions will start to fail and return `TKErrorCodeObjectNotFound` error.

## Topics

### Instance Properties

- [slotName](tksmartcardslotnfcsession/slotname.md): Smart card slot name of the NFC slot that was created together with this session.

### Instance Methods

- [end()](tksmartcardslotnfcsession/end%28%29.md): Ends the NFC slot session and dismisses the system-presented NFC UI (if present).
- [update(message:)](tksmartcardslotnfcsession/update%28message_%29.md): Updates the message of the system-presented NFC UI.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# TKSmartCardSlotNFCSession (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

NFC session that’s related to NFC smart card slot which was created.

## Declaration

```objectivec
@interface TKSmartCardSlotNFCSession : NSObject
```

<a id="overview"></a>

## Overview

Lifetime of this session object is tied to the NFC smart card slot lifetime and once the NFC slot disappears (eg. after a user cancellation, calling end session, or an NFC timeout) the functions will start to fail and return `TKErrorCodeObjectNotFound` error.

## Topics

### Instance Properties

- [slotName](tksmartcardslotnfcsession/slotname.md): Smart card slot name of the NFC slot that was created together with this session.

### Instance Methods

- [endSession](tksmartcardslotnfcsession/end%28%29.md): Ends the NFC slot session and dismisses the system-presented NFC UI (if present).
- [updateWithMessage:error:](tksmartcardslotnfcsession/update%28message_%29.md): Updates the message of the system-presented NFC UI.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
