> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkradiotechnology](https://developer.apple.com/documentation/passkit/pkradiotechnology)

# PKRadioTechnology (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS · visionOS 1.0+ · watchOS 7.3+

Constants that describe the type of wireless radio technology that a pass uses.

## Declaration

```swift
struct PKRadioTechnology
```

## Topics

### Reading the radio technology type

- [NFC](pkradiotechnology/nfc.md): An identifier that indicates the near field communication (NFC) radio frequency communication technology.
- [bluetooth](pkradiotechnology/bluetooth.md): An identifier that indicates the Bluetooth radio frequency communication technology.

### Creating a radio technology object

- [init(rawValue:)](pkradiotechnology/init%28rawvalue_%29.md): Creates a radio technology object of the specified type.

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

### Setting the wireless radio technology

- [supportedRadioTechnologies](pkaddcarkeypassconfiguration/supportedradiotechnologies.md): The wireless radio technology that the key uses.

# PKRadioTechnology (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS · visionOS 1.0+ · watchOS 7.3+

Constants that describe the type of wireless radio technology that a pass uses.

## Declaration

```objectivec
enum PKRadioTechnology : NSUInteger;
```

## Topics

### Reading the radio technology type

- [PKRadioTechnologyNFC](pkradiotechnology/nfc.md): An identifier that indicates the near field communication (NFC) radio frequency communication technology.
- [PKRadioTechnologyBluetooth](pkradiotechnology/bluetooth.md): An identifier that indicates the Bluetooth radio frequency communication technology.

### Enumeration Cases

- [PKRadioTechnologyNone](pkradiotechnology/pkradiotechnologynone.md): An identifier that indicates the pass doesn’t use radio frequency communication.

## See Also

### Setting the wireless radio technology

- [supportedRadioTechnologies](pkaddcarkeypassconfiguration/supportedradiotechnologies.md): The wireless radio technology that the key uses.
