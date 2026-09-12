> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctag-swift.enum/isavailable](https://developer.apple.com/documentation/corenfc/nfctag-swift.enum/isavailable)

# isAvailable

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

A Boolean value that indicates whether a detected tag is available.

## Declaration

```swift
var isAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the tag is available in the current reader session. When a tag is removed from an RF field, it becomes unavailable.
