> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/subscript(_:)](https://developer.apple.com/documentation/createml/mldatacolumn/subscript(_:))

# subscript(\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Accesses the element at the given row.

## Declaration

```swift
subscript(index: Int) -> Element { get }
```

## Parameters

- `index`: A row number of the column, beginning with `0`.

<a id="return-value"></a>

## Return Value

The `Element` at the given index.

## See Also

### Getting an element

- [element(at:)](element%28at_%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Accesses the element at the given index.
