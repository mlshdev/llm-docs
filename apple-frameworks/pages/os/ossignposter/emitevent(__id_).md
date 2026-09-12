> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/ossignposter/emitevent(_:id:)](https://developer.apple.com/documentation/os/ossignposter/emitevent(_:id:))

# emitEvent(\_:id:)

**Framework:** os  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Marks a point of interest in time.

## Declaration

```swift
func emitEvent(_ name: StaticString, id: OSSignpostID = .exclusive)
```

## Parameters

- `name`: The event’s name.
- `id`: The event’s identifier. The default value is [exclusive](../ossignpostid/exclusive.md).

## Mentioned In

- [Recording Performance Data](../recording-performance-data.md)

<a id="Discussion"></a>

## Discussion

You can use the [makeSignpostID()](makesignpostid%28%29.md) and [makeSignpostID(from:)](makesignpostid%28from_%29.md) methods to generate an identifier for the event, as the following example shows:

```swift
// Create a signposter using the default subsystem.
let signposter = OSSignposter()
        
// Generate a signpost ID to associate with the event.
let signpostID = signposter.makeSignpostID()
        
// Emit a named event using the signpost ID.
signposter.emitEvent("Example Event", id: signpostID)
```

## See Also

### Emitting Individual Signposts

- [emitEvent(\_:id:\_:)](emitevent%28__id___%29.md): Marks a point of interest in time and attaches the specified message.
