> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctsubscriberinfo](https://developer.apple.com/documentation/coretelephony/ctsubscriberinfo)

# CTSubscriberInfo (Swift)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 6.0+

An object that provides an array of cellular network subscribers.

## Declaration

```swift
class CTSubscriberInfo
```

<a id="overview"></a>

## Overview

Use the [CTSubscriber](ctsubscriber.md) instances provided by this class to identify individual subscribers by their [carrierToken](ctsubscriber/carriertoken.md) or [identifier](ctsubscriber/identifier.md) properties.

## Topics

### Getting Subscriber Information

- [subscribers()](ctsubscriberinfo/subscribers%28%29.md): Returns the cellular network subscribers.
- [subscriber()](ctsubscriberinfo/subscriber%28%29.md): Deprecated. Returns the cellular network subscribers.

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

### Subscriber information

- [CTSubscriber](ctsubscriber.md): A cellular network subscriber.
- [CTSubscriberDelegate](ctsubscriberdelegate.md): A protocol to handle changes to subscriber information.

# CTSubscriberInfo (Objective-C)

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 6.0+ · iPadOS 6.0+

An object that provides an array of cellular network subscribers.

## Declaration

```objectivec
@interface CTSubscriberInfo : NSObject
```

<a id="overview"></a>

## Overview

Use the [CTSubscriber](ctsubscriber.md) instances provided by this class to identify individual subscribers by their [carrierToken](ctsubscriber/carriertoken.md) or [identifier](ctsubscriber/identifier.md) properties.

## Topics

### Getting Subscriber Information

- [subscribers](ctsubscriberinfo/subscribers%28%29.md): Returns the cellular network subscribers.
- [subscriber](ctsubscriberinfo/subscriber%28%29.md): Deprecated. Returns the cellular network subscribers.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Subscriber information

- [CTSubscriber](ctsubscriber.md): A cellular network subscriber.
- [CTSubscriberDelegate](ctsubscriberdelegate.md): A protocol to handle changes to subscriber information.
