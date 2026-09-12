> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/distantfuture](https://developer.apple.com/documentation/foundation/nsdate/distantfuture)

# distantFuture (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A date object representing a date in the distant future.

## Declaration

```swift
class var distantFuture: Date { get }
```

<a id="return-value"></a>

## Return Value

An [NSDate](../nsdate.md) object representing a date in the distant future (in terms of centuries).

<a id="Discussion"></a>

## Discussion

You can pass this value when an [NSDate](../nsdate.md) object is required to have the date argument essentially ignored. For example, the [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) method [nextEvent(matching:until:inMode:dequeue:)](https://developer.apple.com/documentation/appkit/nswindow/nextevent%28matching:until:inmode:dequeue:%29) returns `nil` if an event specified in the event mask does not happen before the specified date. You can use the object returned by [distantFuture](distantfuture.md) as the date argument to wait indefinitely for the event to occur.

```objc
myEvent = [myWindow nextEventMatchingMask:myEventMask
    untilDate:[NSDate distantFuture]
    inMode:NSDefaultRunLoopMode
    dequeue:YES];
```

## See Also

### Getting Temporal Boundaries

- [distantPast](distantpast.md): A date object representing a date in the distant past.

# distantFuture (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A date object representing a date in the distant future.

## Declaration

```objectivec
@property (class, copy, readonly) NSDate * distantFuture;
```

<a id="return-value"></a>

## Return Value

An [NSDate](../nsdate.md) object representing a date in the distant future (in terms of centuries).

<a id="Discussion"></a>

## Discussion

You can pass this value when an [NSDate](../nsdate.md) object is required to have the date argument essentially ignored. For example, the [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) method [nextEventMatchingMask:untilDate:inMode:dequeue:](https://developer.apple.com/documentation/appkit/nswindow/nextevent%28matching:until:inmode:dequeue:%29) returns `nil` if an event specified in the event mask does not happen before the specified date. You can use the object returned by [distantFuture](distantfuture.md) as the date argument to wait indefinitely for the event to occur.

```objc
myEvent = [myWindow nextEventMatchingMask:myEventMask
    untilDate:[NSDate distantFuture]
    inMode:NSDefaultRunLoopMode
    dequeue:YES];
```

## See Also

### Getting Temporal Boundaries

- [distantPast](distantpast.md): A date object representing a date in the distant past.
