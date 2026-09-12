> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/init(repeating:count:)](https://developer.apple.com/documentation/swift/uniquearray/init(repeating:count:))

# init(repeating:count:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new array containing the specified number of a single, repeated value.

## Declaration

```swift
init(repeating repeatedValue: Element, count: Int)
```

## Parameters

- `repeatedValue`: The element to repeat.
- `count`: The number of times to repeat the value passed in the `repeating` parameter. `count` must be zero or greater.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(`count`)
