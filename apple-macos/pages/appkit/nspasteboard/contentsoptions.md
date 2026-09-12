> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/contentsoptions](https://developer.apple.com/documentation/appkit/nspasteboard/contentsoptions)

# NSPasteboard.ContentsOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.12+

Options for preparing the pasteboard.

## Declaration

```swift
struct ContentsOptions
```

## Topics

### Options

- [currentHostOnly](contentsoptions/currenthostonly.md): The pasteboard contents are available only on the current device, and not on any other devices.

### Initializers

- [init(rawValue:)](contentsoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Pasteboard

- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](../nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](../nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](../nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](../nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardTypeOwner](../nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

# NSPasteboardContentsOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Options for preparing the pasteboard.

## Declaration

```objectivec
enum NSPasteboardContentsOptions : NSUInteger;
```

## Topics

### Options

- [NSPasteboardContentsCurrentHostOnly](contentsoptions/currenthostonly.md): The pasteboard contents are available only on the current device, and not on any other devices.

## See Also

### Pasteboard

- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](../nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](../nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](../nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](../nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardTypeOwner](../nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.
