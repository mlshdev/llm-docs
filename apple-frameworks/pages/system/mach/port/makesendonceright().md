> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/port/makesendonceright()](https://developer.apple.com/documentation/system/mach/port/makesendonceright())

# makeSendOnceRight()

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Create a send-once right for a given receive right.

## Declaration

```swift
func makeSendOnceRight() -> Mach.Port<Mach.SendOnceRight>
```

<a id="discussion"></a>

## Discussion

This does not affect the makeSendCount of the receive right.

This function will abort if the right could not be created. Callers may assert that a valid right is always returned.
