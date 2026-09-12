> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clkcomplicationserver/reloadcomplicationdescriptors()](https://developer.apple.com/documentation/clockkit/clkcomplicationserver/reloadcomplicationdescriptors())

# reloadComplicationDescriptors() (Swift)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Reloads the complication descriptors from the complication data source.

## Declaration

```swift
func reloadComplicationDescriptors()
```

## Mentioned In

- [Declaring complications for your app](../declaring-complications-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this method to reload the complication descriptors from your data source. ClockKit then calls your data source’s [getComplicationDescriptors(handler:)](../clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md) method to update the list of available complications.

If your data source removes a complication that’s already present on a watch face, ClockKit continues to display the complication and to request new timeline entries for that complication. However, the user won’t be able to add the complication to new watch faces.

# reloadComplicationDescriptors (Objective-C)

**Framework:** ClockKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+ (deprecated in 27.0)

Reloads the complication descriptors from the complication data source.

## Declaration

```objectivec
- (void) reloadComplicationDescriptors;
```

## Mentioned In

- [Declaring complications for your app](../declaring-complications-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Call this method to reload the complication descriptors from your data source. ClockKit then calls your data source’s [getComplicationDescriptorsWithHandler:](../clkcomplicationdatasource/getcomplicationdescriptors%28handler_%29.md) method to update the list of available complications.

If your data source removes a complication that’s already present on a watch face, ClockKit continues to display the complication and to request new timeline entries for that complication. However, the user won’t be able to add the complication to new watch faces.
