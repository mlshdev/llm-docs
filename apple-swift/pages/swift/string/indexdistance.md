> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/indexdistance](https://developer.apple.com/documentation/swift/string/indexdistance)

# String.IndexDistance

**Framework:** Swift  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents the number of steps between two `String.Index` values, where one value is reachable from the other.

> All index distances are now of type Int

## Declaration

```swift
typealias IndexDistance = Int
```

<a id="discussion"></a>

## Discussion

In Swift, *reachability* refers to the ability to produce one value from the other through zero or more applications of `index(after:)`.
