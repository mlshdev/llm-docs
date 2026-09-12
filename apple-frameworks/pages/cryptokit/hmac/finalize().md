> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hmac/finalize()](https://developer.apple.com/documentation/cryptokit/hmac/finalize())

# finalize()

**Framework:** Apple CryptoKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Finalizes the message authentication computation and returns the computed code.

## Declaration

```swift
func finalize() -> HMAC<H>.MAC
```

<a id="return-value"></a>

## Return Value

The message authentication code.

## See Also

### Creating an authentication code iteratively

- [init(key:)](init%28key_%29.md): Creates a message authentication code generator.
- [update(data:)](update%28data_%29.md): Updates the message authentication code computation with a block of data.
