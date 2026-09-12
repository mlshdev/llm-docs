> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abimageclient](https://developer.apple.com/documentation/addressbook/abimageclient)

# ABImageClient (Swift)

**Framework:** Address Book  
**Kind:** Protocol  
**Availability:** macOS

Methods for responding to a request to load images associated with a contact.

## Declaration

```swift
protocol ABImageClient : NSObjectProtocol
```

## Topics

### Loading an image

- [consumeImageData(\_:forTag:)](abimageclient/consumeimagedata%28__fortag_%29.md): Gets the image data for the given tag that was initiated by an asynchronous fetch.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

# ABImageClient (Objective-C)

**Framework:** Address Book  
**Kind:** Protocol  
**Availability:** macOS

Methods for responding to a request to load images associated with a contact.

## Declaration

```objectivec
@protocol ABImageClient <NSObject>
```

## Topics

### Loading an image

- [consumeImageData:forTag:](abimageclient/consumeimagedata%28__fortag_%29.md): Gets the image data for the given tag that was initiated by an asynchronous fetch.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Data Types

- [ABPerson](abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABRecord](abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.
