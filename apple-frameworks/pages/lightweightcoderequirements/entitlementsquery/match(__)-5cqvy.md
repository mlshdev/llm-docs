> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/entitlementsquery/match(_:)-5cqvy](https://developer.apple.com/documentation/lightweightcoderequirements/entitlementsquery/match(_:)-5cqvy)

# match(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Match the specified string value against a string or an array of strings.

## Declaration

```swift
func match(_ value: String) -> EntitlementsQuery
```

<a id="discussion"></a>

## Discussion

Strings are matched byte for byte (i.e. no unicode normalization occurs).
