> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseprovider](https://developer.apple.com/documentation/appkit/nsfilepromiseprovider)

# NSFilePromiseProvider (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that provides a promise for the pasteboard.

## Declaration

```swift
class NSFilePromiseProvider
```

<a id="overview"></a>

## Overview

A file promise is a possible future file of a specified type.  When you’re working with drag and drop, use promises to indicate intent for future action.  Avoid loading or performing any actions on the file until the promise completes.

Use the [NSFilePromiseProvider](nsfilepromiseprovider.md) class when creating file promises. Instantiate one [NSFilePromiseProvider](nsfilepromiseprovider.md) for each file promised. Set the [fileType](nsfilepromiseprovider/filetype.md) and [delegate](nsfilepromiseprovider/delegate.md) properties before writing any [NSFilePromiseProvider](nsfilepromiseprovider.md) to the pasteboard. The file type must be a Uniform Type Identifier (UTI) that ultimately conforms to `kUTTypeData` or `kUTTypeDirectory`. The [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md) will write the promised file to the destination directory.

Optionally, you may attach a `userInfo` object of your choosing to the [NSFilePromiseProvider](nsfilepromiseprovider.md) to determine which promise is being referenced when promising multiple files under the same [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md) instance.

## Topics

### Initializers

- [init()](nsfilepromiseprovider/init%28%29.md): Initializes a file promise provider.
- [init(fileType:delegate:)](nsfilepromiseprovider/init%28filetype_delegate_%29.md): Initializes a file promise provider for a certain file type.

### Instance Properties

- [delegate](nsfilepromiseprovider/delegate.md)
- [fileType](nsfilepromiseprovider/filetype.md): The file type of the file promise provider.
- [userInfo](nsfilepromiseprovider/userinfo.md): Optional user information to pass to the file promise provider.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSPasteboardWriting](nspasteboardwriting.md)

## See Also

### File Promises

- [Supporting Drag and Drop Through File Promises](supporting-drag-and-drop-through-file-promises.md): Receive and provide file promises to support dragged app files and pasteboard operations.
- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md): A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.
- [NSFilePromiseReceiver](nsfilepromisereceiver.md): An object that receives a file promise from the pasteboard.

# NSFilePromiseProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that provides a promise for the pasteboard.

## Declaration

```objectivec
@interface NSFilePromiseProvider : NSObject
```

<a id="overview"></a>

## Overview

A file promise is a possible future file of a specified type.  When you’re working with drag and drop, use promises to indicate intent for future action.  Avoid loading or performing any actions on the file until the promise completes.

Use the [NSFilePromiseProvider](nsfilepromiseprovider.md) class when creating file promises. Instantiate one [NSFilePromiseProvider](nsfilepromiseprovider.md) for each file promised. Set the [fileType](nsfilepromiseprovider/filetype.md) and [delegate](nsfilepromiseprovider/delegate.md) properties before writing any [NSFilePromiseProvider](nsfilepromiseprovider.md) to the pasteboard. The file type must be a Uniform Type Identifier (UTI) that ultimately conforms to `kUTTypeData` or `kUTTypeDirectory`. The [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md) will write the promised file to the destination directory.

Optionally, you may attach a `userInfo` object of your choosing to the [NSFilePromiseProvider](nsfilepromiseprovider.md) to determine which promise is being referenced when promising multiple files under the same [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md) instance.

## Topics

### Initializers

- [init](nsfilepromiseprovider/init%28%29.md): Initializes a file promise provider.
- [initWithFileType:delegate:](nsfilepromiseprovider/init%28filetype_delegate_%29.md): Initializes a file promise provider for a certain file type.

### Instance Properties

- [delegate](nsfilepromiseprovider/delegate.md)
- [fileType](nsfilepromiseprovider/filetype.md): The file type of the file promise provider.
- [userInfo](nsfilepromiseprovider/userinfo.md): Optional user information to pass to the file promise provider.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSPasteboardWriting](nspasteboardwriting.md)

## See Also

### File Promises

- [Supporting Drag and Drop Through File Promises](supporting-drag-and-drop-through-file-promises.md): Receive and provide file promises to support dragged app files and pasteboard operations.
- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md): A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.
- [NSFilePromiseReceiver](nsfilepromisereceiver.md): An object that receives a file promise from the pasteboard.
