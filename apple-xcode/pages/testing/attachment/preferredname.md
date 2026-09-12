> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/attachment/preferredname](https://developer.apple.com/documentation/testing/attachment/preferredname)

# preferredName

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.2+ · Xcode 26.0+

A filename to use when saving this attachment.

## Declaration

```swift
var preferredName: String { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is used as a hint to the testing library. The testing library may substitute a different filename as needed. If the value of this property has not been explicitly set, the testing library will attempt to generate its own value.
