> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/indexname()](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/indexname())

# indexName() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the index’s name.

## Declaration

```swift
func indexName() -> String?
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring the Index

- [isIndexingEnabled](isindexingenabled.md): A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.
- [domainIdentifier()](domainidentifier%28%29.md): Returns the domain identifier.

# indexName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the index’s name.

## Declaration

```objectivec
- (NSString *) indexName;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

## See Also

### Configuring the Index

- [indexingEnabled](isindexingenabled.md): A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.
- [domainIdentifier](domainidentifier%28%29.md): Returns the domain identifier.
