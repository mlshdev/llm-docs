> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/entitlementsquery/key(_:)-swift.method](https://developer.apple.com/documentation/lightweightcoderequirements/entitlementsquery/key(_:)-swift.method)

# key(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Match the specified key in a nested dictionary

## Declaration

```swift
func key(_ keyName: String) -> EntitlementsQuery
```

<a id="discussion"></a>

## Discussion

Keys are matched byte for byte (i.e. no unicode normalization occurs).
