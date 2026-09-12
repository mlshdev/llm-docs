> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferenceurldescriptor](https://developer.apple.com/documentation/eventkit/ekvirtualconferenceurldescriptor)

# EKVirtualConferenceURLDescriptor (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Details about how users join a virtual conference, including a title and URL.

## Declaration

```swift
class EKVirtualConferenceURLDescriptor
```

<a id="overview"></a>

## Overview

To let users join a virtual conference, you provide one or more URL descriptor objects in the [EKVirtualConferenceDescriptor](ekvirtualconferencedescriptor.md) for the conference. Calendar uses the first URL descriptor as the preferred way for users to join a virtual conference and displays any additional links you provide in the virtual conference details.

## Topics

### Creating URL Descriptors

- [init(title:url:)](ekvirtualconferenceurldescriptor/init%28title_url_%29-8l9d9.md): Creates a URL descriptor with the given title and URL.

### Configuring URL Descriptors

- [title](ekvirtualconferenceurldescriptor/title.md): The user-visible name of a room where virtual conferences take place, such as Personal Room or Team Room.
- [url](ekvirtualconferenceurldescriptor/url.md): The URL that users open to join a virtual conference.

### Initializers

- [init(title:URL:)](ekvirtualconferenceurldescriptor/init%28title_url_%29-alzy.md)

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

### Configuring Virtual Conferences

- [title](ekvirtualconferencedescriptor/title.md): The user-visible name of the virtual conference.
- [urlDescriptors](ekvirtualconferencedescriptor/urldescriptors.md): An array that contains objects with details about where to join the virtual conference.
- [conferenceDetails](ekvirtualconferencedescriptor/conferencedetails.md): Additional information about the conference that users may find helpful.

# EKVirtualConferenceURLDescriptor (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Details about how users join a virtual conference, including a title and URL.

## Declaration

```objectivec
@interface EKVirtualConferenceURLDescriptor : NSObject
```

<a id="overview"></a>

## Overview

To let users join a virtual conference, you provide one or more URL descriptor objects in the [EKVirtualConferenceDescriptor](ekvirtualconferencedescriptor.md) for the conference. Calendar uses the first URL descriptor as the preferred way for users to join a virtual conference and displays any additional links you provide in the virtual conference details.

## Topics

### Creating URL Descriptors

- [initWithTitle:URL:](ekvirtualconferenceurldescriptor/init%28title_url_%29-8l9d9.md): Creates a URL descriptor with the given title and URL.

### Configuring URL Descriptors

- [title](ekvirtualconferenceurldescriptor/title.md): The user-visible name of a room where virtual conferences take place, such as Personal Room or Team Room.
- [URL](ekvirtualconferenceurldescriptor/url.md): The URL that users open to join a virtual conference.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring Virtual Conferences

- [title](ekvirtualconferencedescriptor/title.md): The user-visible name of the virtual conference.
- [URLDescriptors](ekvirtualconferencedescriptor/urldescriptors.md): An array that contains objects with details about where to join the virtual conference.
- [conferenceDetails](ekvirtualconferencedescriptor/conferencedetails.md): Additional information about the conference that users may find helpful.
