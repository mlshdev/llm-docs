> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/begininterval(_:id:)](https://developer.apple.com/documentation/os/ossignposter/begininterval(_:id:))

# beginInterval(\_:id:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Begins a signposted interval.

## Declaration

```swift
func beginInterval(_ name: StaticString, id: OSSignpostID = .exclusive) -> OSSignpostIntervalState
```

## Parameters

- `name`: The signpost’s name.
- `id`: The signpost’s identifier. The default value is [exclusive](../ossignpostid/exclusive.md).

<a id="return-value"></a>

## Return Value

The interval state that the signposter derives from the specified `id` parameter.

## Mentioned In

- [Recording Performance Data](../recording-performance-data.md)

<a id="Discussion"></a>

## Discussion

The signposter uses a signpost ID to pair the beginning and the end of a signposted interval, which is necessary because multiple intervals with the same configuration and scope can be in-flight simultaneously. If only one interval with a specific configuration can execute at any particular time, use [exclusive](../ossignpostid/exclusive.md) for the `id` parameter. Otherwise, use the [makeSignpostID()](makesignpostid%28%29.md) and [makeSignpostID(from:)](makesignpostid%28from_%29.md) methods to generate a signpost identifier.

To end a signposted interval, pass the return value to one of the [endInterval(\_:\_:)](endinterval%28____%29.md) or [endInterval(\_:\_:\_:)](endinterval%28______%29.md) methods. If you don’t have access to the returned interval state when you want to end the signposted interval, recreate it by passing the same signpost ID to the [beginState(id:)](../ossignpostintervalstate/beginstate%28id_%29.md) method.

If you need to pass the returned interval state across process boundaries, you must encode it first. For more information, see [OSSignpostIntervalState](../ossignpostintervalstate.md).

The following example demonstrates how to use a signpost ID and interval state to signpost the beginning and the end of an interval:

```swift
// Create a signposter that uses the default subsystem.
let signposter = OSSignposter()
        
// Generate a signpost ID to associate with the signposted interval.
let signpostID = signposter.makeSignpostID()
        
// Create a name that the signposter uses, along with the 
// signpost ID, to disambiguate the begin call and end call. 
// The type must be StaticString.
let name: StaticString = "Example Signpost"
        
// Begin a signposted interval and keep a reference to the
// returned interval state.
let state = signposter.beginInterval(name, id: signpostID)
        
// Perform one or more tasks that you want to measure.
        
// Use the interval state from the begin call to end the
// corresponding signposted interval.
signposter.endInterval(name, state)
```

## See Also

### Starting a Signposted Interval

- [beginInterval(\_:id:\_:)](begininterval%28__id___%29.md): Begins a signposted interval and attaches the specified message.
- [beginAnimationInterval(\_:id:)](beginanimationinterval%28__id_%29.md): Begins a signposted interval for measuring an animation.
- [beginAnimationInterval(\_:id:\_:)](beginanimationinterval%28__id___%29.md): Begins a signposted interval for measuring an animation, and attaches a message.
- [OSSignpostIntervalState](../ossignpostintervalstate.md): An object that tracks the state of a signposted interval.
- [SignpostMetadata](../signpostmetadata.md): The type that represents a message you attach to a signpost.
