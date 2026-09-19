> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/clockkit/clkallcomplicationfamilies

# CLKAllComplicationFamilies

**Interface language:** Objective-C

**Framework:** ClockKit  
**Kind:** Function  
**Availability:** watchOS 7.0+ (deprecated in 27.2)

Returns an array containing all possible values of the complication family enumeration.

## Declaration

```objectivec
extern NSArray<NSNumber *> *CLKAllComplicationFamilies();
```

## Mentioned In

- [Declaring complications for your app](declaring-complications-for-your-app.md)

## See Also

### Migration Support

- [Migrating ClockKit complications to WidgetKit](../widgetkit/converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
- [CLKComplicationDataSource](clkcomplicationdatasource.md): A protocol that provides ClockKit with information about your complication.
- [CLKDefaultComplicationIdentifier](clkdefaultcomplicationidentifier.md): An identifier representing a default complication.
- [CLKComplicationDescriptor](clkcomplicationdescriptor.md): A descriptor that defines a complication and the families that it supports.
