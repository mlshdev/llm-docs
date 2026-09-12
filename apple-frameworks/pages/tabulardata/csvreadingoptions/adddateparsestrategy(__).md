> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/csvreadingoptions/adddateparsestrategy(_:)](https://developer.apple.com/documentation/tabulardata/csvreadingoptions/adddateparsestrategy(_:))

# addDateParseStrategy(\_:)

**Framework:** TabularData  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Adds a date parsing strategy.

## Declaration

```swift
mutating func addDateParseStrategy<T>(_ strategy: T) where T : ParseStrategy, T.ParseInput == String, T.ParseOutput == Date
```

## Parameters

- `strategy`: A parsing strategy that has a string input and a date output.
