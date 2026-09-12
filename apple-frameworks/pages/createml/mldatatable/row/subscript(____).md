> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/row/subscript(_:_:)](https://developer.apple.com/documentation/createml/mldatatable/row/subscript(_:_:))

# subscript(\_:\_:)

**Framework:** Create ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
subscript<T>(name: MLDataTable.Row.Key, type: T.Type) -> T? where T : MLDataValueConvertible { get }
```

## See Also

### Accessing rows

- [subscript(\_:)](subscript%28__%29.md)
