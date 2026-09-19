> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/clothcollisiongroupset/init(groups:)

# init(groups:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a collision group set from an array of numbered groups.

## Declaration

```swift
init(groups: [Int])
```

## Parameters

- `groups`: The groups contained in the set. A maximum of 32 groups can be used, identified by values between 1 and 32.
