> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/cfsocketsignature/address

# address (Swift)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A CFData object holding the contents of a `struct sockaddr` appropriate for the given protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example), identifying the address of the socket.

## Declaration

```swift
var address: Unmanaged<CFData>!
```

# address (Objective-C)

**Framework:** Core Foundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A CFData object holding the contents of a `struct sockaddr` appropriate for the given protocol family (`struct sockaddr_in` or `struct sockaddr_in6`, for example), identifying the address of the socket.

## Declaration

```objectivec
CFDataRef address;
```
