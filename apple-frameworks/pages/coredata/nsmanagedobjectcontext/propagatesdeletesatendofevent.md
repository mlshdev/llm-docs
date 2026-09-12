> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectcontext/propagatesdeletesatendofevent](https://developer.apple.com/documentation/coredata/nsmanagedobjectcontext/propagatesdeletesatendofevent)

# propagatesDeletesAtEndOfEvent (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the context propagates deletes at the end of the event in which a change was made.

## Declaration

```swift
var propagatesDeletesAtEndOfEvent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver propagates deletes at the end of the event in which a change was made, [false](https://developer.apple.com/documentation/swift/false) if it propagates deletes only during a save operation. The default is [true](https://developer.apple.com/documentation/swift/true).

# propagatesDeletesAtEndOfEvent (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the context propagates deletes at the end of the event in which a change was made.

## Declaration

```objectivec
@property (nonatomic) BOOL propagatesDeletesAtEndOfEvent;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver propagates deletes at the end of the event in which a change was made, [false](https://developer.apple.com/documentation/swift/false) if it propagates deletes only during a save operation. The default is [true](https://developer.apple.com/documentation/swift/true).
