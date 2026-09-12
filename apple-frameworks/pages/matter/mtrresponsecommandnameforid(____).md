> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrresponsecommandnameforid(_:_:)](https://developer.apple.com/documentation/matter/mtrresponsecommandnameforid(_:_:))

# MTRResponseCommandNameForID(\_:\_:) (Swift)

**Framework:** Matter  
**Kind:** Function  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Resolve Matter response (server to client) command IDs into a descriptive string.

## Declaration

```swift
func MTRResponseCommandNameForID(_ clusterID: MTRClusterIDType, _ commandID: MTRCommandIDType) -> String!
```

<a id="discussion"></a>

## Discussion

For unknown IDs, a string ‘\<Unknown clusterID %d\>’ (if the cluster ID is not known) or ‘\<Unknown commandID %d\>’ (if the cluster ID is known but the command ID is not known) will be returned.

# MTRResponseCommandNameForID (Objective-C)

**Framework:** Matter  
**Kind:** Function  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Resolve Matter response (server to client) command IDs into a descriptive string.

## Declaration

```objectivec
extern NSString *MTRResponseCommandNameForID(MTRClusterIDType clusterID, MTRCommandIDType commandID);
```

<a id="discussion"></a>

## Discussion

For unknown IDs, a string ‘\<Unknown clusterID %d\>’ (if the cluster ID is not known) or ‘\<Unknown commandID %d\>’ (if the cluster ID is known but the command ID is not known) will be returned.
