> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/publishers/concatenate/suffix

# suffix

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The publisher to republish only after `prefix` finishes.

## Declaration

```swift
let suffix: Suffix
```

## See Also

### Inspecting publisher properties

- [prefix](prefix.md): The publisher to republish, in its entirety, before republishing elements from `suffix`.
