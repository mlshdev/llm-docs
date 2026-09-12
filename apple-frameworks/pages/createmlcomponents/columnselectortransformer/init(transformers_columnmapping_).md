> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/columnselectortransformer/init(transformers:columnmapping:)](https://developer.apple.com/documentation/createmlcomponents/columnselectortransformer/init(transformers:columnmapping:))

# init(transformers:columnMapping:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a select transformer.

## Declaration

```swift
init(transformers: [String : Base], columnMapping: [String : String] = [:])
```

## Parameters

- `transformers`: A dictionary of column names to transformers.
- `columnMapping`: A mapping of input column names to output column names.
