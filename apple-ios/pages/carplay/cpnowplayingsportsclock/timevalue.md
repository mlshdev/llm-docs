> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsclock/timevalue

# timeValue (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The time value you specify at initialization.

## Declaration

```swift
var timeValue: TimeInterval { get }
```

<a id="discussion"></a>

## Discussion

This property contains the time value you specify at initialization time. Use this value as a reference for when you initialized the clock object. CarPlay doesn’t change the value in this property.

## See Also

### Getting the clock attributes

- [countsUp](countsup.md): A Boolean value that indicates whether the event clock counts up.
- [isPaused](ispaused.md): A Boolean value that indicates whether the clock is paused.

# timeValue (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The time value you specify at initialization.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSTimeInterval timeValue;
```

<a id="discussion"></a>

## Discussion

This property contains the time value you specify at initialization time. Use this value as a reference for when you initialized the clock object. CarPlay doesn’t change the value in this property.

## See Also

### Getting the clock attributes

- [countsUp](countsup.md): A Boolean value that indicates whether the event clock counts up.
- [paused](ispaused.md): A Boolean value that indicates whether the clock is paused.
