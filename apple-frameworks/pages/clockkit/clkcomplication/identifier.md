> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplication/identifier](https://developer.apple.com/documentation/clockkit/clkcomplication/identifier)

# identifier (Swift)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

An identifier that specifies a complication if your app supports multiple complications per family.

## Declaration

```swift
var identifier: String { get }
```

## Mentioned In

- [Creating a timeline entry](../creating-a-timeline-entry.md)

<a id="Discussion"></a>

## Discussion

In watchOS 7 and later, ClockKit represents a complication by its [family](family.md) and its [CLKComplicationDescriptor](../clkcomplicationdescriptor.md). Descriptors often represent categories of information that the complication can display. For example, a weather app may support `Condition`, `Temperature`, and `Precipitation` descriptors.

```swift
let ComplicationConditionIdentifier = "ComplicationTypeCondition"
let ComplicationTemperatureIdentifier = "ComplicationTypeTemperature"
let ComplicationPrecipitationPercentageIdentifier = "ComplicationTypePrecipitationPercentage"
```

For apps created for watchOS 6 or earlier, the system automatically sets the configuration’s [identifier](identifier.md) property to [CLKDefaultComplicationIdentifier](../clkdefaultcomplicationidentifier.md) if you don’t implement your data source’s [getComplicationDescriptors(handler:)](../clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md) method. Similarly, the system sets the identifier to [CLKDefaultComplicationIdentifier](../clkdefaultcomplicationidentifier.md) if the complication came from a shared watch face, but the sender chose to exclude private information.

Because default identifiers can come from shared watch faces, your data source’s [getCurrentTimelineEntry(for:withHandler:)](../clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) and [getTimelineEntries(for:after:limit:withHandler:)](../clkcomplicationdatasource/gettimelineentries%28for_after_limit_withhandler_%29.md) methods must check for the [CLKDefaultComplicationIdentifier](../clkdefaultcomplicationidentifier.md) value, and provide generic complication entries when it occurs.

## See Also

### Accessing Data About the Complication

- [family](family.md): Deprecated. The family to which the complication belongs.
- [userActivity](useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): Deprecated. A dictionary of additional data associated with the complication.

# identifier (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

An identifier that specifies a complication if your app supports multiple complications per family.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * identifier;
```

## Mentioned In

- [Creating a timeline entry](../creating-a-timeline-entry.md)

<a id="Discussion"></a>

## Discussion

In watchOS 7 and later, ClockKit represents a complication by its [family](family.md) and its [CLKComplicationDescriptor](../clkcomplicationdescriptor.md). Descriptors often represent categories of information that the complication can display. For example, a weather app may support `Condition`, `Temperature`, and `Precipitation` descriptors.

```swift
let ComplicationConditionIdentifier = "ComplicationTypeCondition"
let ComplicationTemperatureIdentifier = "ComplicationTypeTemperature"
let ComplicationPrecipitationPercentageIdentifier = "ComplicationTypePrecipitationPercentage"
```

For apps created for watchOS 6 or earlier, the system automatically sets the configuration’s [identifier](identifier.md) property to [CLKDefaultComplicationIdentifier](../clkdefaultcomplicationidentifier.md) if you don’t implement your data source’s [getComplicationDescriptorsWithHandler:](../clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md) method. Similarly, the system sets the identifier to [CLKDefaultComplicationIdentifier](../clkdefaultcomplicationidentifier.md) if the complication came from a shared watch face, but the sender chose to exclude private information.

Because default identifiers can come from shared watch faces, your data source’s [getCurrentTimelineEntryForComplication:withHandler:](../clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) and [getTimelineEntriesForComplication:afterDate:limit:withHandler:](../clkcomplicationdatasource/gettimelineentries%28for_after_limit_withhandler_%29.md) methods must check for the [CLKDefaultComplicationIdentifier](../clkdefaultcomplicationidentifier.md) value, and provide generic complication entries when it occurs.

## See Also

### Accessing Data About the Complication

- [family](family.md): Deprecated. The family to which the complication belongs.
- [userActivity](useractivity.md): Deprecated. An object that represents the state of the app at a moment in time.
- [userInfo](userinfo.md): Deprecated. A dictionary of additional data associated with the complication.
