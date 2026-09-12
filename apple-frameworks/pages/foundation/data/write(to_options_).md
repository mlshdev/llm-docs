> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/write(to:options:)](https://developer.apple.com/documentation/foundation/data/write(to:options:))

# write(to:options:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the contents of the data buffer to a location.

## Declaration

```swift
func write(to url: URL, options: Data.WritingOptions = []) throws
```

## Parameters

- `url`: The location to write the data into.
- `options`: Options for writing the data. Default value is `[]`.

## See Also

### Reading and Writing Data

- [Data.ReadingOptions](readingoptions.md): Options to control the reading of data from a URL.
- [Data.WritingOptions](writingoptions.md): Options to control the writing of data to a URL.
