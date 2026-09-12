> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityintenttostore](https://developer.apple.com/documentation/passkit/pkidentityintenttostore)

# PKIdentityIntentToStore (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents your intention to store an identity element or values derived from an identity element.

## Declaration

```swift
class PKIdentityIntentToStore
```

## Topics

### Creating a default intent

- [mayStore(days:)](pkidentityintenttostore/maystore%28days_%29.md): An object that indicates your app may store a data element for the length of time you specify.

### Getting default intents

- [mayStore](pkidentityintenttostore/maystore.md): An object that indicates your app may store a data element for an indefinite length of time.
- [willNotStore](pkidentityintenttostore/willnotstore.md): An object that indicates your app won’t store a data element any longer than necessary to complete a request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Describing a document

- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md): A type that describes the structure and behavior of an identity document.

# PKIdentityIntentToStore (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object that represents your intention to store an identity element or values derived from an identity element.

## Declaration

```objectivec
@interface PKIdentityIntentToStore : NSObject
```

## Topics

### Creating a default intent

- [mayStoreIntentForDays:](pkidentityintenttostore/maystore%28days_%29.md): An object that indicates your app may store a data element for the length of time you specify.

### Getting default intents

- [mayStoreIntent](pkidentityintenttostore/maystore.md): An object that indicates your app may store a data element for an indefinite length of time.
- [willNotStoreIntent](pkidentityintenttostore/willnotstore.md): An object that indicates your app won’t store a data element any longer than necessary to complete a request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Describing a document

- [PKIdentityDriversLicenseDescriptor](pkidentitydriverslicensedescriptor.md): An object for requesting information from a user’s driver’s license or equivalent document.
- [PKIdentityDocumentDescriptor](pkidentitydocumentdescriptor.md): A type that describes the structure and behavior of an identity document.
