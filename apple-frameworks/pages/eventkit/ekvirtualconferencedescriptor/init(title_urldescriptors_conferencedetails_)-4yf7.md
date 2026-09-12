> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferencedescriptor/init(title:urldescriptors:conferencedetails:)-4yf7](https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/init(title:urldescriptors:conferencedetails:)-4yf7)

# init(title:urlDescriptors:conferenceDetails:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an object that describes a virtual conference, including a name and URL to join the conference.

## Declaration

```swift
init(title: String?, urlDescriptors URLDescriptors: [EKVirtualConferenceURLDescriptor], conferenceDetails: String?)
```

## Parameters

- `title`: The user-visible name of the virtual conference.
- `URLDescriptors`: An array that contains objects with details about where to join the virtual conference. Calendar uses the first URL descriptor as the preferred way for users to join a virtual conference, and displays additional URLs as links in the virtual conference details.
- `conferenceDetails`: Additional information about the conference that users may find helpful.

<a id="return-value"></a>

## Return Value

An object that describes a virtual conference.

# initWithTitle:URLDescriptors:conferenceDetails: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an object that describes a virtual conference, including a name and URL to join the conference.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title URLDescriptors:(NSArray<EKVirtualConferenceURLDescriptor *> *) URLDescriptors conferenceDetails:(NSString *) conferenceDetails;
```

## Parameters

- `title`: The user-visible name of the virtual conference.
- `URLDescriptors`: An array that contains objects with details about where to join the virtual conference. Calendar uses the first URL descriptor as the preferred way for users to join a virtual conference, and displays additional URLs as links in the virtual conference details.
- `conferenceDetails`: Additional information about the conference that users may find helpful.

<a id="return-value"></a>

## Return Value

An object that describes a virtual conference.
