> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/mach/portrighterror/deadname](https://developer.apple.com/documentation/system/mach/portrighterror/deadname)

# Mach.PortRightError.deadName

**Framework:** System  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.0+ · watchOS 10.4+

Returned when an operation cannot be completed, because the Mach port right has become a dead name. This is caused by deallocation of the receive right on the other end.

## Declaration

```swift
case deadName
```
