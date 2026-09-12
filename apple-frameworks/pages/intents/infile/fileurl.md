> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infile/fileurl](https://developer.apple.com/documentation/intents/infile/fileurl)

# fileURL (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The URL that describes the location of the file.

## Declaration

```swift
var fileURL: URL? { get }
```

## See Also

### Getting the File Information

- [filename](filename.md): The name of the file.
- [data](data.md): The data associated with a file.
- [typeIdentifier](typeidentifier.md): The type of the file.

# fileURL (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The URL that describes the location of the file.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURL * fileURL;
```

```objectivec
@property (atomic, strong, readonly, nullable) NSURL * fileURL;
```

## See Also

### Getting the File Information

- [filename](filename.md): The name of the file.
- [data](data.md): The data associated with a file.
- [typeIdentifier](typeidentifier.md): The type of the file.
