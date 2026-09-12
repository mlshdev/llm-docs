> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnfetchresult](https://developer.apple.com/documentation/contacts/cnfetchresult)

# CNFetchResult (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that represents the result of a change-history fetch request.

## Declaration

```swift
class CNFetchResult<ValueType> where ValueType : AnyObject
```

## Topics

### Accessing results

- [currentHistoryToken](cnfetchresult/currenthistorytoken.md): An opaque token that indicates a point in history in the user’s Contacts database.
- [value](cnfetchresult/value.md): The result of the fetch request, expressed as the value type you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fetch and save requests

- [CNContactFetchRequest](cncontactfetchrequest.md): An object that defines the options to use when fetching contacts.
- [CNFetchRequest](cnfetchrequest.md): The base class for contact fetch requests.
- [CNSaveRequest](cnsaverequest.md): An object that collects the changes you want to save to the user’s contacts database.

# CNFetchResult (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that represents the result of a change-history fetch request.

## Declaration

```objectivec
@interface CNFetchResult : NSObject
```

## Topics

### Accessing results

- [currentHistoryToken](cnfetchresult/currenthistorytoken.md): An opaque token that indicates a point in history in the user’s Contacts database.
- [value](cnfetchresult/value.md): The result of the fetch request, expressed as the value type you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Fetch and save requests

- [CNContactFetchRequest](cncontactfetchrequest.md): An object that defines the options to use when fetching contacts.
- [CNFetchRequest](cnfetchrequest.md): The base class for contact fetch requests.
- [CNSaveRequest](cnsaverequest.md): An object that collects the changes you want to save to the user’s contacts database.
