> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/copysendright()](https://developer.apple.com/documentation/system/mach/port/copysendright())

# copySendRight()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Create another send right from a given send right.

## Declaration

```swift
func copySendRight() throws -> Mach.Port<Mach.SendRight>
```

<a id="discussion"></a>

## Discussion

This does not affect the makeSendCount of the receive right.

If the send right being copied has become a dead name, meaning the receiving side has been deallocated, then copySendRight() will throw a Mach.PortRightError.deadName error.
