> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepicker/maxdate](https://developer.apple.com/documentation/appkit/nsdatepicker/maxdate)

# maxDate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The date picker’s maximum date value.

## Declaration

```swift
var maxDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the maximum value that the date picker allows as input. `nil` indicates no maximum date.

## See Also

### Constraining the Displayable/Selectable Range

- [minDate](mindate.md): The date picker’s minimum date value.

# maxDate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The date picker’s maximum date value.

## Declaration

```objectivec
@property (copy, nullable) NSDate * maxDate;
```

<a id="Discussion"></a>

## Discussion

This property represents the maximum value that the date picker allows as input. `nil` indicates no maximum date.

## See Also

### Constraining the Displayable/Selectable Range

- [minDate](mindate.md): The date picker’s minimum date value.
