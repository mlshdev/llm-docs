> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderstringsearchrequest](https://developer.apple.com/documentation/fileprovider/nsfileproviderstringsearchrequest)

# NSFileProviderStringSearchRequest (Swift)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** macOS 26.0+

A type that contains details of a string-based search request.

## Declaration

```swift
class NSFileProviderStringSearchRequest
```

## Topics

### Working with request properties

- [query](nsfileproviderstringsearchrequest/query.md): A plaintext string, representing the query a person entered into the system search UI.

### Instance Properties

- [desiredNumberOfResults](nsfileproviderstringsearchrequest/desirednumberofresults.md): How many results the system is requesting. This is a hint to the extension, to help avoid unnecessary work. The extension may return more results than this.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Implementing search

- [searchEnumerator(for:)](nsfileprovidersearching/searchenumerator%28for_%29.md): Provides an object that enumerates over search results, in response to a call from the system.
- [NSFileProviderSearchEnumerator](nsfileprovidersearchenumerator.md): A protocol that defines methods for providing search results and canceling searches.

# NSFileProviderStringSearchRequest (Objective-C)

**Framework:** File Provider  
**Kind:** Class  
**Availability:** macOS 26.0+

A type that contains details of a string-based search request.

## Declaration

```objectivec
@interface NSFileProviderStringSearchRequest : NSObject
```

## Topics

### Working with request properties

- [query](nsfileproviderstringsearchrequest/query.md): A plaintext string, representing the query a person entered into the system search UI.

### Instance Properties

- [desiredNumberOfResults](nsfileproviderstringsearchrequest/desirednumberofresults.md): How many results the system is requesting. This is a hint to the extension, to help avoid unnecessary work. The extension may return more results than this.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Implementing search

- [searchEnumeratorForStringSearchRequest:](nsfileprovidersearching/searchenumerator%28for_%29.md): Provides an object that enumerates over search results, in response to a call from the system.
- [NSFileProviderSearchEnumerator](nsfileprovidersearchenumerator.md): A protocol that defines methods for providing search results and canceling searches.
