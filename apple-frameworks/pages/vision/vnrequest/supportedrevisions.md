> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequest/supportedrevisions](https://developer.apple.com/documentation/vision/vnrequest/supportedrevisions)

# supportedRevisions (Swift)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The collection of currently-supported algorithm versions for the class of request.

## Declaration

```swift
class var supportedRevisions: IndexSet { get }
```

<a id="Discussion"></a>

## Discussion

This method allows clients to inspect at runtime what capabilities are available for each class of [VNRequest](../vnrequest.md) in the Vision framework.

## See Also

### Determining the Revision

- [VNRequestRevisionProviding](../vnrequestrevisionproviding.md): A protocol for specifying the revision number of Vision algorithms.
- [currentRevision](currentrevision.md): The current revison supported by the request.
- [defaultRevision](defaultrevision.md): The revision of the latest request for the particular SDK linked with the client application.

# supportedRevisions (Objective-C)

**Framework:** Vision  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The collection of currently-supported algorithm versions for the class of request.

## Declaration

```objectivec
@property (class, nonatomic, copy, readonly) NSIndexSet * supportedRevisions;
```

<a id="Discussion"></a>

## Discussion

This method allows clients to inspect at runtime what capabilities are available for each class of [VNRequest](../vnrequest.md) in the Vision framework.

## See Also

### Determining the Revision

- [VNRequestRevisionProviding](../vnrequestrevisionproviding.md): A protocol for specifying the revision number of Vision algorithms.
- [currentRevision](currentrevision.md): The current revison supported by the request.
- [defaultRevision](defaultrevision.md): The revision of the latest request for the particular SDK linked with the client application.
