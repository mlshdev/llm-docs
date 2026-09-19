> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlprogress/init(progress:)

# init(progress:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a training session progress instance from a foundation progress object.

## Declaration

```swift
init?(progress: Progress)
```

## Parameters

- `progress`: A foundation progress object.

## See Also

### Creating a training progress update

- [init(phase:)](init%28phase_%29.md): Creates a training session progress instance from a training phase.
