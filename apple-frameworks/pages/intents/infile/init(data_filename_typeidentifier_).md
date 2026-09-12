> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/infile/init(data:filename:typeidentifier:)](https://developer.apple.com/documentation/intents/infile/init(data:filename:typeidentifier:))

# init(data:filename:typeIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new file object with the specified data and identifier.

## Declaration

```swift
init(data: Data, filename: String, typeIdentifier: String?)
```

## Parameters

- `data`: The data associated with the file.
- `filename`: The name of the file.
- `typeIdentifier`: The type associated with the file.

<a id="return-value"></a>

## Return Value

A new [INFile](../infile.md) object containing the supplied information.

## See Also

### Initializing a File Object

- [init(fileURL:filename:typeIdentifier:)](init%28fileurl_filename_typeidentifier_%29.md): Creates a new file object with the specified URL and identifier.

# fileWithData:filename:typeIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new file object with the specified data and identifier.

## Declaration

```objectivec
+ (INFile *) fileWithData:(NSData *) data filename:(NSString *) filename typeIdentifier:(NSString *) typeIdentifier;
```

## Parameters

- `data`: The data associated with the file.
- `filename`: The name of the file.
- `typeIdentifier`: The type associated with the file.

<a id="return-value"></a>

## Return Value

A new [INFile](../infile.md) object containing the supplied information.

## See Also

### Initializing a File Object

- [fileWithFileURL:filename:typeIdentifier:](init%28fileurl_filename_typeidentifier_%29.md): Creates a new file object with the specified URL and identifier.
