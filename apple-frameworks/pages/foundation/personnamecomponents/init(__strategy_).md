> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents/init(_:strategy:)](https://developer.apple.com/documentation/foundation/personnamecomponents/init(_:strategy:))

# init(\_:strategy:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a person name components object from a given string by applying the provided parsing strategy.

## Declaration

```swift
init<S>(_ value: S.ParseInput, strategy: S) throws where S : ParseStrategy, S.ParseOutput == PersonNameComponents
```

## Parameters

- `value`: A string to parse into person name components.
- `strategy`: The strategy used to parse a string into person name components.

<a id="Discussion"></a>

## Discussion

This method uses a combination of locale rules and the provided parse strategy object to determine the most likely name components for a particular string representation. Parsing name components from a representation created for an existing name components object may not produce equivalent results.

> **Important**

>  The format style only parses names using Latin or CJK scripts.

## See Also

### Parsing Person Name Components

- [init(\_:)](init%28__%29.md): Creates a person name components object from a given string.
- [parseStrategy](formatstyle/parsestrategy.md): The strategy used to parse a string into person name components.
