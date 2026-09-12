> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptions/aspropertylist](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptions/aspropertylist)

# asPropertyList (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

An option to read data from the pasteboard and unserialize it as a property list.

## Declaration

```swift
static var asPropertyList: NSPasteboard.ReadingOptions { get }
```

## See Also

### Options

- [asData](asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [asString](asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [asKeyedArchive](askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.

# NSPasteboardReadingAsPropertyList (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

An option to read data from the pasteboard and unserialize it as a property list.

## Declaration

```objectivec
NSPasteboardReadingAsPropertyList
```

## See Also

### Options

- [NSPasteboardReadingAsData](asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [NSPasteboardReadingAsString](asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [NSPasteboardReadingAsKeyedArchive](askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.
