> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/staticstring/init(unicodescalarliteral:)](https://developer.apple.com/documentation/swift/staticstring/init(unicodescalarliteral:))

# init(unicodeScalarLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized to a single Unicode scalar.

## Declaration

```swift
init(unicodeScalarLiteral value: StaticString)
```

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It may be used by the compiler when you initialize a static string with a Unicode scalar.
