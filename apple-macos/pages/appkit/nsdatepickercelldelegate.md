> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsdatepickercelldelegate

# NSDatePickerCellDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSDatePickerCell](nsdatepickercell.md) objects.

## Declaration

```swift
protocol NSDatePickerCellDelegate : NSObjectProtocol
```

## Topics

### Content Validation

- [datePickerCell(\_:validateProposedDateValue:timeInterval:)](nsdatepickercelldelegate/datepickercell%28__validateproposeddatevalue_timeinterval_%29.md): The delegate receives this message each time the user attempts to change the receiver’s value, allowing the delegate the opportunity to override the change.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cells

- [NSDatePickerCell](nsdatepickercell.md): An object that controls the behavior of a date picker, or of a single date picker cell in a matrix.

# NSDatePickerCellDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods implemented by delegates of [NSDatePickerCell](nsdatepickercell.md) objects.

## Declaration

```objectivec
@protocol NSDatePickerCellDelegate <NSObject>
```

## Topics

### Content Validation

- [datePickerCell:validateProposedDateValue:timeInterval:](nsdatepickercelldelegate/datepickercell%28__validateproposeddatevalue_timeinterval_%29.md): The delegate receives this message each time the user attempts to change the receiver’s value, allowing the delegate the opportunity to override the change.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Cells

- [NSDatePickerCell](nsdatepickercell.md): An object that controls the behavior of a date picker, or of a single date picker cell in a matrix.
