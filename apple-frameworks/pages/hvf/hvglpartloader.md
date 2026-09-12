> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/hvglpartloader](https://developer.apple.com/documentation/hvf/hvglpartloader)

# HVGLPartLoader

**Framework:** hvf  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Special loader object for an HVGL table in memory, which must be Double-aligned Typically this is from a memory-mapped font

## Declaration

```swift
class HVGLPartLoader
```

## Topics

### Initializers

- [init(hvglTable:hvpmTable:)](hvglpartloader/init%28hvgltable_hvpmtable_%29.md): Returns nil if the data is malformed or missing

### Instance Properties

- [glyphCount](hvglpartloader/glyphcount.md): The number of glyphs (externally visible parts) in the hvgl table
- [partCount](hvglpartloader/partcount.md): The number of parts (all parts) in the hvgl table
- [tableVersion](hvglpartloader/tableversion.md): The version of the hvgl table this loader supports
