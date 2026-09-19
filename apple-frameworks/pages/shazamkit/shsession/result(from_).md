> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/shsession/result(from:)

# result(from:)

**Framework:** ShazamKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Performs an asynchronous match with a signature you specify.

## Declaration

```swift
func result(from signature: SHSignature) async -> SHSession.Result
```

## Parameters

- `signature`: The signature to match.

<a id="return-value"></a>

## Return Value

A [SHSession.Result](result.md) enum that indicates the result.

## See Also

### Returning queries

- [SHSession.Result](result.md): Identifies the result from an asynchronous sequence result.
