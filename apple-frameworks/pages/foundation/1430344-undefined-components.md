> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/1430344-undefined-components](https://developer.apple.com/documentation/foundation/1430344-undefined-components)

# Undefined Components (Swift)

**Framework:** Foundation  
**Kind:** API Collection

Constants that denote that the value of a date component is undefined.

<a id="overview"></a>

## Overview

For example, when an [NSDateComponents](nsdatecomponents.md) object is created as the result of calculating the distance in time between two dates represented by a particular calendar, the value for the [weekOfYear](nscalendar/unit/weekofyear.md) component would be set to [NSDateComponentUndefined](nsdatecomponentundefined.md).

## Topics

### Constants

- [NSDateComponentUndefined](nsdatecomponentundefined.md): Specifies a date component without a value.
- [NSUndefinedDateComponent](nsundefineddatecomponent.md): Deprecated. Specifies a date component without a value.

## See Also

### Validating a Date

- [isValidDate](nsdatecomponents/isvaliddate.md): A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.
- [isValidDate(in:)](nsdatecomponents/isvaliddate%28in_%29.md): Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [date](nsdatecomponents/date.md): The date calculated from the current components using the stored calendar.

# Undefined Components (Objective-C)

**Framework:** Foundation  
**Kind:** API Collection

Constants that denote that the value of a date component is undefined.

<a id="overview"></a>

## Overview

For example, when an [NSDateComponents](nsdatecomponents.md) object is created as the result of calculating the distance in time between two dates represented by a particular calendar, the value for the [NSCalendarUnitWeekOfYear](nscalendar/unit/weekofyear.md) component would be set to [NSDateComponentUndefined](nsdatecomponentundefined.md).

## Topics

### Constants

- [NSDateComponentUndefined](nsdatecomponentundefined.md): Specifies a date component without a value.
- [NSUndefinedDateComponent](nsundefineddatecomponent.md): Deprecated. Specifies a date component without a value.

## See Also

### Validating a Date

- [validDate](nsdatecomponents/isvaliddate.md): A Boolean value that indicates whether the current combination of properties represents a date which exists in the current calendar.
- [isValidDateInCalendar:](nsdatecomponents/isvaliddate%28in_%29.md): Returns a Boolean value that indicates whether the current combination of properties represents a date which exists in the specified calendar.
- [date](nsdatecomponents/date.md): The date calculated from the current components using the stored calendar.
