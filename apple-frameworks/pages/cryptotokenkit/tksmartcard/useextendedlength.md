> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/useextendedlength](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/useextendedlength)

# useExtendedLength (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether to use extended length APDU.

## Declaration

```swift
var useExtendedLength: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true) when the Smart Card slot supports transmitting extended length commands, and the ATR announces that extended length APDU is supported.

## See Also

### Configuring APDU Behavior

- [cla](cla.md): The CLA byte used for APDU transmission. `0x00` by default.
- [useCommandChaining](usecommandchaining.md): Whether to use command chaining of APDU with a data field longer than 255 bytes.

# useExtendedLength (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether to use extended length APDU.

## Declaration

```objectivec
@property BOOL useExtendedLength;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to [true](https://developer.apple.com/documentation/swift/true) when the Smart Card slot supports transmitting extended length commands, and the ATR announces that extended length APDU is supported.

## See Also

### Configuring APDU Behavior

- [cla](cla.md): The CLA byte used for APDU transmission. `0x00` by default.
- [useCommandChaining](usecommandchaining.md): Whether to use command chaining of APDU with a data field longer than 255 bytes.
