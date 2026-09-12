> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/codingkey/init(stringvalue:)](https://developer.apple.com/documentation/swift/codingkey/init(stringvalue:))

# init(stringValue:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance from the given string.

## Declaration

```swift
init?(stringValue: String)
```

## Parameters

- `stringValue`: The string value of the desired key.

<a id="discussion"></a>

## Discussion

If the string passed as `stringValue` does not correspond to any instance of this type, the result is `nil`.
