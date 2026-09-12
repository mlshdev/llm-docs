> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/now](https://developer.apple.com/documentation/foundation/nsdate/now)

# now (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current date and time, as of the time of access.

## Declaration

```swift
class var now: Date { get }
```

<a id="Discussion"></a>

## Discussion

This is equivalent to initializing a new instance with `NSDate()` (or `[[NSDate alloc] init]` in Objective-C). The [NSDate](../nsdate.md) instance doesn’t automatically update its time after you retrieve it.

# now (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current date and time, as of the time of access.

## Declaration

```objectivec
@property (class, copy, readonly) NSDate * now;
```

<a id="Discussion"></a>

## Discussion

This is equivalent to initializing a new instance with `NSDate()` (or `[[NSDate alloc] init]` in Objective-C). The [NSDate](../nsdate.md) instance doesn’t automatically update its time after you retrieve it.
