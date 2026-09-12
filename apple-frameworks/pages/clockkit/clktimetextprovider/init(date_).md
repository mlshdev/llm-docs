> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktimetextprovider/init(date:)](https://developer.apple.com/documentation/clockkit/clktimetextprovider/init(date:))

# init(date:) (Swift)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider for displaying the specified time.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(date: Date)
```

## Parameters

- `date`: The date object containing the time to display. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date.

<a id="Discussion"></a>

## Discussion

The text provider created by this method uses the default time zone information of the current user. The time value is formatted using the current locale information for the user.

## See Also

### Creating a Text Provider

- [init(date:timeZone:)](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.

# textProviderWithDate: (Objective-C)

**Framework:** ClockKit  
**Kind:** Type Method  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

Creates and returns a text provider for displaying the specified time.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
+ (instancetype) textProviderWithDate:(NSDate *) date;
```

## Parameters

- `date`: The date object containing the time to display. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A text provider initialized with the specified date.

<a id="Discussion"></a>

## Discussion

The text provider created by this method uses the default time zone information of the current user. The time value is formatted using the current locale information for the user.

## See Also

### Creating a Text Provider

- [initWithDate:](initwithdate_.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [textProviderWithDate:timeZone:](init%28date_timezone_%29.md): Deprecated. Creates and returns a text provider for displaying the specified time.
- [initWithDate:timeZone:](initwithdate_timezone_.md): Deprecated. Creates and returns a text provider for displaying the specified time.
