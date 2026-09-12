> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctissue-swift.struct/isfailure](https://developer.apple.com/documentation/xctest/xctissue-swift.struct/isfailure)

# isFailure

**Framework:** XCTest  
**Kind:** Instance Property

Whether or not this issue should cause the test it’s associated with to be considered a failure.

## Declaration

```swift
var isFailure: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `YES` for issues which have a severity level of `.error` or higher. Otherwise, the value of this property is `NO`.

Use this property to determine if an issue should be considered a failure, instead of directly comparing the value of the [severity](severity-swift.property.md) property.
