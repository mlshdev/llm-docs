> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/encoding/init(iananame:)](https://developer.apple.com/documentation/swift/string/encoding/init(iananame:))

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
