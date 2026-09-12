> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatacolumn/element(at:)](https://developer.apple.com/documentation/createml/mldatacolumn/element(at:))

# element(at:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Accesses the element at the given index.

## Declaration

```swift
func element(at index: Int) -> Element?
```

## Parameters

- `index`: A row number of the column, beginning with `0`.

<a id="return-value"></a>

## Return Value

The `Element` at the given index; otherwise, `nil`.

## See Also

### Getting an element

- [subscript(\_:)](subscript%28__%29.md): Conforms when `Element` conforms to `MLDataValueConvertible`. Accesses the element at the given row.
