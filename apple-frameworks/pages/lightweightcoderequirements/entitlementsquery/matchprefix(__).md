> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/entitlementsquery/matchprefix(_:)](https://developer.apple.com/documentation/lightweightcoderequirements/entitlementsquery/matchprefix(_:))

# matchPrefix(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Match the specified string prefix against a string value or array.

## Declaration

```swift
func matchPrefix(_ value: String) -> EntitlementsQuery
```

<a id="discussion"></a>

## Discussion

Strings are matched byte for byte (i.e. no unicode normalization occurs). matchPrefix will match only the first string value that has the prefix.
