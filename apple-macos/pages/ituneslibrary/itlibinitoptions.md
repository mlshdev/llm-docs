> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibinitoptions](https://developer.apple.com/documentation/ituneslibrary/itlibinitoptions)

# ITLibInitOptions (Swift)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants describe initialization options for an iTunes library.

## Declaration

```swift
enum ITLibInitOptions
```

## Topics

### Init Options

- [ITLibInitOptions.none](itlibinitoptions/none.md): No initialization options apply.
- [ITLibInitOptions.lazyLoadData](itlibinitoptions/lazyloaddata.md): iTunes library data loads upon request, rather than during initialization.

### Initializers

- [init(rawValue:)](itlibinitoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Essentials

- [init(apiVersion:)](itlibrary/init%28apiversion_%29-71e74.md): Initializes an instance of [ITLibrary](itlibrary.md) that can retrieve media entities.
- [init(apiVersion:options:)](itlibrary/init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.

# ITLibInitOptions (Objective-C)

**Framework:** iTunes Library  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

These constants describe initialization options for an iTunes library.

## Declaration

```objectivec
enum ITLibInitOptions : NSUInteger;
```

## Topics

### Init Options

- [ITLibInitOptionNone](itlibinitoptions/none.md): No initialization options apply.
- [ITLibInitOptionLazyLoadData](itlibinitoptions/lazyloaddata.md): iTunes library data loads upon request, rather than during initialization.

## See Also

### Essentials

- [initWithAPIVersion:error:](itlibrary/init%28apiversion_%29-71e74.md): Initializes an instance of [ITLibrary](itlibrary.md) that can retrieve media entities.
- [initWithAPIVersion:options:error:](itlibrary/init%28apiversion_options_%29-9eorg.md): Initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:error:](itlibrary/librarywithapiversion_error_.md): Creates and initializes an instance of `ITLibrary` that can retrieve media entities.
- [libraryWithAPIVersion:options:error:](itlibrary/librarywithapiversion_options_error_.md): Creates and initializes an instance of ITLibrary that can retrieve media entities.
