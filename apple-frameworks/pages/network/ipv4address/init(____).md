> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/ipv4address/init(_:_:)](https://developer.apple.com/documentation/network/ipv4address/init(_:_:))

# init(\_:\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes an IPv4 address with data.

## Declaration

```swift
init?(_ rawValue: Data, _ interface: NWInterface? = nil)
```

<a id="Discussion"></a>

## Discussion

The provided data is expected to be an IPv4 address of 4 bytes.

## See Also

### Creating Addresses

- [init(\_:)](init%28__%29.md): Initializes an IPv4 address with a string.
