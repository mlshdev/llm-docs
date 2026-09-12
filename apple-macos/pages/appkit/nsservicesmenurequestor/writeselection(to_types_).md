> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsservicesmenurequestor/writeselection(to:types:)](https://developer.apple.com/documentation/appkit/nsservicesmenurequestor/writeselection(to:types:))

# writeSelection(to:types:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the current selection to the pasteboard.

## Declaration

```swift
optional func writeSelection(to pboard: NSPasteboard, types: [NSPasteboard.PasteboardType]) -> Bool
```

## Parameters

- `pboard`: The pasteboard to receive your data.
- `types`: An array of `NSString` objects listing the types of data that you should write to the pasteboard. You should write data to the pasteboard for as many of the types as you support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your implementation was able to write one or more types to the pasteboard; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

A [writeSelection(to:types:)](writeselection%28to_types_%29.md) message is sent to the first responder when the user chooses a command from the Services menu, but only if the receiver didn’t return `nil` to a previous [validRequestor(forSendType:returnType:)](../nsresponder/validrequestor%28forsendtype_returntype_%29.md) message.

After your method writes the data to the pasteboard, a remote message is sent to the application that provides the service the user requested. If the service provider supplies return data to replace the selection, the first responder will then receive a [readSelection(from:)](readselection%28from_%29.md) message.

## See Also

### Related Documentation

- [validRequestor(forSendType:returnType:)](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.

### Working with Pasteboards

- [readSelection(from:)](readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.

# writeSelectionToPasteboard:types: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the current selection to the pasteboard.

## Declaration

```objectivec
- (BOOL) writeSelectionToPasteboard:(NSPasteboard *) pboard types:(NSArray<NSString *> *) types;
```

## Parameters

- `pboard`: The pasteboard to receive your data.
- `types`: An array of `NSString` objects listing the types of data that you should write to the pasteboard. You should write data to the pasteboard for as many of the types as you support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if your implementation was able to write one or more types to the pasteboard; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

A [writeSelectionToPasteboard:types:](writeselection%28to_types_%29.md) message is sent to the first responder when the user chooses a command from the Services menu, but only if the receiver didn’t return `nil` to a previous [validRequestorForSendType:returnType:](../nsresponder/validrequestor%28forsendtype_returntype_%29.md) message.

After your method writes the data to the pasteboard, a remote message is sent to the application that provides the service the user requested. If the service provider supplies return data to replace the selection, the first responder will then receive a [readSelectionFromPasteboard:](readselection%28from_%29.md) message.

## See Also

### Related Documentation

- [validRequestorForSendType:returnType:](../nsresponder/validrequestor%28forsendtype_returntype_%29.md): Overridden by subclasses to determine what services are available.

### Working with Pasteboards

- [readSelectionFromPasteboard:](readselection%28from_%29.md): Reads data from the pasteboard and uses it to replace the current selection.
