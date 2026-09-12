> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uniquearray/clone()](https://developer.apple.com/documentation/swift/uniquearray/clone())

# clone()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Copy the contents of this array into a newly allocated unique array instance with just enough capacity to hold all its elements.

## Declaration

```swift
func clone() -> UniqueArray<Element>
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(`count`)
