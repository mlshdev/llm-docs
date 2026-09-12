> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/urlrelationship](https://developer.apple.com/documentation/foundation/filemanager/urlrelationship)

# FileManager.URLRelationship (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the relationship between a directory and an item.

## Declaration

```swift
enum URLRelationship
```

## Topics

### URL Relationships

- [FileManager.URLRelationship.contains](urlrelationship/contains.md): The directory contains the specified item.
- [FileManager.URLRelationship.same](urlrelationship/same.md): The directory and the item are the same. This relationship occurs when the value of the [fileResourceIdentifierKey](../urlresourcekey/fileresourceidentifierkey.md) is the same for the directory and item.
- [FileManager.URLRelationship.other](urlrelationship/other.md): The directory does not contain the item and is not the same as the item.

### Initializers

- [init(rawValue:)](urlrelationship/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the relationship between items

- [getRelationship(\_:ofDirectoryAt:toItemAt:)](getrelationship%28__ofdirectoryat_toitemat_%29.md): Determines the type of relationship that exists between a directory and an item.
- [getRelationship(\_:of:in:toItemAt:)](getrelationship%28__of_in_toitemat_%29.md): Determines the type of relationship that exists between a system directory and the specified item.

# NSURLRelationship (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants indicating the relationship between a directory and an item.

## Declaration

```objectivec
enum NSURLRelationship : NSInteger;
```

## Topics

### URL Relationships

- [NSURLRelationshipContains](urlrelationship/contains.md): The directory contains the specified item.
- [NSURLRelationshipSame](urlrelationship/same.md): The directory and the item are the same. This relationship occurs when the value of the [NSURLFileResourceIdentifierKey](../urlresourcekey/fileresourceidentifierkey.md) is the same for the directory and item.
- [NSURLRelationshipOther](urlrelationship/other.md): The directory does not contain the item and is not the same as the item.

## See Also

### Getting the relationship between items

- [getRelationship:ofDirectoryAtURL:toItemAtURL:error:](getrelationship%28__ofdirectoryat_toitemat_%29.md): Determines the type of relationship that exists between a directory and an item.
- [getRelationship:ofDirectory:inDomain:toItemAtURL:error:](getrelationship%28__of_in_toitemat_%29.md): Determines the type of relationship that exists between a system directory and the specified item.
