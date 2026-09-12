> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/reload(changes:)](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/reload(changes:))

# reload(changes:)

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

Reloads the Cinematic script with optional changes applied, removing any previous changes made.

## Declaration

```swift
final func reload(changes: CNScript.Changes?)
```

## Parameters

- `changes`: Optional changes since recording the asset.

<a id="Discussion"></a>

## Discussion

Reloading the Cinematic script can be more efficient than loading the asset from scratch.

You can obtain the applied changes from a previous editing session. The system reloads the asset as originally recoded if the changes value is nil.
