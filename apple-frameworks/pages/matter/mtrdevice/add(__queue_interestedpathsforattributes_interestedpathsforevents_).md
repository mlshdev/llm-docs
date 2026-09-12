> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/add(_:queue:interestedpathsforattributes:interestedpathsforevents:)](https://developer.apple.com/documentation/matter/mtrdevice/add(_:queue:interestedpathsforattributes:interestedpathsforevents:))

# add(\_:queue:interestedPathsForAttributes:interestedPathsForEvents:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a delegate to receive asynchronous callbacks about the device, and limit attribute and/or event reports to a specific set of paths.

## Declaration

```swift
func add(_ delegate: any MTRDeviceDelegate, queue: dispatch_queue_t, interestedPathsForAttributes: [Any]?, interestedPathsForEvents: [Any]?)
```

<a id="discussion"></a>

## Discussion

interestedPathsForAttributes may contain either MTRClusterPath or MTRAttributePath to specify interested clusters and attributes, or NSNumber for endpoints.

interestedPathsForEvents may contain either MTRClusterPath or MTREventPath to specify interested clusters and events, or NSNumber for endpoints.

For both interested paths arguments, if nil is specified, then no filter will be applied.

Calling addDelegate: again with the same delegate object will update the interested paths for attributes and events for this delegate.

MTRDevice holds a weak reference to the delegate object.

# addDelegate:queue:interestedPathsForAttributes:interestedPathsForEvents: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a delegate to receive asynchronous callbacks about the device, and limit attribute and/or event reports to a specific set of paths.

## Declaration

```objectivec
- (void) addDelegate:(id<MTRDeviceDelegate>) delegate queue:(dispatch_queue_t) queue interestedPathsForAttributes:(NSArray *) interestedPathsForAttributes interestedPathsForEvents:(NSArray *) interestedPathsForEvents;
```

<a id="discussion"></a>

## Discussion

interestedPathsForAttributes may contain either MTRClusterPath or MTRAttributePath to specify interested clusters and attributes, or NSNumber for endpoints.

interestedPathsForEvents may contain either MTRClusterPath or MTREventPath to specify interested clusters and events, or NSNumber for endpoints.

For both interested paths arguments, if nil is specified, then no filter will be applied.

Calling addDelegate: again with the same delegate object will update the interested paths for attributes and events for this delegate.

MTRDevice holds a weak reference to the delegate object.
