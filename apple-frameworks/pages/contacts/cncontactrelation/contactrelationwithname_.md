> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactrelation/contactrelationwithname:](https://developer.apple.com/documentation/contacts/cncontactrelation/contactrelationwithname:)

# contactRelationWithName:

**Interface language:** Objective-C

**Framework:** Contacts  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Instantiate a class instance with the name of the related contact.

## Declaration

```objectivec
+ (instancetype) contactRelationWithName:(NSString *) name;
```

## Parameters

- `name`: Name of the related contact.

<a id="Return-Value"></a>

## Return Value

Returns a new instance of this class.

## See Also

### Creating a Contact Relation Object

- [initWithName:](init%28name_%29.md): Creates an object with the name of the related contact.
