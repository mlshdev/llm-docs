> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/usecommandchaining](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/usecommandchaining)

# useCommandChaining (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether to use command chaining of APDU with a data field longer than 255 bytes.

## Declaration

```swift
var useCommandChaining: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true) when the Smart Card ATR announces that command chaining is supported.

## See Also

### Configuring APDU Behavior

- [cla](cla.md): The CLA byte used for APDU transmission. `0x00` by default.
- [useExtendedLength](useextendedlength.md): Whether to use extended length APDU.

# useCommandChaining (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether to use command chaining of APDU with a data field longer than 255 bytes.

## Declaration

```objectivec
@property BOOL useCommandChaining;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true) when the Smart Card ATR announces that command chaining is supported.

## See Also

### Configuring APDU Behavior

- [cla](cla.md): The CLA byte used for APDU transmission. `0x00` by default.
- [useExtendedLength](useextendedlength.md): Whether to use extended length APDU.
