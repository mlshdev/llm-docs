> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownload/priority-swift.struct/init(_:)](https://developer.apple.com/documentation/backgroundassets/badownload/priority-swift.struct/init(_:))

# init(\_:)

**Framework:** Background Assets  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a priority using the specified integer value.

## Declaration

```swift
init(_ rawValue: Int)
```

## Parameters

- `rawValue`: An integer that represents the desired priority. The system considers a high value more important than a low one. Provide a value that’s in the range [min](https://developer.apple.com/documentation/swift/int/min) to [max](https://developer.apple.com/documentation/swift/int/max).

## See Also

### Creating a priority

- [init(rawValue:)](init%28rawvalue_%29.md): Creates a priority using the specified raw value.
