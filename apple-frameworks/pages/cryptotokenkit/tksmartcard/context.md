> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/context](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/context)

# context (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

## Declaration

```swift
var context: Any? { get set }
```

## See Also

### Configuring the Smart Card

- [slot](slot.md): The slot in which the Smart Card is inserted.
- [isValid](isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [isSensitive](issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.

# context (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

## Declaration

```objectivec
@property (nullable) id context;
```

## See Also

### Configuring the Smart Card

- [slot](slot.md): The slot in which the Smart Card is inserted.
- [valid](isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [sensitive](issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
