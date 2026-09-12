> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporaladaptor/init(_:)](https://developer.apple.com/documentation/createmlcomponents/temporaladaptor/init(_:))

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a temporal transformer from a transformer.

## Declaration

```swift
init(_ transformer: Base)
```

<a id="discussion"></a>

## Discussion

The resulting transformer applies the underlying transformer to each element in the input sequence.
