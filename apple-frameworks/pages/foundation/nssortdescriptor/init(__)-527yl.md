> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssortdescriptor/init(_:)-527yl](https://developer.apple.com/documentation/foundation/nssortdescriptor/init(_:)-527yl)

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an `NSSortDescriptor` representing the same sort as the given `SortDescriptor`.

## Declaration

```swift
@backDeployed(before: iOS 17, macOS 14, tvOS 17, watchOS 10)
convenience init<Compared>(_ sortDescriptor: SortDescriptor<Compared>) where Compared : NSObject
```

## Parameters

- `sortDescriptor`: The `SortDescriptor` to convert.
