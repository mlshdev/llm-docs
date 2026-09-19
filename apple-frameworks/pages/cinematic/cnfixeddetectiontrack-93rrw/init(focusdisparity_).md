> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnfixeddetectiontrack-93rrw/init(focusdisparity:)

# init(focusDisparity:)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Creates a detection track with fixed focus at the given disparity.

## Declaration

```swift
init(focusDisparity: Float)
```

## Parameters

- `focusDisparity`: The disparity to use in order to focus on the object. Use the static \`disparity\` method to compute if unknown.
