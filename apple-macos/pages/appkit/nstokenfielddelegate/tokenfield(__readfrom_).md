> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstokenfielddelegate/tokenfield(_:readfrom:)](https://developer.apple.com/documentation/appkit/nstokenfielddelegate/tokenfield(_:readfrom:))

# tokenField(\_:readFrom:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to return an array of objects representing the data read from the specified pasteboard.

## Declaration

```swift
@MainActor optional func tokenField(_ tokenField: NSTokenField, readFrom pboard: NSPasteboard) -> [Any]?
```

## Parameters

- `tokenField`: The token field that sent the message.
- `pboard`: The pasteboard from which to read the represented objects.

<a id="return-value"></a>

## Return Value

An array of represented objects created from the pasteboard data.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenField(\_:writeRepresentedObjects:to:)](tokenfield%28__writerepresentedobjects_to_%29.md): Sent so the delegate can write represented objects to the pasteboard corresponding to a given array of display strings.

# tokenField:readFromPasteboard: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows the delegate to return an array of objects representing the data read from the specified pasteboard.

## Declaration

```objectivec
- (NSArray *) tokenField:(NSTokenField *) tokenField readFromPasteboard:(NSPasteboard *) pboard;
```

## Parameters

- `tokenField`: The token field that sent the message.
- `pboard`: The pasteboard from which to read the represented objects.

<a id="return-value"></a>

## Return Value

An array of represented objects created from the pasteboard data.

## See Also

### Reading To and Writing From the Pasteboard

- [tokenField:writeRepresentedObjects:toPasteboard:](tokenfield%28__writerepresentedobjects_to_%29.md): Sent so the delegate can write represented objects to the pasteboard corresponding to a given array of display strings.
