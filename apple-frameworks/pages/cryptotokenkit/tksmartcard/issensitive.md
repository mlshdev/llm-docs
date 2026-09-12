> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/issensitive](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/issensitive)

# isSensitive (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.

## Declaration

```swift
var isSensitive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), any sessions established for the receiver will begin and end by sending a reset command to the Smart Card. This is recommended anytime potentially sensitive information is transferred.

## See Also

### Configuring the Smart Card

- [slot](slot.md): The slot in which the Smart Card is inserted.
- [isValid](isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [context](context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

# sensitive (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.

## Declaration

```objectivec
@property BOOL sensitive;
```

<a id="Discussion"></a>

## Discussion

When this property is set to [true](https://developer.apple.com/documentation/swift/true), any sessions established for the receiver will begin and end by sending a reset command to the Smart Card. This is recommended anytime potentially sensitive information is transferred.

## See Also

### Configuring the Smart Card

- [slot](slot.md): The slot in which the Smart Card is inserted.
- [valid](isvalid.md): Whether the Smart Card is valid and accessible from its slot.
- [context](context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.
