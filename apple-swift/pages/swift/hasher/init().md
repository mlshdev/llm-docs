> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/hasher/init()

# init()

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new hasher.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

The hasher uses a per-execution seed value that is set during process startup, usually from a high-quality random source.
