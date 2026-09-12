> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferencedescriptor](https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor)

# EKVirtualConferenceDescriptor (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Details about a virtual conference that uses a custom room type.

## Declaration

```swift
class EKVirtualConferenceDescriptor
```

<a id="overview"></a>

## Overview

When users add events to their calendars and use one of the room types that your provider defines, EventKit requests a virtual conference descriptor from your provider. Each virtual conference descriptor contains:

- A user-visible name for the virtual conference
- One or more URLs that the users open to join the virtual conference
- Optional details about the conference that may be helpful to users

Calendar uses the first URL that you provide as the preferred way for users to join a virtual conference and displays additional URLs as links in the virtual conference details.

> **Important**

>  Events that use your virtual conference descriptors may sync to other devices where your app isn’t installed. To support links to your virtual conference regardless of whether your app is installed, adopt universal links in your app. Universal links let you specify HTTP URLs that open your app if it’s installed or open a corresponding web page if it’s not. For more information about adopting universal links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## Topics

### Creating Conference Descriptors

- [init(title:urlDescriptors:conferenceDetails:)](ekvirtualconferencedescriptor/init%28title_urldescriptors_conferencedetails_%29-4yf7.md): Creates an object that describes a virtual conference, including a name and URL to join the conference.

### Configuring Virtual Conferences

- [title](ekvirtualconferencedescriptor/title.md): The user-visible name of the virtual conference.
- [urlDescriptors](ekvirtualconferencedescriptor/urldescriptors.md): An array that contains objects with details about where to join the virtual conference.
- [EKVirtualConferenceURLDescriptor](ekvirtualconferenceurldescriptor.md): Details about how users join a virtual conference, including a title and URL.
- [conferenceDetails](ekvirtualconferencedescriptor/conferencedetails.md): Additional information about the conference that users may find helpful.

### Initializers

- [init(title:URLDescriptors:conferenceDetails:)](ekvirtualconferencedescriptor/init%28title_urldescriptors_conferencedetails_%29-1a9zt.md)

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

### Virtual conferences

- [Implementing a virtual conference extension](implementing-a-virtual-conference-extension.md): Support adding a virtual conference room to an event in Calendar.
- [EKVirtualConferenceProvider](ekvirtualconferenceprovider.md): An object that associates virtual conferencing details with an event object in a user’s calendar.
- [EKVirtualConferenceRoomTypeDescriptor](ekvirtualconferenceroomtypedescriptor.md): Details about a room where virtual conferences take place.

# EKVirtualConferenceDescriptor (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Details about a virtual conference that uses a custom room type.

## Declaration

```objectivec
@interface EKVirtualConferenceDescriptor : NSObject
```

<a id="overview"></a>

## Overview

When users add events to their calendars and use one of the room types that your provider defines, EventKit requests a virtual conference descriptor from your provider. Each virtual conference descriptor contains:

- A user-visible name for the virtual conference
- One or more URLs that the users open to join the virtual conference
- Optional details about the conference that may be helpful to users

Calendar uses the first URL that you provide as the preferred way for users to join a virtual conference and displays additional URLs as links in the virtual conference details.

> **Important**

>  Events that use your virtual conference descriptors may sync to other devices where your app isn’t installed. To support links to your virtual conference regardless of whether your app is installed, adopt universal links in your app. Universal links let you specify HTTP URLs that open your app if it’s installed or open a corresponding web page if it’s not. For more information about adopting universal links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## Topics

### Creating Conference Descriptors

- [initWithTitle:URLDescriptors:conferenceDetails:](ekvirtualconferencedescriptor/init%28title_urldescriptors_conferencedetails_%29-4yf7.md): Creates an object that describes a virtual conference, including a name and URL to join the conference.

### Configuring Virtual Conferences

- [title](ekvirtualconferencedescriptor/title.md): The user-visible name of the virtual conference.
- [URLDescriptors](ekvirtualconferencedescriptor/urldescriptors.md): An array that contains objects with details about where to join the virtual conference.
- [EKVirtualConferenceURLDescriptor](ekvirtualconferenceurldescriptor.md): Details about how users join a virtual conference, including a title and URL.
- [conferenceDetails](ekvirtualconferencedescriptor/conferencedetails.md): Additional information about the conference that users may find helpful.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Virtual conferences

- [EKVirtualConferenceProvider](ekvirtualconferenceprovider.md): An object that associates virtual conferencing details with an event object in a user’s calendar.
- [EKVirtualConferenceRoomTypeDescriptor](ekvirtualconferenceroomtypedescriptor.md): Details about a room where virtual conferences take place.
