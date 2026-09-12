> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/init(asset:changes:progress:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/init(asset:changes:progress:))

# init(asset:changes:progress:)

**Framework:** Cinematic  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Creates a Cinematic script based on a movie and applying changes to the movie.

## Declaration

```swift
init(asset: AVAsset, changes: CNScript.Changes? = nil, progress: Progress? = nil) async throws
```

## Parameters

- `asset`: The original movie.
- `changes`: Changes to apply to the original script.
- `progress`: The optional progress object to track progress or cancel loading.
