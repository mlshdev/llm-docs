> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderfetchcontentsoptions](https://developer.apple.com/documentation/fileprovider/nsfileproviderfetchcontentsoptions)

# NSFileProviderFetchContentsOptions (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** macOS 12.3+

Options for fetching a range of data from a file.

## Declaration

```swift
struct NSFileProviderFetchContentsOptions
```

## Topics

### Accessing Options

- [strictVersioning](nsfileproviderfetchcontentsoptions/strictversioning.md): An option that indicates the system requires an exact match of the requested item’s version.

### Creating Options

- [init(rawValue:)](nsfileproviderfetchcontentsoptions/init%28rawvalue_%29.md): Creates an option instance from the raw value.

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

### Fetching Ranges from a File

- [fetchPartialContents(for:version:request:minimalRange:aligningTo:options:completionHandler:)](nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.
- [NSFileProviderMaterializationFlags](nsfileprovidermaterializationflags.md): Flags that provides additional information about the provided content.

# NSFileProviderFetchContentsOptions (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** macOS 12.3+

Options for fetching a range of data from a file.

## Declaration

```objectivec
enum NSFileProviderFetchContentsOptions : NSUInteger;
```

## Topics

### Accessing Options

- [NSFileProviderFetchContentsOptionsStrictVersioning](nsfileproviderfetchcontentsoptions/strictversioning.md): An option that indicates the system requires an exact match of the requested item’s version.

## See Also

### Fetching Ranges from a File

- [fetchPartialContentsForItemWithIdentifier:version:request:minimalRange:aligningTo:options:completionHandler:](nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.
- [NSFileProviderMaterializationFlags](nsfileprovidermaterializationflags.md): Flags that provides additional information about the provided content.
