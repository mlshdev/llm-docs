> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrequestmultistopcardconfigurationwithcompletion:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrequestmultistopcardconfigurationwithcompletion:))

# mapTemplate(\_:didRequestMultiStopCardConfigurationWithCompletion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user requests multi-stop card to be displayed via tapping ETA tray.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRequestMultiStopCardConfigurationWithCompletion completion: @escaping (CPMultiStopCardConfiguration) -> Void)
```

```swift
optional func multiStopCardConfigurationForMapTemplate(_ mapTemplate: CPMapTemplate) async -> CPMultiStopCardConfiguration
```

# mapTemplate:didRequestMultiStopCardConfigurationWithCompletion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user requests multi-stop card to be displayed via tapping ETA tray.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestMultiStopCardConfigurationWithCompletion:(void (^)(CPMultiStopCardConfiguration *)) completion;
```
