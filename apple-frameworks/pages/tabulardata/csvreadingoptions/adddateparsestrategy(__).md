> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabulardata/csvreadingoptions/adddateparsestrategy(_:)

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
