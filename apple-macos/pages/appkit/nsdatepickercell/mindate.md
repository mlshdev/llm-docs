> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell/mindate](https://developer.apple.com/documentation/appkit/nsdatepickercell/mindate)

# minDate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum date that the picker allows as input.

## Declaration

```swift
var minDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` if you want to allow any value for the minimum date.

## See Also

### Date Range Constraints

- [maxDate](maxdate.md): The maximum date that the picker allows as input.

# minDate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum date that the picker allows as input.

## Declaration

```objectivec
@property (copy, nullable) NSDate * minDate;
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` if you want to allow any value for the minimum date.

## See Also

### Date Range Constraints

- [maxDate](maxdate.md): The maximum date that the picker allows as input.
