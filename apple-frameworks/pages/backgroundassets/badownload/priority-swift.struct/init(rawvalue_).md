> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/badownload/priority-swift.struct/init(rawvalue:)

# init(rawValue:)

**Framework:** Background Assets  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a priority using the specified raw value.

## Declaration

```swift
init(rawValue: Int)
```

## Parameters

- `rawValue`: An integer that represents the desired priority. The system considers a high value more important than a low one. Provide a value that’s in the range [min](https://developer.apple.com/documentation/swift/int/min) to [max](https://developer.apple.com/documentation/swift/int/max).

## See Also

### Creating a priority

- [init(\_:)](init%28__%29.md): Creates a priority using the specified integer value.
