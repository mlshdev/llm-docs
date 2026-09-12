> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/makeprocesstap(description:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/makeprocesstap(description:))

# makeProcessTap(description:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates a new tap using the provided description.

## Declaration

```swift
func makeProcessTap(description: CATapDescription) throws -> AudioHardwareTap?
```

## Parameters

- `description`: The CATapDescription that specifies how to build the Tap.

<a id="return-value"></a>

## Return Value

An AudioHardwareTap representing the newly created tap.
