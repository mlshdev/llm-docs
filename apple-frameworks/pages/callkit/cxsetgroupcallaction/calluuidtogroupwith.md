> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxsetgroupcallaction/calluuidtogroupwith](https://developer.apple.com/documentation/callkit/cxsetgroupcallaction/calluuidtogroupwith)

# callUUIDToGroupWith (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier of the call to be grouped with the call associated with the receiver.

## Declaration

```swift
var callUUIDToGroupWith: UUID? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the call associated with the receiver leaves any group it’s currently a member of.

If the call associated with the receiver is already in a group, the call should first leave that group, if necessary.

# callUUIDToGroupWith (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The unique identifier of the call to be grouped with the call associated with the receiver.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSUUID * callUUIDToGroupWith;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the call associated with the receiver leaves any group it’s currently a member of.

If the call associated with the receiver is already in a group, the call should first leave that group, if necessary.
