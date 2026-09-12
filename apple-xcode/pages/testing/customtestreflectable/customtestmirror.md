> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/customtestreflectable/customtestmirror](https://developer.apple.com/documentation/testing/customtestreflectable/customtestmirror)

# customTestMirror

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.4+ · Xcode 27.0+

The custom mirror for this instance.

## Declaration

```swift
var customTestMirror: Mirror { get }
```

## Mentioned In

- [Describing and reflecting values](../describing-values.md)

<a id="discussion"></a>

## Discussion

Do not use this property directly. To get the test reflection of a value, use `Swift/Mirror/init(reflectingForTest:)-(CustomTestReflectable)`.
