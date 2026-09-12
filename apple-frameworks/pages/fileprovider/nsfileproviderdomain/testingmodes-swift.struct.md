> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderdomain/testingmodes-swift.struct](https://developer.apple.com/documentation/fileprovider/nsfileproviderdomain/testingmodes-swift.struct)

# NSFileProviderDomain.TestingModes (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

Modes that modify the system’s behavior while testing.

## Declaration

```swift
struct TestingModes
```

## Topics

### Accessing Modes

- [alwaysEnabled](testingmodes-swift.struct/alwaysenabled.md): A testing mode that automatically enables the domain.
- [interactive](testingmodes-swift.struct/interactive.md): A testing mode where the extension can deterministically test asynchronous operations.

### Creating Modes

- [init(rawValue:)](testingmodes-swift.struct/init%28rawvalue_%29.md): Returns a newly-created testing mode.

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

### Testing

- [testingModes](testingmodes-swift.property.md): A mode that gives the File Provider extension more control over the system’s behavior during testing.

# NSFileProviderDomainTestingModes (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

Modes that modify the system’s behavior while testing.

## Declaration

```objectivec
enum NSFileProviderDomainTestingModes : NSUInteger;
```

## Topics

### Accessing Modes

- [NSFileProviderDomainTestingModeAlwaysEnabled](testingmodes-swift.struct/alwaysenabled.md): A testing mode that automatically enables the domain.
- [NSFileProviderDomainTestingModeInteractive](testingmodes-swift.struct/interactive.md): A testing mode where the extension can deterministically test asynchronous operations.

## See Also

### Testing

- [testingModes](testingmodes-swift.property.md): A mode that gives the File Provider extension more control over the system’s behavior during testing.
