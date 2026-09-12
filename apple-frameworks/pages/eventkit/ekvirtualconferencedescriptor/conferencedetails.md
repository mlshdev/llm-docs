> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekvirtualconferencedescriptor/conferencedetails](https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/conferencedetails)

# conferenceDetails (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Additional information about the conference that users may find helpful.

## Declaration

```swift
var conferenceDetails: String? { get }
```

## See Also

### Configuring Virtual Conferences

- [title](title.md): The user-visible name of the virtual conference.
- [urlDescriptors](urldescriptors.md): An array that contains objects with details about where to join the virtual conference.
- [EKVirtualConferenceURLDescriptor](../ekvirtualconferenceurldescriptor.md): Details about how users join a virtual conference, including a title and URL.

# conferenceDetails (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

Additional information about the conference that users may find helpful.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * conferenceDetails;
```

## See Also

### Configuring Virtual Conferences

- [title](title.md): The user-visible name of the virtual conference.
- [URLDescriptors](urldescriptors.md): An array that contains objects with details about where to join the virtual conference.
- [EKVirtualConferenceURLDescriptor](../ekvirtualconferenceurldescriptor.md): Details about how users join a virtual conference, including a title and URL.
