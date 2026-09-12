> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/remove(_:)-313bq](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/remove(_:)-313bq)

# remove(\_:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Removes the availability of a previously allowed app.

## Declaration

```swift
func remove(_ application: AEAssessmentApplication)
```

## Parameters

- `application`: The app that you want to remove from the list of allowed secondary apps.

<a id="discussion"></a>

## Discussion

Use this method to remove apps that you previously added to the list of apps that are available during an assessment with the `AEAssessmentConfiguration/setConfiguration(_:for:)` method. You can get the list of currently allowed apps by accessing the configuration’s [configurationsByApplication](configurationsbyapplication.md) property.

# removeApplication: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 15.0+ · macOS 12.0+

Removes the availability of a previously allowed app.

## Declaration

```objectivec
- (void) removeApplication:(AEAssessmentApplication *) application;
```

## Parameters

- `application`: The app that you want to remove from the list of allowed secondary apps.

<a id="discussion"></a>

## Discussion

Use this method to remove apps that you previously added to the list of apps that are available during an assessment with the `AEAssessmentConfiguration/setConfiguration(_:for:)` method. You can get the list of currently allowed apps by accessing the configuration’s [configurationsByApplication](configurationsbyapplication.md) property.
