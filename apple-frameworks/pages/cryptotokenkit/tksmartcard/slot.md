> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/slot](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/slot)

# slot (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The slot in which the Smart Card is inserted.

## Declaration

```swift
var slot: TKSmartCardSlot { get }
```

## See Also

### Configuring the Smart Card

- [isValid](isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [isSensitive](issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
- [context](context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

# slot (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The slot in which the Smart Card is inserted.

## Declaration

```objectivec
@property (nonatomic, readonly) TKSmartCardSlot * slot;
```

## See Also

### Configuring the Smart Card

- [valid](isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [sensitive](issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
- [context](context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.
