> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/stringprotocol/caseinsensitivecompare(_:)

# caseInsensitiveCompare(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the result of invoking `compare:options:` with `NSCaseInsensitiveSearch` as the only option.

## Declaration

```swift
func caseInsensitiveCompare<T>(_ aString: T) -> ComparisonResult where T : StringProtocol
```
