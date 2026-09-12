> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctagreadersession/pollingoption](https://developer.apple.com/documentation/corenfc/nfctagreadersession/pollingoption)

# NFCTagReaderSession.PollingOption (Swift)

**Framework:** Core NFC  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst

Options that determine the type of tags that a reader session should detect during a polling sequence.

## Declaration

```swift
struct PollingOption
```

<a id="overview"></a>

## Overview

You can combine options to have the reader session scan and detect different tag types at the same time.

## Topics

### Polling Options

- [iso14443](pollingoption/iso14443.md): The option for detecting ISO 7816-compatible and MIFARE tags.
- [iso15693](pollingoption/iso15693.md): The option for detecting ISO 15693 tags.
- [iso18092](pollingoption/iso18092.md): The option for detecting FeliCa tags.

### Initializers

- [init(rawValue:)](pollingoption/init%28rawvalue_%29.md)

### Type Properties

- [pace](pollingoption/pace.md)

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

### Creating a Tag Reader Session

- [init(pollingOption:delegate:queue:)](init%28pollingoption_delegate_queue_%29.md): Deprecated. Creates an NFC tag reader session.
- [NFCTagReaderSessionDelegate](../nfctagreadersessiondelegate-2joku.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.

# NFCPollingOption (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

Options that determine the type of tags that a reader session should detect during a polling sequence.

## Declaration

```objectivec
enum NFCPollingOption : NSInteger;
```

<a id="overview"></a>

## Overview

You can combine options to have the reader session scan and detect different tag types at the same time.

## Topics

### Polling Options

- [NFCPollingISO14443](pollingoption/iso14443.md): The option for detecting ISO 7816-compatible and MIFARE tags.
- [NFCPollingISO15693](pollingoption/iso15693.md): The option for detecting ISO 15693 tags.
- [NFCPollingISO18092](pollingoption/iso18092.md): The option for detecting FeliCa tags.

### Enumeration Cases

- [NFCPollingPACE](pollingoption/pace.md)

## See Also

### Creating a Tag Reader Session

- [initWithPollingOption:delegate:queue:](initwithpollingoption_delegate_queue_.md): Intializes an NFC tag reader session.
- [NFCTagReaderSessionDelegate](../nfctagreadersessiondelegate-5gxiw.md): A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
