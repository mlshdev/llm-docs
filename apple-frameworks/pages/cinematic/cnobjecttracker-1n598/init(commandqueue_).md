> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnobjecttracker-1n598/init(commandqueue:)

# init(commandQueue:)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Creates a new detection track builder.

## Declaration

```swift
init(commandQueue: any MTLCommandQueue)
```

## Parameters

- `commandQueue`: The command queue of a metal device in order to perform work.
