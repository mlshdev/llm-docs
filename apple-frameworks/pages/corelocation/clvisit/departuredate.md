> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clvisit/departuredate](https://developer.apple.com/documentation/corelocation/clvisit/departuredate)

# departureDate (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The approximate time at which the user left the specified location.

## Declaration

```swift
var departureDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

When the visit object does not include departure information, this property is set to the date returned by the [distantFuture](../../foundation/nsdate/distantfuture.md) method of [NSDate](../../foundation/nsdate.md).

## See Also

### Getting the visit duration

- [arrivalDate](arrivaldate.md): The approximate time at which the user arrived at the specified location.

# departureDate (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The approximate time at which the user left the specified location.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * departureDate;
```

<a id="Discussion"></a>

## Discussion

When the visit object does not include departure information, this property is set to the date returned by the [distantFuture](../../foundation/nsdate/distantfuture.md) method of [NSDate](../../foundation/nsdate.md).

## See Also

### Getting the visit duration

- [arrivalDate](arrivaldate.md): The approximate time at which the user arrived at the specified location.
