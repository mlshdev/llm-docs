> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrange/enddatecomponents](https://developer.apple.com/documentation/intents/indatecomponentsrange/enddatecomponents)

# endDateComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The end date of the range.

## Declaration

```swift
var endDateComponents: DateComponents? { get }
```

<a id="Discussion"></a>

## Discussion

The contents of this property are set at initialization time and cannot be changed later. If the value of this property is `nil`, the end time is in the distant future.

## See Also

### Getting the Date Information

- [startDateComponents](startdatecomponents.md): The start date of the range.

# endDateComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The end date of the range.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDateComponents * endDateComponents;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSDateComponents * endDateComponents;
```

<a id="Discussion"></a>

## Discussion

The contents of this property are set at initialization time and cannot be changed later. If the value of this property is `nil`, the end time is in the distant future.

## See Also

### Getting the Date Information

- [startDateComponents](startdatecomponents.md): The start date of the range.
