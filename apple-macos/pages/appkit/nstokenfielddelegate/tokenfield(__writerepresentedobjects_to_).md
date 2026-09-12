> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:writerepresentedobjects:to:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:writerepresentedobjects:to:))

# tokenField(\_:writeRepresentedObjects:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent so the delegate can write represented objects to the pasteboard corresponding to a given array of display strings.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, writeRepresentedObjects objects: [Any], to pboard: NSPasteboard) -> Bool
```

## Parameters

- `tokenField`: The token field that sent the message.
- `objects`: An array of represented objects associated with the token field.
- `pboard`: The pasteboard to which to write the represented objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate writes the represented objects to the pasteboard, [false](https://developer.apple.com/documentation/swift/false) otherwise. If [false](https://developer.apple.com/documentation/swift/false), the token field writes the display strings to the [NSStringPboardType](../nsstringpboardtype.md) pasteboard.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenField(\_:readFrom:)](tokenfield%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from the specified pasteboard.

# tokenField:writeRepresentedObjects:toPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sent so the delegate can write represented objects to the pasteboard corresponding to a given array of display strings.

## Declaration

```objectivec
- (BOOL) tokenField:(NSTokenField *) tokenField writeRepresentedObjects:(NSArray *) objects toPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `objects`: An array of represented objects associated with the token field.
- `pboard`: The pasteboard to which to write the represented objects.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the delegate writes the represented objects to the pasteboard, [false](https://developer.apple.com/documentation/swift/false) otherwise. If [false](https://developer.apple.com/documentation/swift/false), the token field writes the display strings to the [NSStringPboardType](../nsstringpboardtype.md) pasteboard.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenField:readFromPasteboard:](tokenfield%28__readfrom_%29.md): Allows the delegate to return an array of objects representing the data read from the specified pasteboard.
