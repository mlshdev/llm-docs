> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/withintervalsignpost(_:id:around:)](https://developer.apple.com/documentation/os/ossignposter/withintervalsignpost(_:id:around:))

# withIntervalSignpost(\_:id:around:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Measures the execution of the specified closure.

## Declaration

```swift
func withIntervalSignpost<T>(_ name: StaticString, id: OSSignpostID = .exclusive, around task: () throws -> T) rethrows -> T
```

## Parameters

- `name`: The signpost’s name.
- `id`: The signpost’s ID. The default value is [exclusive](../ossignpostid/exclusive.md).
- `task`: The closure around which to create the signposted interval.

<a id="Discussion"></a>

## Discussion

The signposter uses a signpost ID to pair the beginning and the end of a signposted interval, which is necessary because multiple intervals with the same configuration and scope can be in-flight simultaneously. If only one interval with a specific configuration can execute at any particular time, pass [exclusive](../ossignpostid/exclusive.md) as the `id` parameter. Otherwise, use the [makeSignpostID()](makesignpostid%28%29.md) and [makeSignpostID(from:)](makesignpostid%28from_%29.md) methods to generate a signpost identifier, as the following example shows:

```swift
// Create a signposter using the default subsystem.
let signposter = OSSignposter()
        
// Generate a signpost ID to associate with the signpost.
let signpostID = signposter.makeSignpostID()
        
// Signpost the interval of a closure that encapsulates 
// one or more related tasks.
signposter.withIntervalSignpost("Example Signpost", id: signpostID) {
    // Perform one or more related tasks.
}
```

## See Also

### Measuring a Closure

- [withIntervalSignpost(\_:id:\_:around:)](withintervalsignpost%28__id___around_%29.md): Measures the execution of a closure and attaches the specified message.
