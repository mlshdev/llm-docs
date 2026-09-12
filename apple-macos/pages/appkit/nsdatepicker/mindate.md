> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/mindate](https://developer.apple.com/documentation/appkit/nsdatepicker/mindate)

# minDate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The date picker’s minimum date value.

## Declaration

```swift
var minDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the minimum value that the date picker allows as input. `nil` indicates no minimum date.

## See Also

### Constraining the Displayable/Selectable Range

- [maxDate](maxdate.md): The date picker’s maximum date value.

# minDate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The date picker’s minimum date value.

## Declaration

```objectivec
@property (copy, nullable) NSDate * minDate;
```

<a id="Discussion"></a>

## Discussion

This property represents the minimum value that the date picker allows as input. `nil` indicates no minimum date.

## See Also

### Constraining the Displayable/Selectable Range

- [maxDate](maxdate.md): The date picker’s maximum date value.
