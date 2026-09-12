> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptor/init(duration:commands:)](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptor/init(duration:commands:))

# init(duration:commands:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates an instance that contains the commands specified in the array:

## Declaration

```swift
init(duration: CMTime? = nil, commands: [PresentationCommand] = [])
```

## Parameters

- `duration`: The duration of the metadata commands.
- `commands`: An array of presentation commands.

## See Also

### Initializers

- [init(commands:)](init%28commands_%29.md): Creates an instance that contains the commands specified in the given array.
