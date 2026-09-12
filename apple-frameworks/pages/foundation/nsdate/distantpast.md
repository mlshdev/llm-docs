> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdate/distantpast](https://developer.apple.com/documentation/foundation/nsdate/distantpast)

# distantPast (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A date object representing a date in the distant past.

## Declaration

```swift
class var distantPast: Date { get }
```

<a id="return-value"></a>

## Return Value

An [NSDate](../nsdate.md) object representing a date in the distant past (in terms of centuries).

<a id="Discussion"></a>

## Discussion

You can use this object as a control date, a guaranteed temporal boundary.

## See Also

### Getting Temporal Boundaries

- [distantFuture](distantfuture.md): A date object representing a date in the distant future.

# distantPast (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A date object representing a date in the distant past.

## Declaration

```objectivec
@property (class, copy, readonly) NSDate * distantPast;
```

<a id="return-value"></a>

## Return Value

An [NSDate](../nsdate.md) object representing a date in the distant past (in terms of centuries).

<a id="Discussion"></a>

## Discussion

You can use this object as a control date, a guaranteed temporal boundary.

## See Also

### Getting Temporal Boundaries

- [distantFuture](distantfuture.md): A date object representing a date in the distant future.
