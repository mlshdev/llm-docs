> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/entitlementsquery/matchprefixsingle(_:)](https://developer.apple.com/documentation/lightweightcoderequirements/entitlementsquery/matchprefixsingle(_:))

# matchPrefixSingle(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Match the specified string prefix value against a string value (not an array).

## Declaration

```swift
func matchPrefixSingle(_ value: String) -> EntitlementsQuery
```

<a id="discussion"></a>

## Discussion

Strings are matched byte for byte (i.e. no unicode normalization occurs).
