> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/urlrelationship/same](https://developer.apple.com/documentation/foundation/filemanager/urlrelationship/same)

# FileManager.URLRelationship.same (Swift)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The directory and the item are the same. This relationship occurs when the value of the [fileResourceIdentifierKey](../../urlresourcekey/fileresourceidentifierkey.md) is the same for the directory and item.

## Declaration

```swift
case same
```

## See Also

### URL Relationships

- [FileManager.URLRelationship.contains](contains.md): The directory contains the specified item.
- [FileManager.URLRelationship.other](other.md): The directory does not contain the item and is not the same as the item.

# NSURLRelationshipSame (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The directory and the item are the same. This relationship occurs when the value of the [NSURLFileResourceIdentifierKey](../../urlresourcekey/fileresourceidentifierkey.md) is the same for the directory and item.

## Declaration

```objectivec
NSURLRelationshipSame
```

## See Also

### URL Relationships

- [NSURLRelationshipContains](contains.md): The directory contains the specified item.
- [NSURLRelationshipOther](other.md): The directory does not contain the item and is not the same as the item.
