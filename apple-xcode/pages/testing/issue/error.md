> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/error](https://developer.apple.com/documentation/testing/issue/error)

# error

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

The error which was associated with this issue, if any.

## Declaration

```swift
var error: (any Error)? { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is non-`nil` when [kind](kind-swift.property.md) is [Issue.Kind.errorCaught(\_:)](kind-swift.enum/errorcaught%28__%29.md).
