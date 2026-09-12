> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/init(_:strategy:)-84m93](https://developer.apple.com/documentation/foundation/datecomponents/init(_:strategy:)-84m93)

# init(\_:strategy:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a new `DateComponents` by parsing the given representation.

## Declaration

```swift
init<T>(_ value: T.ParseInput, strategy: T) throws where T : ParseStrategy, T.ParseOutput == DateComponents
```

## Parameters

- `value`: A representation of a date. The type of the representation is specified by `ParseStrategy.ParseInput`.
- `strategy`: The parse strategy to parse `value` whose `ParseOutput` is `DateComponents`.
