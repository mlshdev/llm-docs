> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactrelation/init(name:)](https://developer.apple.com/documentation/contacts/cncontactrelation/init(name:))

# init(name:) (Swift)

**Framework:** Contacts  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Creates an object with the name of the related contact.

## Declaration

```swift
init(name: String)
```

## Parameters

- `name`: Name of the related contact.

<a id="Return-Value"></a>

## Return Value

Returns the initialized instance of this class.

# initWithName: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

Creates an object with the name of the related contact.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

## Parameters

- `name`: Name of the related contact.

<a id="Return-Value"></a>

## Return Value

Returns the initialized instance of this class.

## See Also

### Creating a Contact Relation Object

- [contactRelationWithName:](contactrelationwithname_.md): Instantiate a class instance with the name of the related contact.
