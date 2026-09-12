> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdatecomponentsrange](https://developer.apple.com/documentation/passkit/pkdatecomponentsrange)

# PKDateComponentsRange (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that specifies the start and end dates for a range of time.

## Declaration

```swift
class PKDateComponentsRange
```

<a id="overview"></a>

## Overview

Create a [PKDateComponentsRange](pkdatecomponentsrange.md) with date components that are valid dates and have a calendar. The [PKDateComponentsRange](pkdatecomponentsrange.md) class supports time zones in date components, and exact times are optional.

Provide a specific time and time zone in the date components to display a correct pickup time regardless of the user’s current time zone.

## Topics

### Creating a Date Range

- [init(start:end:)](pkdatecomponentsrange/init%28start_end_%29.md): Creates a new time range with the start and end dates and times that you specify.

### Reading the Start and End Dates

- [startDateComponents](pkdatecomponentsrange/startdatecomponents.md): The start date and time of the range.
- [endDateComponents](pkdatecomponentsrange/enddatecomponents.md): The end date and time of the range.

### Initializers

- [init(coder:)](pkdatecomponentsrange/init%28coder_%29.md)
- [init(startDateComponents:endDateComponents:)](pkdatecomponentsrange/init%28startdatecomponents_enddatecomponents_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Working with shipping methods

- [detail](pkshippingmethod/detail.md): A user-readable description of the shipping method.
- [dateComponentsRange](pkshippingmethod/datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.
- [identifier](pkshippingmethod/identifier.md): A unique identifier for the shipping method, used by the app.

# PKDateComponentsRange (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

An object that specifies the start and end dates for a range of time.

## Declaration

```objectivec
@interface PKDateComponentsRange : NSObject
```

<a id="overview"></a>

## Overview

Create a [PKDateComponentsRange](pkdatecomponentsrange.md) with date components that are valid dates and have a calendar. The [PKDateComponentsRange](pkdatecomponentsrange.md) class supports time zones in date components, and exact times are optional.

Provide a specific time and time zone in the date components to display a correct pickup time regardless of the user’s current time zone.

## Topics

### Creating a Date Range

- [initWithStartDateComponents:endDateComponents:](pkdatecomponentsrange/init%28start_end_%29.md): Creates a new time range with the start and end dates and times that you specify.

### Reading the Start and End Dates

- [startDateComponents](pkdatecomponentsrange/startdatecomponents.md): The start date and time of the range.
- [endDateComponents](pkdatecomponentsrange/enddatecomponents.md): The end date and time of the range.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Working with shipping methods

- [detail](pkshippingmethod/detail.md): A user-readable description of the shipping method.
- [dateComponentsRange](pkshippingmethod/datecomponentsrange.md): An expected range of delivery or shipping dates for a package, or the time range when an item is available for pickup.
- [identifier](pkshippingmethod/identifier.md): A unique identifier for the shipping method, used by the app.
