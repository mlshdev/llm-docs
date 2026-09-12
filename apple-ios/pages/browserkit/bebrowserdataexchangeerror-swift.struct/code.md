> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexchangeerror-swift.struct/code](https://developer.apple.com/documentation/browserkit/bebrowserdataexchangeerror-swift.struct/code)

# BEBrowserDataExchangeError.Code (Swift)

**Framework:** BrowserKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The types of data exchange errors that can occur.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

The static [BEBrowserDataExchangeError](../bebrowserdataexchangeerror-swift.struct.md) members are of this type.

## Topics

### Identifying error types

- [BEBrowserDataExchangeError.Code.export](code/export.md): An error that indicates a failure during the export operation.
- [BEBrowserDataExchangeError.Code.import](code/import.md): An error that indicates a failure during the import operation.
- [BEBrowserDataExchangeError.Code.unknown](code/unknown.md): An error that indicates an unexpected failure.

### Initializing an error code

- [init(rawValue:)](code/init%28rawvalue_%29.md): Initializes an error code with a value that represents the underlying type of error.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying error types

- [export](export.md): An error that indicates a failure during the export operation.
- [import](import.md): An error that indicates a failure during the import operation.
- [unknown](unknown.md): An error that indicates an unexpected failure.

# BEBrowserDataExchangeError (Objective-C)

**Framework:** BrowserKit  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The types of data exchange errors that can occur.

## Declaration

```objectivec
enum BEBrowserDataExchangeError : NSInteger;
```

<a id="overview"></a>

## Overview

The static [BEBrowserDataExchangeError](../bebrowserdataexchangeerror-swift.struct.md) members are of this type.

## Topics

### Identifying error types

- [BEBrowserDataDataExchangeErrorExport](code/export.md): An error that indicates a failure during the export operation.
- [BEBrowserDataDataExchangeErrorImport](code/import.md): An error that indicates a failure during the import operation.
- [BEBrowserDataDataExchangeErrorUnknown](code/unknown.md): An error that indicates an unexpected failure.
