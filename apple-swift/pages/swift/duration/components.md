> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/components](https://developer.apple.com/documentation/swift/duration/components)

# components

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The composite components of the `Duration`.

## Declaration

```swift
var components: (seconds: Int64, attoseconds: Int64) { get }
```

<a id="discussion"></a>

## Discussion

This is intended for facilitating conversions to existing time types. The attoseconds value will not exceed 1e18 or be lower than -1e18.
