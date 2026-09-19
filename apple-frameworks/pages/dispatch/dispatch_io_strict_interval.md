> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatch_io_strict_interval

# DISPATCH_IO_STRICT_INTERVAL (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.

## Declaration

```swift
var DISPATCH_IO_STRICT_INTERVAL: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Setting this flag can lead to the handler being called even if the amount of data does not exceed the channel’s low-water mark.

## See Also

### Interval Flags

- [strictInterval](dispatchio/intervalflags/strictinterval.md): Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.

# DISPATCH_IO_STRICT_INTERVAL (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enqueue handlers for a channel at strict intervals regardless of how much data has been read or written.

## Declaration

```objectivec
#define DISPATCH_IO_STRICT_INTERVAL
```

<a id="Discussion"></a>

## Discussion

Setting this flag can lead to the handler being called even if the amount of data does not exceed the channel’s low-water mark.
