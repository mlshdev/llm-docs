> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/predicateexpressions/build_caseinsensitivecompare(_:_:)](https://developer.apple.com/documentation/foundation/predicateexpressions/build_caseinsensitivecompare(_:_:))

# build_caseInsensitiveCompare(\_:\_:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
static func build_caseInsensitiveCompare<Root, Other>(_ root: Root, _ other: Other) -> PredicateExpressions.StringCaseInsensitiveCompare<Root, Other> where Root : PredicateExpression, Other : PredicateExpression, Root.Output : StringProtocol, Other.Output : StringProtocol
```
