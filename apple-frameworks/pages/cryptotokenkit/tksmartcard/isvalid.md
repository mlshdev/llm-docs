> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/isvalid](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/isvalid)

# isValid (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the Smart Card is valid and accessible from its slot.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value-Observing to be notified for changes to accessibility, such as when a Smart Card is physically removed from its slot. For more information, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Configuring the Smart Card

- [slot](slot.md): The slot in which the Smart Card is inserted.
- [isSensitive](issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
- [context](context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.

# valid (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Whether the Smart Card is valid and accessible from its slot.

## Declaration

```objectivec
@property (readonly) BOOL valid;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value-Observing to be notified for changes to accessibility, such as when a Smart Card is physically removed from its slot. For more information, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

## See Also

### Configuring the Smart Card

- [slot](slot.md): The slot in which the Smart Card is inserted.
- [sensitive](issensitive.md): Whether sessions established for the Smart Card should be considered sensitive. [false](https://developer.apple.com/documentation/swift/false) by default.
- [context](context.md): User-specified information. This property is automatically set to `nil` if the Smart Card is removed or another `TKSmartCard` object begins a session.
