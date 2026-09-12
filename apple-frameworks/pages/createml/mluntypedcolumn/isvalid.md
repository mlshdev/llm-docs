> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mluntypedcolumn/isvalid](https://developer.apple.com/documentation/createml/mluntypedcolumn/isvalid)

# isValid

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the column is valid.

## Declaration

```swift
var isValid: Bool { get }
```

<a id="discussion"></a>

## Discussion

Check [isValid](isvalid.md) after you create or mutate an untyped column to ensure it’s valid. If the value is [false](https://developer.apple.com/documentation/swift/false), the untyped column encountered an error and you can’t use it for subsequent operations. For example, comparing two columns of different sizes creates an invalid column.

## See Also

### Handling untyped column errors

- [error](error.md): The underlying error present when the column is invalid.
