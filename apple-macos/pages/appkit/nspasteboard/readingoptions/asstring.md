> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptions/asstring](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptions/asstring)

# asString (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.6+

An option to read data from the pasteboard and convert it to a string object.

## Declaration

```swift
static var asString: NSPasteboard.ReadingOptions { get }
```

<a id="Discussion"></a>

## Discussion

AppKit puts the data in an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object.

## See Also

### Options

- [asData](asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [asPropertyList](aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
- [asKeyedArchive](askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.

# NSPasteboardReadingAsString (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 10.6+

An option to read data from the pasteboard and convert it to a string object.

## Declaration

```objectivec
NSPasteboardReadingAsString
```

<a id="Discussion"></a>

## Discussion

AppKit puts the data in an [NSString](https://developer.apple.com/documentation/foundation/nsstring) object.

## See Also

### Options

- [NSPasteboardReadingAsData](asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [NSPasteboardReadingAsPropertyList](aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
- [NSPasteboardReadingAsKeyedArchive](askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.
