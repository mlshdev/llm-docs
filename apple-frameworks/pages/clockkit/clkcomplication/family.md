> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplication/family](https://developer.apple.com/documentation/clockkit/clkcomplication/family)

# family (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The family to which the complication belongs.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
var family: CLKComplicationFamily { get }
```

## Mentioned In

- [Creating a timeline entry](../creating-a-timeline-entry.md)

<a id="Discussion"></a>

## Discussion

The [family](family.md) property determines how much space is available to a complication and which templates you can use to display your complication data. In your complication data source, you typically use the property’s value in a `switch` statement when determining the complication template your data source creates.

In watchOS 7 and later, ClockKit represents complications using its [family](family.md) and [identifier](identifier.md). Each pair represents a unique complication that the user can select.

In watchOS 6 and earlier, ClockKit represents a complication by its [family](family.md) only. Each family can only have one complication. For more information, see [Declaring complications for your app](../declaring-complications-for-your-app.md).

## See Also

### Accessing Data About the Complication

- [identifier](identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userActivity](useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): Deprecated. A dictionary of additional data associated with the complication.

# family (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+ (deprecated in 27.0)

The family to which the complication belongs.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```objectivec
@property (nonatomic, readonly) CLKComplicationFamily family;
```

## Mentioned In

- [Creating a timeline entry](../creating-a-timeline-entry.md)

<a id="Discussion"></a>

## Discussion

The [family](family.md) property determines how much space is available to a complication and which templates you can use to display your complication data. In your complication data source, you typically use the property’s value in a `switch` statement when determining the complication template your data source creates.

In watchOS 7 and later, ClockKit represents complications using its [family](family.md) and [identifier](identifier.md). Each pair represents a unique complication that the user can select.

In watchOS 6 and earlier, ClockKit represents a complication by its [family](family.md) only. Each family can only have one complication. For more information, see [Declaring complications for your app](../declaring-complications-for-your-app.md).

## See Also

### Accessing Data About the Complication

- [identifier](identifier.md): Deprecated. An identifier that specifies a complication if your app supports multiple complications per family.
- [userActivity](useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): Deprecated. A dictionary of additional data associated with the complication.
