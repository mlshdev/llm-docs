> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/setallowsunloading(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/setallowsunloading(_:))

# setAllowsUnloading(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the allowsUnloading property.

## Declaration

```swift
func setAllowsUnloading(_ allowed: Bool) throws
```

## Parameters

- `allowed`: A Bool where true indicates that this process wants the HAL to unload itself after a period of inactivity where there are no IOProcs and no listeners registered with any object.
