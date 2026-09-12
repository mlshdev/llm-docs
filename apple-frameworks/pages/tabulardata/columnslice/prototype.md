> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/columnslice/prototype](https://developer.apple.com/documentation/tabulardata/columnslice/prototype)

# prototype

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A prototype that creates type-erased columns with the same underlying type as the column slice.

## Declaration

```swift
var prototype: any AnyColumnPrototype { get }
```

<a id="discussion"></a>

## Discussion

Use a type-erased column prototype to create new columns of the same type as the slice’s parent column without explicitly knowing what type it is.
