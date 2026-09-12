> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexchangeerror-swift.struct](https://developer.apple.com/documentation/browserkit/bebrowserdataexchangeerror-swift.struct)

# BEBrowserDataExchangeError

**Framework:** BrowserKit  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+

An error that occurs during browser data import or export operations.

## Declaration

```swift
struct BEBrowserDataExchangeError
```

<a id="overview"></a>

## Overview

This error type provides codes for failures during the transfer of browsing data, including import failures, export failures, and unknown errors.

## Topics

### Identifying error types

- [BEBrowserDataExchangeError.Code](bebrowserdataexchangeerror-swift.struct/code.md): The types of data exchange errors that can occur.
- [export](bebrowserdataexchangeerror-swift.struct/export.md): An error that indicates a failure during the export operation.
- [import](bebrowserdataexchangeerror-swift.struct/import.md): An error that indicates a failure during the import operation.
- [unknown](bebrowserdataexchangeerror-swift.struct/unknown.md): An error that indicates an unexpected failure.

### Getting error information

- [errorDomain](bebrowserdataexchangeerror-swift.struct/errordomain.md): A constant that identifies the error domain for browser data exchange errors.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [BEBrowserDataExchangeErrorDomain](bebrowserdataexchangeerrordomain.md): A constant that identifies the error domain for browser data exchange errors.
