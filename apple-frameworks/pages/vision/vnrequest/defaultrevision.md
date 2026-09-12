> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequest/defaultrevision](https://developer.apple.com/documentation/vision/vnrequest/defaultrevision)

# defaultRevision (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The revision of the latest request for the particular SDK linked with the client application.

## Declaration

```swift
class var defaultRevision: Int { get }
```

## See Also

### Determining the Revision

- [VNRequestRevisionProviding](../vnrequestrevisionproviding.md): A protocol for specifying the revision number of Vision algorithms.
- [currentRevision](currentrevision.md): The current revison supported by the request.
- [supportedRevisions](supportedrevisions.md): The collection of currently-supported algorithm versions for the class of request.

# defaultRevision (Objective-C)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The revision of the latest request for the particular SDK linked with the client application.

## Declaration

```objectivec
@property (class, nonatomic, assign, readonly) NSUInteger defaultRevision;
```

## See Also

### Determining the Revision

- [VNRequestRevisionProviding](../vnrequestrevisionproviding.md): A protocol for specifying the revision number of Vision algorithms.
- [currentRevision](currentrevision.md): The current revison supported by the request.
- [supportedRevisions](supportedrevisions.md): The collection of currently-supported algorithm versions for the class of request.
