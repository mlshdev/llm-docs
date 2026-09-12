> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/test/timelimit](https://developer.apple.com/documentation/testing/test/timelimit)

# timeLimit

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+ · Swift 6.0+ · Xcode 16.0+

The maximum amount of time this test’s cases may run for.

## Declaration

```swift
var timeLimit: Duration? { get }
```

<a id="discussion"></a>

## Discussion

Associate a time limit with tests by using [timeLimit(\_:)](../trait/timelimit%28__%29.md).

If a test has more than one time limit associated with it, the value of this property is the shortest one. If a test has no time limits associated with it, the value of this property is `nil`.
