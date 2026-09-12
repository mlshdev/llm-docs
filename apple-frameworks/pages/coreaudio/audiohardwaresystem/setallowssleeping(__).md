> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/setallowssleeping(_:)](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/setallowssleeping(_:))

# setAllowsSleeping(\_:)

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst · macOS 15.0+

Set the allowsSleeping property.

## Declaration

```swift
func setAllowsSleeping(_ allowed: Bool) throws
```

## Parameters

- `allowed`: A Bool where true indicates that the process will allow the CPU to idle sleep even if there is audio IO in progress.
