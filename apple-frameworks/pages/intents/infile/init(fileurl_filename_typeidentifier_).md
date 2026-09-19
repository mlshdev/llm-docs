> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/infile/init(fileurl:filename:typeidentifier:)

# init(fileURL:filename:typeIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new file object with the specified URL and identifier.

## Declaration

```swift
init(fileURL: URL, filename: String?, typeIdentifier: String?)
```

## Parameters

- `fileURL`: The URL associated with the file.
- `filename`: The name of the file.
- `typeIdentifier`: The type associated with the file.

<a id="return-value"></a>

## Return Value

A new [INFile](../infile.md) object containing the supplied information.

## See Also

### Initializing a File Object

- [init(data:filename:typeIdentifier:)](init%28data_filename_typeidentifier_%29.md): Creates a new file object with the specified data and identifier.

# fileWithFileURL:filename:typeIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new file object with the specified URL and identifier.

## Declaration

```objectivec
+ (INFile *) fileWithFileURL:(NSURL *) fileURL filename:(NSString *) filename typeIdentifier:(NSString *) typeIdentifier;
```

## Parameters

- `fileURL`: The URL associated with the file.
- `filename`: The name of the file.
- `typeIdentifier`: The type associated with the file.

<a id="return-value"></a>

## Return Value

A new [INFile](../infile.md) object containing the supplied information.

## See Also

### Initializing a File Object

- [fileWithData:filename:typeIdentifier:](init%28data_filename_typeidentifier_%29.md): Creates a new file object with the specified data and identifier.
