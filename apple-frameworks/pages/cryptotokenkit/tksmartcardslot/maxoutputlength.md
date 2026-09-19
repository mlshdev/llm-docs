> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslot/maxoutputlength

# maxOutputLength (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum length of output APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer from the Smart Card.

## Declaration

```swift
var maxOutputLength: Int { get }
```

## See Also

### Getting the Slot Configuration

- [name](name.md): The name of the Smart Card reader slot.
- [maxInputLength](maxinputlength.md): The maximum length of input APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer to the Smart Card.

# maxOutputLength (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum length of output APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer from the Smart Card.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger maxOutputLength;
```

## See Also

### Getting the Slot Configuration

- [name](name.md): The name of the Smart Card reader slot.
- [maxInputLength](maxinputlength.md): The maximum length of input APDU (Application Protocol Data Unit) that the Smart Card reader slot is able to transfer to the Smart Card.
