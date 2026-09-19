> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/remotemediasessionattributes/id

# id

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iOS App Extension 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A stable, unique identifier for the session these attributes describe.

## Declaration

```swift
var id: String { get }
```

<a id="discussion"></a>

## Discussion

The system uses this value to match session lifecycle events (start, update, end) and to route push tokens to the correct session.
