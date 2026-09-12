> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infile](https://developer.apple.com/documentation/intents/infile)

# INFile (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a file.

## Declaration

```swift
class INFile
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

## Topics

### Initializing a File Object

- [init(data:filename:typeIdentifier:)](infile/init%28data_filename_typeidentifier_%29.md): Creates a new file object with the specified data and identifier.
- [init(fileURL:filename:typeIdentifier:)](infile/init%28fileurl_filename_typeidentifier_%29.md): Creates a new file object with the specified URL and identifier.

### Getting the File Information

- [filename](infile/filename.md): The name of the file.
- [data](infile/data.md): The data associated with a file.
- [fileURL](infile/fileurl.md): The URL that describes the location of the file.
- [typeIdentifier](infile/typeidentifier.md): The type of the file.

### Initializers

- [init(coder:)](infile/init%28coder_%29.md)

### Instance Properties

- [removedOnCompletion](infile/removedoncompletion.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# INFile (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a file.

## Declaration

```objectivec
@interface INFile : NSObject
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

## Topics

### Initializing a File Object

- [fileWithData:filename:typeIdentifier:](infile/init%28data_filename_typeidentifier_%29.md): Creates a new file object with the specified data and identifier.
- [fileWithFileURL:filename:typeIdentifier:](infile/init%28fileurl_filename_typeidentifier_%29.md): Creates a new file object with the specified URL and identifier.

### Getting the File Information

- [filename](infile/filename.md): The name of the file.
- [data](infile/data.md): The data associated with a file.
- [fileURL](infile/fileurl.md): The URL that describes the location of the file.
- [typeIdentifier](infile/typeidentifier.md): The type of the file.

### Instance Properties

- [removedOnCompletion](infile/removedoncompletion.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)
