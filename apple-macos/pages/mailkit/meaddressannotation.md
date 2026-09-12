> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meaddressannotation](https://developer.apple.com/documentation/mailkit/meaddressannotation)

# MEAddressAnnotation (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that indicates the validity of an email address.

## Declaration

```swift
class MEAddressAnnotation
```

<a id="overview"></a>

## Overview

Mail displays the status of an annotation as part of the address tokens in the To, Cc, and Bcc fields using a status icon and color.

## Topics

### Specifying Email Address Validity

- [success(withLocalizedDescription:)](meaddressannotation/success%28withlocalizeddescription_%29.md): Indicates an address is valid and correct.
- [warning(withLocalizedDescription:)](meaddressannotation/warning%28withlocalizeddescription_%29.md): Indicates an address may be invalid or needs attention.
- [error(withLocalizedDescription:)](meaddressannotation/error%28withlocalizeddescription_%29.md): Indicates an address is invalid and may result in failure to deliver a message.

### Initializers

- [init(coder:)](meaddressannotation/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Annotating Email Address Tokens

- [annotateAddressesForSession(\_:completion:)](mecomposesessionhandler/annotateaddressesforsession%28__completion_%29.md): Indicates whether recipients in the compose window are valid or not.

# MEAddressAnnotation (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that indicates the validity of an email address.

## Declaration

```objectivec
@interface MEAddressAnnotation : NSObject
```

<a id="overview"></a>

## Overview

Mail displays the status of an annotation as part of the address tokens in the To, Cc, and Bcc fields using a status icon and color.

## Topics

### Specifying Email Address Validity

- [successWithLocalizedDescription:](meaddressannotation/success%28withlocalizeddescription_%29.md): Indicates an address is valid and correct.
- [warningWithLocalizedDescription:](meaddressannotation/warning%28withlocalizeddescription_%29.md): Indicates an address may be invalid or needs attention.
- [errorWithLocalizedDescription:](meaddressannotation/error%28withlocalizeddescription_%29.md): Indicates an address is invalid and may result in failure to deliver a message.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Annotating Email Address Tokens

- [session:annotateAddressesWithCompletionHandler:](mecomposesessionhandler/annotateaddressesforsession%28__completion_%29.md): Indicates whether recipients in the compose window are valid or not.
