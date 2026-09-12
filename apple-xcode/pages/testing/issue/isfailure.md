> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/testing/issue/isfailure](https://developer.apple.com/documentation/testing/issue/isfailure)

# isFailure

**Framework:** Swift Testing  
**Kind:** Instance Property  
**Availability:** Swift 6.3+ · Xcode 26.4+

Whether or not this issue should cause the test it’s associated with to be considered a failure.

## Declaration

```swift
var isFailure: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` for issues which have a severity level of [Issue.Severity.error](severity-swift.enum/error.md) or greater and are not known issues via [withKnownIssue(\_:isIntermittent:sourceLocation:\_:when:matching:)](../withknownissue%28__isintermittent_sourcelocation___when_matching_%29.md). Otherwise, the value of this property is `false.`

Use this property to determine if an issue should be considered a failure, instead of directly comparing the value of the [severity](severity-swift.property.md) property.
