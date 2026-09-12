> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferenceprovider](https://developer.apple.com/documentation/eventkit/ekvirtualconferenceprovider)

# EKVirtualConferenceProvider (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that associates virtual conferencing details with an event object in a user’s calendar.

## Declaration

```swift
class EKVirtualConferenceProvider
```

<a id="overview"></a>

## Overview

[EKVirtualConferenceProvider](ekvirtualconferenceprovider.md) lets apps that offer virtual conferencing services to integrate directly with events in users’ calendars. To add this support to your app, add a virtual conference extension. The principal class of the app extension is a custom subclass of [EKVirtualConferenceProvider](ekvirtualconferenceprovider.md) that you create that provides the following:

- A list of room types where events take place, such as Personal Room or Team Room
- A descriptor for a virtual conference, including a user-visible title, one or more URLs, and additional details

<a id="Providing-Room-Details"></a>

### Providing Room Details

To provide a list of rooms, you provide one or more *room type descriptors* that contain details about where a virtual conference takes place. Each room type descriptor includes a user-visible title and an identifier that you choose. EventKit calls [fetchAvailableRoomTypes(completionHandler:)](ekvirtualconferenceprovider/fetchavailableroomtypes%28completionhandler_%29.md) on your virtual conference provider to retrieve an array of [EKVirtualConferenceRoomTypeDescriptor](ekvirtualconferenceroomtypedescriptor.md) objects.

<a id="Providing-Conference-Details"></a>

### Providing Conference Details

After EventKit has the room type descriptors, users can add an event that specifies one of your rooms as the location. To identify the virtual conference event, your virtual conference provider creates a *virtual conference descriptor* that contains details about the virtual conference. The conference descriptor contains the following:

- One or more [EKVirtualConferenceURLDescriptor](ekvirtualconferenceurldescriptor.md) objects to specify how the user joins the virtual conference
- An optional user-visible title that EventKit may display
- An optional user-visible string with details about the virtual conference that EventKit displays

EventKit calls [fetchVirtualConference(identifier:completionHandler:)](ekvirtualconferenceprovider/fetchvirtualconference%28identifier_completionhandler_%29.md) on your virtual conference provider to retrieve an instance of [EKVirtualConferenceDescriptor](ekvirtualconferencedescriptor.md).

> **Important**

>  Events that use your virtual conference descriptors may sync to other devices where your app isn’t installed. To support links to your virtual conference regardless of whether your app is installed, adopt universal links in your app. Universal links let you specify HTTP URLs that open your app if it’s installed or open a corresponding web page if it’s not. For more information about adopting universal links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## Topics

### Providing Rooms

- [fetchAvailableRoomTypes(completionHandler:)](ekvirtualconferenceprovider/fetchavailableroomtypes%28completionhandler_%29.md): Provides an array of room types where events take place.

### Providing Virtual Conferences

- [fetchVirtualConference(identifier:completionHandler:)](ekvirtualconferenceprovider/fetchvirtualconference%28identifier_completionhandler_%29.md): Provides details about a virtual conference that takes place in a room the user selects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Virtual conferences

- [Implementing a virtual conference extension](implementing-a-virtual-conference-extension.md): Support adding a virtual conference room to an event in Calendar.
- [EKVirtualConferenceDescriptor](ekvirtualconferencedescriptor.md): Details about a virtual conference that uses a custom room type.
- [EKVirtualConferenceRoomTypeDescriptor](ekvirtualconferenceroomtypedescriptor.md): Details about a room where virtual conferences take place.

# EKVirtualConferenceProvider (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that associates virtual conferencing details with an event object in a user’s calendar.

## Declaration

```objectivec
@interface EKVirtualConferenceProvider : NSObject
```

<a id="overview"></a>

## Overview

[EKVirtualConferenceProvider](ekvirtualconferenceprovider.md) lets apps that offer virtual conferencing services to integrate directly with events in users’ calendars. To add this support to your app, add a virtual conference extension. The principal class of the app extension is a custom subclass of [EKVirtualConferenceProvider](ekvirtualconferenceprovider.md) that you create that provides the following:

- A list of room types where events take place, such as Personal Room or Team Room
- A descriptor for a virtual conference, including a user-visible title, one or more URLs, and additional details

<a id="Providing-Room-Details"></a>

### Providing Room Details

To provide a list of rooms, you provide one or more *room type descriptors* that contain details about where a virtual conference takes place. Each room type descriptor includes a user-visible title and an identifier that you choose. EventKit calls [fetchAvailableRoomTypesWithCompletionHandler:](ekvirtualconferenceprovider/fetchavailableroomtypes%28completionhandler_%29.md) on your virtual conference provider to retrieve an array of [EKVirtualConferenceRoomTypeDescriptor](ekvirtualconferenceroomtypedescriptor.md) objects.

<a id="Providing-Conference-Details"></a>

### Providing Conference Details

After EventKit has the room type descriptors, users can add an event that specifies one of your rooms as the location. To identify the virtual conference event, your virtual conference provider creates a *virtual conference descriptor* that contains details about the virtual conference. The conference descriptor contains the following:

- One or more [EKVirtualConferenceURLDescriptor](ekvirtualconferenceurldescriptor.md) objects to specify how the user joins the virtual conference
- An optional user-visible title that EventKit may display
- An optional user-visible string with details about the virtual conference that EventKit displays

EventKit calls [fetchVirtualConferenceForIdentifier:completionHandler:](ekvirtualconferenceprovider/fetchvirtualconference%28identifier_completionhandler_%29.md) on your virtual conference provider to retrieve an instance of [EKVirtualConferenceDescriptor](ekvirtualconferencedescriptor.md).

> **Important**

>  Events that use your virtual conference descriptors may sync to other devices where your app isn’t installed. To support links to your virtual conference regardless of whether your app is installed, adopt universal links in your app. Universal links let you specify HTTP URLs that open your app if it’s installed or open a corresponding web page if it’s not. For more information about adopting universal links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## Topics

### Providing Rooms

- [fetchAvailableRoomTypesWithCompletionHandler:](ekvirtualconferenceprovider/fetchavailableroomtypes%28completionhandler_%29.md): Provides an array of room types where events take place.

### Providing Virtual Conferences

- [fetchVirtualConferenceForIdentifier:completionHandler:](ekvirtualconferenceprovider/fetchvirtualconference%28identifier_completionhandler_%29.md): Provides details about a virtual conference that takes place in a room the user selects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Virtual conferences

- [EKVirtualConferenceDescriptor](ekvirtualconferencedescriptor.md): Details about a virtual conference that uses a custom room type.
- [EKVirtualConferenceRoomTypeDescriptor](ekvirtualconferenceroomtypedescriptor.md): Details about a room where virtual conferences take place.
