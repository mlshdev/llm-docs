> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/managedbuffer/header

# header

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stored `Header` instance.

## Declaration

```swift
final var header: Header
```

<a id="discussion"></a>

## Discussion

During instance creation, in particular during `ManagedBuffer.create`’s call to initialize, `ManagedBuffer`’s `header` property is as-yet uninitialized, and therefore reading the `header` property during `ManagedBuffer.create` is undefined.
