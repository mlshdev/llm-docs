> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/mach/port/init()

# init()

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Allocate a new Mach port with a receive right, creating a Mach.Port\<Mach.ReceiveRight\> to manage it.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

This initializer will abort if the right could not be created. Callers may assert that a valid right is always returned.
