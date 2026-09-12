> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptions/asdata](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptions/asdata)

# asData (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

An option to read data from the pasteboard as-is and return it as a data object.

## Declaration

```swift
static var asData: NSPasteboard.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

This is the default value. AppKit returns the data in an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object.

## See Also

### Options

- [asString](asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [asPropertyList](aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
- [asKeyedArchive](askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.

# NSPasteboardReadingAsData (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

An option to read data from the pasteboard as-is and return it as a data object.

## Declaration

```objectivec
NSPasteboardReadingAsData
```

<a id="Discussion"></a>

## Discussion

This is the default value. AppKit returns the data in an [NSData](https://developer.apple.com/documentation/foundation/nsdata) object.

## See Also

### Options

- [NSPasteboardReadingAsString](asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [NSPasteboardReadingAsPropertyList](aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
- [NSPasteboardReadingAsKeyedArchive](askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.
