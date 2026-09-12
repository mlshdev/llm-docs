> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/rendergroupid](https://developer.apple.com/documentation/pencilkit/pkstrokereference/rendergroupid)

# renderGroupID (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A UUID that groups strokes for wet-ink compositing with compatible inks such as marker.

## Declaration

```swift
var renderGroupID: UUID? { get }
```

<a id="discussion"></a>

## Discussion

Set this to the same value for a run of strokes to render them as if drawn while the previous stroke with the same ink was still wet.

# renderGroupID (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A UUID that groups strokes for wet-ink compositing with compatible inks such as marker.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSUUID * renderGroupID;
```

<a id="discussion"></a>

## Discussion

Set this to the same value for a run of strokes to render them as if drawn while the previous stroke with the same ink was still wet.
