> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/entitlementsquery/key(_:)-swift.type.method](https://developer.apple.com/documentation/lightweightcoderequirements/entitlementsquery/key(_:)-swift.type.method)

# key(\_:)

**Framework:** LightweightCodeRequirements  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Match against the specified key name at the root of the entitlements dictionary.

## Declaration

```swift
static func key(_ keyName: String) -> EntitlementsQuery
```

<a id="discussion"></a>

## Discussion

Keys are matched byte for byte (i.e. no unicode normalization occurs). Chain additional qualifiers to constrain the value of the key.
