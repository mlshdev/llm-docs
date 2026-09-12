> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/cla](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/cla)

# cla (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The CLA byte used for APDU transmission. `0x00` by default.

## Declaration

```swift
var cla: UInt8 { get set }
```

## See Also

### Configuring APDU Behavior

- [useExtendedLength](useextendedlength.md): Whether to use extended length APDU.
- [useCommandChaining](usecommandchaining.md): Whether to use command chaining of APDU with a data field longer than 255 bytes.

# cla (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The CLA byte used for APDU transmission. `0x00` by default.

## Declaration

```objectivec
@property UInt8 cla;
```

## See Also

### Configuring APDU Behavior

- [useExtendedLength](useextendedlength.md): Whether to use extended length APDU.
- [useCommandChaining](usecommandchaining.md): Whether to use command chaining of APDU with a data field longer than 255 bytes.
