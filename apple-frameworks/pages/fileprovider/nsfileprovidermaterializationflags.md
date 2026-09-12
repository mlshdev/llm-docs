> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermaterializationflags](https://developer.apple.com/documentation/fileprovider/nsfileprovidermaterializationflags)

# NSFileProviderMaterializationFlags (Swift)

**Framework:** File Provider  
**Kind:** Structure  
**Availability:** macOS 12.3+

Flags that provides additional information about the provided content.

## Declaration

```swift
struct NSFileProviderMaterializationFlags
```

## Topics

### Accessing Flags

- [knownSparseRanges](nsfileprovidermaterializationflags/knownsparseranges.md): A flag indicating that the system should consider the file fully materialized, even if it’s a sparse file.

### Creating Flags

- [init(rawValue:)](nsfileprovidermaterializationflags/init%28rawvalue_%29.md): Creates a new materialization flag.

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
- [NSFileProviderFetchContentsOptions](nsfileproviderfetchcontentsoptions.md): Options for fetching a range of data from a file.

# NSFileProviderMaterializationFlags (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** macOS 12.3+

Flags that provides additional information about the provided content.

## Declaration

```objectivec
enum NSFileProviderMaterializationFlags : NSUInteger;
```

## Topics

### Accessing Flags

- [NSFileProviderMaterializationFlagsKnownSparseRanges](nsfileprovidermaterializationflags/knownsparseranges.md): A flag indicating that the system should consider the file fully materialized, even if it’s a sparse file.

## See Also

### Fetching Ranges from a File

- [fetchPartialContentsForItemWithIdentifier:version:request:minimalRange:aligningTo:options:completionHandler:](nsfileproviderpartialcontentfetching/fetchpartialcontents%28for_version_request_minimalrange_aligningto_options_completionhandler_%29.md): Tells the file provider to download the requested item from remote storage.
- [NSFileProviderFetchContentsOptions](nsfileproviderfetchcontentsoptions.md): Options for fetching a range of data from a file.
