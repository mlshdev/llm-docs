> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicalendarselectionmultidate/selecteddates](https://developer.apple.com/documentation/uikit/uicalendarselectionmultidate/selecteddates)

# selectedDates (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An array of date component objects that represent selected dates in a calendar view.

## Declaration

```swift
var selectedDates: [DateComponents] { get set }
```

## See Also

### Updating the selected dates

- [setSelectedDates(\_:animated:)](setselecteddates%28__animated_%29.md): Updates the array of date component objects that represent selected dates in a calendar view, with an option to animate the change.

# selectedDates (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An array of date component objects that represent selected dates in a calendar view.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSDateComponents *> * selectedDates;
```

## See Also

### Updating the selected dates

- [setSelectedDates:animated:](setselecteddates%28__animated_%29.md): Updates the array of date component objects that represent selected dates in a calendar view, with an option to animate the change.
