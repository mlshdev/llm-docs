> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/uniquearray/removesubrange(_:)-6hkdt

# removeSubrange(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes the specified subrange of elements from the array.

## Declaration

```swift
mutating func removeSubrange(_ bounds: some RangeExpression<Int>)
```

## Parameters

- `bounds`: The subrange of the array to remove. The bounds of the range must be valid indices of the array.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(`self.count`)
