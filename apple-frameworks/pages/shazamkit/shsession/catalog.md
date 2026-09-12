> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shsession/catalog](https://developer.apple.com/documentation/shazamkit/shsession/catalog)

# catalog (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.

## Declaration

```swift
var catalog: SHCatalog { get }
```

## See Also

### Reading the session properties

- [delegate](delegate.md): The object that the session calls with the result of a match request.
- [results](results-swift.property.md): The results as an asynchronous sequence of matches.
- [SHSession.Results](results-swift.struct.md): An asynchronous sequence that emits updates from a session object query.

# catalog (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The catalog object containing the reference signatures and their associated metadata that the session uses to perform matches.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) SHCatalog * catalog;
```

```objectivec
@property (atomic, strong, readonly) SHCatalog * catalog;
```

## See Also

### Reading the session properties

- [delegate](delegate.md): The object that the session calls with the result of a match request.
