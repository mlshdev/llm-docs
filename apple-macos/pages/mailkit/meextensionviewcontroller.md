> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/meextensionviewcontroller](https://developer.apple.com/documentation/mailkit/meextensionviewcontroller)

# MEExtensionViewController (Swift)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that manages a view for compose session and message security handlers.

## Declaration

```swift
class MEExtensionViewController
```

<a id="overview"></a>

## Overview

Create a custom subclass of [MEExtensionViewController](meextensionviewcontroller.md) to provide MailKit with a view that displays:

- Additional configuration options in a Mail compose window
- Details about the user who signed a digitally signed email message

## Relationships

### Inherits From

- [NSViewController](../appkit/nsviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSEditor](../appkit/nseditor.md)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSeguePerforming](../appkit/nssegueperforming.md)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)

# MEExtensionViewController (Objective-C)

**Framework:** MailKit  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that manages a view for compose session and message security handlers.

## Declaration

```objectivec
@interface MEExtensionViewController : NSViewController
```

<a id="overview"></a>

## Overview

Create a custom subclass of [MEExtensionViewController](meextensionviewcontroller.md) to provide MailKit with a view that displays:

- Additional configuration options in a Mail compose window
- Details about the user who signed a digitally signed email message

## Relationships

### Inherits From

- [NSViewController](../appkit/nsviewcontroller.md)
