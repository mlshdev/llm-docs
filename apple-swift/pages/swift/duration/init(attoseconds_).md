> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/duration/init(attoseconds:)

# init(attoseconds:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Construct a `Duration` from the given number of attoseconds.

## Declaration

```swift
init(attoseconds: Int128)
```

## Parameters

- `attoseconds`: The total duration expressed in attoseconds.

<a id="discussion"></a>

## Discussion

This directly constructs a `Duration` from the given number of attoseconds.

```swift
let d = Duration(attoseconds: 1_000_000_000_000_000_000)
print(d) // 1.0 seconds
```
