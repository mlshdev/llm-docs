> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shsession/init(catalog:)

# init(catalog:) (Swift)

**Framework:** ShazamKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new session object for matching audio in a custom catalog.

## Declaration

```swift
init(catalog: SHCatalog)
```

## Parameters

- `catalog`: The catalog that contains the reference audio signatures and their associated metadata.

## See Also

### Creating a session object

- [init()](init%28%29.md): Creates a new session object for matching songs in the Shazam Music catalog.

# initWithCatalog: (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a new session object for matching audio in a custom catalog.

## Declaration

```objectivec
- (instancetype) initWithCatalog:(SHCatalog *) catalog;
```

## Parameters

- `catalog`: The catalog that contains the reference audio signatures and their associated metadata.

## See Also

### Creating a session object

- [init](init%28%29.md): Creates a new session object for matching songs in the Shazam Music catalog.
