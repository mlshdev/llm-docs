> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicate(_:)](https://developer.apple.com/documentation/foundation/predicate(_:))

# Predicate(\_:)

**Framework:** Foundation  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
@freestanding(expression) macro Predicate<each Input>(_ body: (repeat each Input) -> Bool) -> Predicate<repeat each Input>
```

## See Also

### Macros

- [Expression(\_:)](expression%28__%29.md)
