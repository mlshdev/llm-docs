> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/assign(count:to:)-87zdf](https://developer.apple.com/documentation/foundation/progressmanager/assign(count:to:)-87zdf)

# assign(count:to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds a Foundation’s `Progress` instance as a child which constitutes a certain `count` of `self`’s `totalCount`.

## Declaration

```swift
final func assign(count: Int, to progress: Progress)
```

## Parameters

- `count`: Number of units delegated from `self`’s `totalCount`.
- `progress`: `Progress` which receives the delegated `count`.
