> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/predicate](https://developer.apple.com/documentation/homekit/hmeventtrigger/predicate)

# predicate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The predicate to evaluate before executing the scene associated with the event trigger.

## Declaration

```swift
@NSCopying var predicate: NSPredicate? { get }
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is `nil`, which means that it evaluates as [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Adding a trigger condition

- [updatePredicate(\_:completionHandler:)](updatepredicate%28__completionhandler_%29.md): Replaces the predicate used to evaluate execution of the scene associated with the event trigger.

# predicate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The predicate to evaluate before executing the scene associated with the event trigger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSPredicate * predicate;
```

<a id="Discussion"></a>

## Discussion

By default, the value of this property is `nil`, which means that it evaluates as [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Adding a trigger condition

- [updatePredicate:completionHandler:](updatepredicate%28__completionhandler_%29.md): Replaces the predicate used to evaluate execution of the scene associated with the event trigger.
