> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipv4address/init(_:)](https://developer.apple.com/documentation/network/ipv4address/init(_:))

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes an IPv4 address with a string.

## Declaration

```swift
init?(_ string: String)
```

<a id="Discussion"></a>

## Discussion

The provided string will be interpreted as an IPv4 address. If the string cannot be interpreted as an IPv4 address, the initialization will fail.

## See Also

### Creating Addresses

- [init(\_:\_:)](init%28____%29.md): Initializes an IPv4 address with data.
