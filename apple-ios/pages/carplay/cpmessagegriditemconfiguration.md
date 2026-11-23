> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagegriditemconfiguration

# CPMessageGridItemConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that associates message-related information with a grid button.

## Declaration

```swift
class CPMessageGridItemConfiguration
```

<a id="overview"></a>

## Overview

Add a `CPMessageGridItemConfiguration` object to a [CPGridButton](cpgridbutton.md) that represents one of your app’s conversations. This type stores an app-specific conversation identifier, which you can use to look up the conversation in your app’s data structures. It also contains a Boolean value to indicate whether the conversation contains unread messages.

## Topics

### Creating a configuration object

- [init(conversationIdentifier:unread:)](cpmessagegriditemconfiguration/init%28conversationidentifier_unread_%29.md): Creates the configuration object with a conversation identifier and Boolean value.

### Getting the conversation identifier

- [conversationIdentifier](cpmessagegriditemconfiguration/conversationidentifier.md): The string you use to uniquely identify the conversation in your app.

### Updating the message’s unread status

- [isUnread](cpmessagegriditemconfiguration/isunread.md): A Boolean value that indicates whether the conversation contains unread messages.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Grids

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPGridButton](cpgridbutton.md): A menu item button displayed on a grid template.
- [CPGridTemplateMaximumItems](cpgridtemplatemaximumitems.md): The maximum number of buttons that a grid template displays.

# CPMessageGridItemConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that associates message-related information with a grid button.

## Declaration

```objectivec
@interface CPMessageGridItemConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Add a `CPMessageGridItemConfiguration` object to a [CPGridButton](cpgridbutton.md) that represents one of your app’s conversations. This type stores an app-specific conversation identifier, which you can use to look up the conversation in your app’s data structures. It also contains a Boolean value to indicate whether the conversation contains unread messages.

## Topics

### Creating a configuration object

- [initWithConversationIdentifier:unread:](cpmessagegriditemconfiguration/init%28conversationidentifier_unread_%29.md): Creates the configuration object with a conversation identifier and Boolean value.

### Getting the conversation identifier

- [conversationIdentifier](cpmessagegriditemconfiguration/conversationidentifier.md): The string you use to uniquely identify the conversation in your app.

### Updating the message’s unread status

- [unread](cpmessagegriditemconfiguration/isunread.md): A Boolean value that indicates whether the conversation contains unread messages.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Grids

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPGridButton](cpgridbutton.md): A menu item button displayed on a grid template.
- [CPGridTemplateMaximumItems](cpgridtemplatemaximumitems.md): The maximum number of buttons that a grid template displays.
