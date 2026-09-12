> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shcustomcatalog/init(datarepresentation:)](https://developer.apple.com/documentation/shazamkit/shcustomcatalog/init(datarepresentation:))

# init(dataRepresentation:) (Swift)

**Framework:** ShazamKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Load a @c SHCustomCatalog from data

## Declaration

```swift
init(dataRepresentation: Data) throws
```

## Parameters

- `dataRepresentation`: The data representation of the @c SHCustomCatalog

# initWithDataRepresentation:error: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Load a @c SHCustomCatalog from data

## Declaration

```objectivec
- (instancetype) initWithDataRepresentation:(NSData *) dataRepresentation error:(NSError **) error;
```

## Parameters

- `dataRepresentation`: The data representation of the @c SHCustomCatalog
- `error`: Error populated if not a valid data representation
