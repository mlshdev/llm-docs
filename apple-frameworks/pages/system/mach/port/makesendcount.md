> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/system/mach/port/makesendcount

# makeSendCount

**Framework:** System  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Access the make-send count.

## Declaration

```swift
var makeSendCount: mach_port_mscount_t { get set }
```

<a id="discussion"></a>

## Discussion

Each get/set of this property makes a syscall.
