> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferencedescriptor/urldescriptors](https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/urldescriptors)

# urlDescriptors (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An array that contains objects with details about where to join the virtual conference.

## Declaration

```swift
var urlDescriptors: [EKVirtualConferenceURLDescriptor] { get }
```

<a id="Discussion"></a>

## Discussion

Calendar uses the first URL descriptor as the preferred way for users to join a virtual conference, and displays any additional links you provide in the virtual conference details.

> **Important**

>  Events that use your virtual conference descriptors may sync to other devices where your app isn’t installed. To support links to your virtual conference regardless of whether your app is installed, adopt Universal Links in your app. This let you specify HTTP URLs that open your app, if it’s installed, or open a corresponding web page if it’s not. For more information about adopting Universal Links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## See Also

### Configuring Virtual Conferences

- [title](title.md): The user-visible name of the virtual conference.
- [EKVirtualConferenceURLDescriptor](../ekvirtualconferenceurldescriptor.md): Details about how users join a virtual conference, including a title and URL.
- [conferenceDetails](conferencedetails.md): Additional information about the conference that users may find helpful.

# URLDescriptors (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An array that contains objects with details about where to join the virtual conference.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<EKVirtualConferenceURLDescriptor *> * URLDescriptors;
```

<a id="Discussion"></a>

## Discussion

Calendar uses the first URL descriptor as the preferred way for users to join a virtual conference, and displays any additional links you provide in the virtual conference details.

> **Important**

>  Events that use your virtual conference descriptors may sync to other devices where your app isn’t installed. To support links to your virtual conference regardless of whether your app is installed, adopt Universal Links in your app. This let you specify HTTP URLs that open your app, if it’s installed, or open a corresponding web page if it’s not. For more information about adopting Universal Links in your app, see [Supporting universal links in your app](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

## See Also

### Configuring Virtual Conferences

- [title](title.md): The user-visible name of the virtual conference.
- [EKVirtualConferenceURLDescriptor](../ekvirtualconferenceurldescriptor.md): Details about how users join a virtual conference, including a title and URL.
- [conferenceDetails](conferencedetails.md): Additional information about the conference that users may find helpful.
