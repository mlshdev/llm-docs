> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/testing/customteststringconvertible/testdescription-3ar66

# testDescription

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Swift 6.0+ · Xcode 16.0+

A description of this instance to use when presenting it in a test’s output.

## Declaration

```swift
var testDescription: String { get }
```

<a id="discussion"></a>

## Discussion

Do not use this property directly. To get the test description of a value, use `Swift/String/init(describingForTest:)`.
