> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xctest/xctissuereference/isfailure

# isFailure (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

Whether or not this issue should cause the test it’s associated with to be considered a failure.

## Declaration

```swift
var isFailure: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `YES` for issues which have a severity level of `XCTIssueSeverityError` or higher. Otherwise, the value of this property is `NO`.

Use this property to determine if an issue should be considered a failure, instead of directly comparing the value of the [severity](severity-swift.property.md) property.

# isFailure (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

Whether or not this issue should cause the test it’s associated with to be considered a failure.

## Declaration

```objectivec
@property (readonly) BOOL isFailure;
```

<a id="discussion"></a>

## Discussion

The value of this property is `YES` for issues which have a severity level of `XCTIssueSeverityError` or higher. Otherwise, the value of this property is `NO`.

Use this property to determine if an issue should be considered a failure, instead of directly comparing the value of the [severity](severity-swift.property.md) property.
