> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/codingkey/init(intvalue:)](https://developer.apple.com/documentation/swift/codingkey/init(intvalue:))

# init(intValue:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from the specified integer.

## Declaration

```swift
init?(intValue: Int)
```

## Parameters

- `intValue`: The integer value of the desired key.

<a id="discussion"></a>

## Discussion

If the value passed as `intValue` does not correspond to any instance of this type, the result is `nil`.
