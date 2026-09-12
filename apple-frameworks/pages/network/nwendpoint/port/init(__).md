> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwendpoint/port/init(_:)](https://developer.apple.com/documentation/network/nwendpoint/port/init(_:))

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Initializes a port with a string.

## Declaration

```swift
init?(_ service: String)
```

<a id="Discussion"></a>

## Discussion

Port strings are expected to be numeric values between 0 and 65535. Initializing with any other string will fail.
