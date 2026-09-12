> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkdefaultcomplicationidentifier](https://developer.apple.com/documentation/clockkit/clkdefaultcomplicationidentifier)

# CLKDefaultComplicationIdentifier (Swift)

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 7.0+

An identifier representing a default complication.

## Declaration

```swift
let CLKDefaultComplicationIdentifier: String
```

<a id="Discussion"></a>

## Discussion

The system assigns a [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md) value to the complication’s `identifier` property, whenever a specific identifier is unavailable. For example, ClockKit uses default type identifiers to represent the type on complications designed for watchOS 6 or earlier. It also uses the default type for complications from a shared watch face, when the sender chose to not include complication data in the shared watch face.

If your app supports multiple complications per family, you must check for [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md) values in your data source’s [getCurrentTimelineEntry(for:withHandler:)](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) and [getTimelineEntries(for:after:limit:withHandler:)](clkcomplicationdatasource/gettimelineentries%28for_after_limit_withhandler_%29.md) methods. If you receive a [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md), return generic entries for the specified family.

```swift
switch complication.identifier {
    
case CLKDefaultComplicationIdentifier:
    templateOrNil = myGetConditionTemplate(for: complication, date: date)
    
case ComplicationTypeTemperatureIdentifier, CLKDefaultComplicationTypeIdentifier:
    templateOrNil = myGetTemperatureTemplate(for: complication, date: date)
    
case ComplicationTypePrecipitationPercentageIdentifier:
    templateOrNil = myGetPrecipitationPercentageTemplate(for: complication, date: date)
    
default:
    print("*** Unrecognized Complication Type ***")
    return nil
}
```

## See Also

### Migration Support

- [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [CLKComplicationDataSource](clkcomplicationdatasource.md): A protocol that provides ClockKit with information about your complication.
- [CLKComplicationDescriptor](clkcomplicationdescriptor.md): A descriptor that defines a complication and the families that it supports.

# CLKDefaultComplicationIdentifier (Objective-C)

**Framework:** ClockKit  
**Kind:** Global Variable  
**Availability:** watchOS 7.0+

An identifier representing a default complication.

## Declaration

```objectivec
extern NSString * const CLKDefaultComplicationIdentifier;
```

<a id="Discussion"></a>

## Discussion

The system assigns a [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md) value to the complication’s `identifier` property, whenever a specific identifier is unavailable. For example, ClockKit uses default type identifiers to represent the type on complications designed for watchOS 6 or earlier. It also uses the default type for complications from a shared watch face, when the sender chose to not include complication data in the shared watch face.

If your app supports multiple complications per family, you must check for [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md) values in your data source’s [getCurrentTimelineEntryForComplication:withHandler:](clkcomplicationdatasource/getcurrenttimelineentry%28for_withhandler_%29.md) and [getTimelineEntriesForComplication:afterDate:limit:withHandler:](clkcomplicationdatasource/gettimelineentries%28for_after_limit_withhandler_%29.md) methods. If you receive a [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md), return generic entries for the specified family.

```swift
switch complication.identifier {
    
case CLKDefaultComplicationIdentifier:
    templateOrNil = myGetConditionTemplate(for: complication, date: date)
    
case ComplicationTypeTemperatureIdentifier, CLKDefaultComplicationTypeIdentifier:
    templateOrNil = myGetTemperatureTemplate(for: complication, date: date)
    
case ComplicationTypePrecipitationPercentageIdentifier:
    templateOrNil = myGetPrecipitationPercentageTemplate(for: complication, date: date)
    
default:
    print("*** Unrecognized Complication Type ***")
    return nil
}
```

## See Also

### Migration Support

- [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [CLKComplicationDataSource](clkcomplicationdatasource.md): A protocol that provides ClockKit with information about your complication.
- [CLKComplicationDescriptor](clkcomplicationdescriptor.md): A descriptor that defines a complication and the families that it supports.
- [CLKAllComplicationFamilies](clkallcomplicationfamilies.md): Deprecated. Returns an array containing all possible values of the complication family enumeration.
