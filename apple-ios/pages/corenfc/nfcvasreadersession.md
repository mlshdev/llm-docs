> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcvasreadersession](https://developer.apple.com/documentation/corenfc/nfcvasreadersession)

# NFCVASReaderSession (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A reader session for processing Value Added Service (VAS) tags.

## Declaration

```swift
class NFCVASReaderSession
```

<a id="overview"></a>

## Overview

> **Note**

>  Using NFCVASReaderSession requires an entitlement from Apple. Updates will include information about the entitlement and a link to the entitlement request form.

## Topics

### Creating a VAS Reader Session

- [init(vasCommandConfigurations:delegate:queue:)](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-23h52.md): Creates a VAS reader session.
- [NFCVASCommandConfiguration](nfcvascommandconfiguration.md): An object providing the configuration for a GET VAS DATA command.
- [NFCVASReaderSessionDelegate](nfcvasreadersessiondelegate.md): A protocol that an object implements to receive callbacks from a VAS reader session.

### Initializers

- [init(VASCommandConfigurations:delegate:queue:)](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-8qhci.md)

## Relationships

### Inherits From

- [NFCReaderSession](nfcreadersession-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NFCReaderSessionProtocol](nfcreadersessionprotocol.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSessionProtocol](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.

# NFCVASReaderSession (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A reader session for processing Value Added Service (VAS) tags.

## Declaration

```objectivec
@interface NFCVASReaderSession : NFCReaderSession
```

<a id="overview"></a>

## Overview

> **Note**

>  Using NFCVASReaderSession requires an entitlement from Apple. Updates will include information about the entitlement and a link to the entitlement request form.

## Topics

### Creating a VAS Reader Session

- [initWithVASCommandConfigurations:delegate:queue:](nfcvasreadersession/init%28vascommandconfigurations_delegate_queue_%29-23h52.md): Creates a VAS reader session.
- [NFCVASCommandConfiguration](nfcvascommandconfiguration.md): An object providing the configuration for a GET VAS DATA command.
- [NFCVASReaderSessionDelegate](nfcvasreadersessiondelegate.md): A protocol that an object implements to receive callbacks from a VAS reader session.

## Relationships

### Inherits From

- [NFCReaderSession](nfcreadersession-swift.class.md)

## See Also

### Reader sessions

- [NFCNDEFReaderSession](nfcndefreadersession.md): A reader session for detecting NFC Data Exchange Format (NDEF) tags.
- [NFCTagReaderSession](nfctagreadersession.md): A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
- [NFCPaymentTagReaderSession](nfcpaymenttagreadersession.md): A reader session that supports the use of payment tags.
- [NFCReaderSession](nfcreadersession-swift.class.md): The abstract base class that represents a reader session for detecting NFC tags.
- [NFCReaderSession](nfcreadersessionprotocol.md): A general interface for interacting with a reader session.
- [NFCReaderSessionDelegate](nfcreadersessiondelegate.md): A collection of callbacks that provide information about the status of an NFC reader session.
- [Near Field Communication Tag Reader Session Formats Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.nfc.readersession.formats): The Near Field Communication data formats an app can read.
