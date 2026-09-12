> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/nooptions(_:)](https://developer.apple.com/documentation/network/tcp/nooptions(_:))

# noOptions(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Enable no-options mode.

## Declaration

```swift
func noOptions(_ noOptions: Bool) -> TCP
```

## Parameters

- `noOptions`: True to use no-options mode, false otherwise.

<a id="discussion"></a>

## Discussion

A boolean indicating that TCP should use no-options mode (`TCP_NOOPT`).
