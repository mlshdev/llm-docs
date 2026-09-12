> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessagelayout](https://developer.apple.com/documentation/messages/msmessagelayout)

# MSMessageLayout (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.

## Declaration

```swift
class MSMessageLayout
```

<a id="overview"></a>

## Overview

You do not subclass `MSMessageLayout` or create instances of it directly. Instead, instantiate the provided concrete subclass, the [MSMessageTemplateLayout](msmessagetemplatelayout.md) class.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [MSMessageLiveLayout](msmessagelivelayout.md)
- [MSMessageTemplateLayout](msmessagetemplatelayout.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Interactive messages

- [MSMessage](msmessage.md): A custom message object.
- [MSSession](mssession.md): A session object used to create and update messages.
- [MSMessageTemplateLayout](msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.

# MSMessageLayout (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

An abstract base class that defines the appearance of [MSMessage](msmessage.md) objects in the conversation transcript.

## Declaration

```objectivec
@interface MSMessageLayout : NSObject
```

<a id="overview"></a>

## Overview

You do not subclass `MSMessageLayout` or create instances of it directly. Instead, instantiate the provided concrete subclass, the [MSMessageTemplateLayout](msmessagetemplatelayout.md) class.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [MSMessageLiveLayout](msmessagelivelayout.md)
- [MSMessageTemplateLayout](msmessagetemplatelayout.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Interactive messages

- [MSMessage](msmessage.md): A custom message object.
- [MSSession](mssession.md): A session object used to create and update messages.
- [MSMessageTemplateLayout](msmessagetemplatelayout.md): A template-based layout for custom messages.
- [MSMessageLiveLayout](msmessagelivelayout.md): A layout that provides a custom, interactive view inside the transcript.
