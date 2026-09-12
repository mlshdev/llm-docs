> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/platformtype/value/init(rawvalue:)](https://developer.apple.com/documentation/lightweightcoderequirements/platformtype/value/init(rawvalue:))

# init(rawValue:)

**Framework:** LightweightCodeRequirements  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a new instance with the specified raw value.

## Declaration

```swift
init?(rawValue: Int64)
```

<a id="discussion"></a>

## Discussion

If there is no value of the type that corresponds with the specified raw value, this initializer returns `nil`
