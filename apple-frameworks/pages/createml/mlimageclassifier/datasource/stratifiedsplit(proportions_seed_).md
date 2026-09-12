> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlimageclassifier/datasource/stratifiedsplit(proportions:seed:)](https://developer.apple.com/documentation/createml/mlimageclassifier/datasource/stratifiedsplit(proportions:seed:))

# stratifiedSplit(proportions:seed:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · visionOS 1.0+

Generates an array of labeled image dictionaries by splitting the data source into strata.

## Declaration

```swift
func stratifiedSplit(proportions: [Double], seed: Int = timestampSeed()) throws -> [[String : [URL]]]
```

## Parameters

- `proportions`: An array of proportions, each in the range `[0.0, 1.0]`.
- `seed`: A seed number for the random-number generator.

<a id="return-value"></a>

## Return Value

An array of dictionaries of labeled images.

## See Also

### Splitting the data

- [stratifiedSplit(proportions:generator:)](stratifiedsplit%28proportions_generator_%29.md): Generates an array of labeled image dictionaries by splitting the data source into strata using the random-number generator.
