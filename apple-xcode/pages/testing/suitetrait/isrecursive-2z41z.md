> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/suitetrait/isrecursive-2z41z](https://developer.apple.com/documentation/testing/suitetrait/isrecursive-2z41z)

# isRecursive

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

Whether this instance should be applied recursively to child test suites and test functions.

## Declaration

```swift
var isRecursive: Bool { get }
```

<a id="discussion"></a>

## Discussion

If the value is `true`, then the testing library applies this trait recursively to child test suites and test functions. Otherwise, it only applies the trait to the test suite to which you added the trait.

By default, traits are not recursively applied to children.
