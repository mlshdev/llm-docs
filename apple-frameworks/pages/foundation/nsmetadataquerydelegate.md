> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmetadataquerydelegate](https://developer.apple.com/documentation/foundation/nsmetadataquerydelegate)

# NSMetadataQueryDelegate (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that enables the delegate of a metadata query to provide substitute results or attributes.

## Declaration

```swift
protocol NSMetadataQueryDelegate : NSObjectProtocol
```

## Topics

### Getting Query Results

- [metadataQuery(\_:replacementObjectForResultObject:)](nsmetadataquerydelegate/metadataquery%28__replacementobjectforresultobject_%29.md): Returns a different object for a given query result object.
- [metadataQuery(\_:replacementValueForAttribute:value:)](nsmetadataquerydelegate/metadataquery%28__replacementvalueforattribute_value_%29.md): Returns a different value for a given attribute and value.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### File Search

- [NSMetadataQuery](nsmetadataquery.md): A query that you perform against Spotlight metadata.
- [NSMetadataItem](nsmetadataitem.md): The metadata associated with a file.

# NSMetadataQueryDelegate (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An interface that enables the delegate of a metadata query to provide substitute results or attributes.

## Declaration

```objectivec
@protocol NSMetadataQueryDelegate <NSObject>
```

## Topics

### Getting Query Results

- [metadataQuery:replacementObjectForResultObject:](nsmetadataquerydelegate/metadataquery%28__replacementobjectforresultobject_%29.md): Returns a different object for a given query result object.
- [metadataQuery:replacementValueForAttribute:value:](nsmetadataquerydelegate/metadataquery%28__replacementvalueforattribute_value_%29.md): Returns a different value for a given attribute and value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### File Search

- [NSMetadataQuery](nsmetadataquery.md): A query that you perform against Spotlight metadata.
- [NSMetadataItem](nsmetadataitem.md): The metadata associated with a file.
