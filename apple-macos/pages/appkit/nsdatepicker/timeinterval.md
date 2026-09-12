> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/timeinterval](https://developer.apple.com/documentation/appkit/nsdatepicker/timeinterval)

# timeInterval (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time interval selected by the date picker.

## Declaration

```swift
var timeInterval: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

The time interval that represents the receiver’s date range. The date range begins at the date returned by [dateValue](datevalue.md). This method returns 0 when the receiver is not in the NSRangeDateMode mode.

## See Also

### Accessing Object Values

- [dateValue](datevalue.md): The date selected by the date picker.

# timeInterval (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The time interval selected by the date picker.

## Declaration

```objectivec
@property NSTimeInterval timeInterval;
```

<a id="Discussion"></a>

## Discussion

The time interval that represents the receiver’s date range. The date range begins at the date returned by [dateValue](datevalue.md). This method returns 0 when the receiver is not in the NSRangeDateMode mode.

## See Also

### Accessing Object Values

- [dateValue](datevalue.md): The date selected by the date picker.
