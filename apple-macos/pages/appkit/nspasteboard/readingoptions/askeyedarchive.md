> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptions/askeyedarchive](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptions/askeyedarchive)

# asKeyedArchive (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

An option to read data from the pasteboard and use it to initialize the object.

## Declaration

```swift
static var asKeyedArchive: NSPasteboard.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

AppKit initializes the object using its [init(coder:)](https://developer.apple.com/documentation/foundation/nscoding/init%28coder:%29) method.

## See Also

### Options

- [asData](asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [asString](asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [asPropertyList](aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.

# NSPasteboardReadingAsKeyedArchive (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

An option to read data from the pasteboard and use it to initialize the object.

## Declaration

```objectivec
NSPasteboardReadingAsKeyedArchive
```

<a id="Discussion"></a>

## Discussion

AppKit initializes the object using its [initWithCoder:](https://developer.apple.com/documentation/foundation/nscoding/init%28coder:%29) method.

## See Also

### Options

- [NSPasteboardReadingAsData](asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [NSPasteboardReadingAsString](asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [NSPasteboardReadingAsPropertyList](aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
