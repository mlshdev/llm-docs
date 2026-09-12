> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/isindexingenabled](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/isindexingenabled)

# isIndexingEnabled (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.

## Declaration

```swift
var isIndexingEnabled: Bool { get }
```

## See Also

### Configuring the Index

- [domainIdentifier()](domainidentifier%28%29.md): Returns the domain identifier.
- [indexName()](indexname%28%29.md): Returns the index’s name.

# indexingEnabled (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether Core Data is currently updating the Core Spotlight index with the persistent store’s entities.

## Declaration

```objectivec
@property (readonly, getter=isIndexingEnabled) BOOL indexingEnabled;
```

## See Also

### Configuring the Index

- [domainIdentifier](domainidentifier%28%29.md): Returns the domain identifier.
- [indexName](indexname%28%29.md): Returns the index’s name.
