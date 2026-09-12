> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdatepickercell/maxdate](https://developer.apple.com/documentation/appkit/nsdatepickercell/maxdate)

# maxDate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum date that the picker allows as input.

## Declaration

```swift
var maxDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` if you want to allow any value for the maximum date.

## See Also

### Date Range Constraints

- [minDate](mindate.md): The minimum date that the picker allows as input.

# maxDate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The maximum date that the picker allows as input.

## Declaration

```objectivec
@property (copy, nullable) NSDate * maxDate;
```

<a id="Discussion"></a>

## Discussion

Set this property to `nil` if you want to allow any value for the maximum date.

## See Also

### Date Range Constraints

- [minDate](mindate.md): The minimum date that the picker allows as input.
