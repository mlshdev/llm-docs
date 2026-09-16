> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/string/encoding/init(iananame:)

# init(ianaName:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Creates an instance from the name of the IANA registry “charset”.

## Declaration

```swift
init?(ianaName charsetName: String)
```

<a id="discussion"></a>

## Discussion

> **Note**

> The given name is compared to each IANA “charset” name with ASCII case-insensitive collation to determine which encoding is suitable.
