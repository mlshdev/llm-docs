> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/infile/data

# data (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The data associated with a file.

## Declaration

```swift
var data: Data { get }
```

## See Also

### Getting the File Information

- [filename](filename.md): The name of the file.
- [fileURL](fileurl.md): The URL that describes the location of the file.
- [typeIdentifier](typeidentifier.md): The type of the file.

# data (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The data associated with a file.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * data;
```

```objectivec
@property (atomic, copy, readonly) NSData * data;
```

## See Also

### Getting the File Information

- [filename](filename.md): The name of the file.
- [fileURL](fileurl.md): The URL that describes the location of the file.
- [typeIdentifier](typeidentifier.md): The type of the file.
