> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rangereplaceablecollection/applying(_:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/applying(_:))

# applying(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Applies the given difference to this collection.

## Declaration

```swift
func applying(_ difference: CollectionDifference<Self.Element>) -> Self?
```

## Parameters

- `difference`: The difference to be applied.

<a id="return-value"></a>

## Return Value

An instance representing the state of the receiver with the difference applied, or `nil` if the difference is incompatible with the receiver’s state.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(*n* \+ *c*), where *n* is `self.count` and *c* is the number of changes contained by the parameter.
