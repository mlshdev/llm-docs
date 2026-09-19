> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/domainidentifier()

# domainIdentifier() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the domain identifier.

## Declaration

```swift
func domainIdentifier() -> String
```

<a id="Discussion"></a>

## Discussion

The default value is the persistent store’s identifier.

## See Also

### Configuring the Index

- [isIndexingEnabled](isindexingenabled.md): A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.
- [indexName()](indexname%28%29.md): Returns the index’s name.

# domainIdentifier (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the domain identifier.

## Declaration

```objectivec
- (NSString *) domainIdentifier;
```

<a id="Discussion"></a>

## Discussion

The default value is the persistent store’s identifier.

## See Also

### Configuring the Index

- [indexingEnabled](isindexingenabled.md): A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.
- [indexName](indexname%28%29.md): Returns the index’s name.
