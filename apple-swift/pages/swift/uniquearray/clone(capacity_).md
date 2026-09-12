> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/clone(capacity:)](https://developer.apple.com/documentation/swift/uniquearray/clone(capacity:))

# clone(capacity:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Copy the contents of this array into a newly allocated unique array instance with the specified capacity.

## Declaration

```swift
func clone(capacity: Int) -> UniqueArray<Element>
```

## Parameters

- `capacity`: The desired capacity of the resulting unique array. `capacity` must be greater than or equal to `count`.

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(`count`)
