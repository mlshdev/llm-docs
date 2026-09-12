> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/messageauthenticationcode/==(_:_:)-3rxc4](https://developer.apple.com/documentation/cryptokit/messageauthenticationcode/==(_:_:)-3rxc4)

# ==(\_:\_:)

**Framework:** Apple CryptoKit  
**Kind:** Operator  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value indicating whether a message authentication code is equivalent to a collection of binary data.

## Declaration

```swift
static func == <D>(lhs: Self, rhs: D) -> Bool where D : DataProtocol
```

## Parameters

- `lhs`: A message authentication code to compare.
- `rhs`: A collection of binary data to compare.

<a id="return-value"></a>

## Return Value

A Boolean value that’s `true` if the message authentication code and the collection of binary data are equivalent.

## See Also

### Comparing codes

- [==(\_:\_:)](==%28____%29-b90.md): Returns a Boolean value indicating whether two message authentication codes are equal.
