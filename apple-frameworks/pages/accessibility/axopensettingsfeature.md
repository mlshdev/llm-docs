> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axopensettingsfeature](https://developer.apple.com/documentation/accessibility/axopensettingsfeature)

# AXOpenSettingsFeature

**Interface language:** Objective-C

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```objectivec
extern void AXOpenSettingsFeature(AXSettingsFeature feature, void (^completionHandler)(NSError *error));
```

## See Also

### System settings

- [AXAnimatedImagesEnabled](axanimatedimagesenabled.md)
- [AXAnimatedImagesEnabledDidChangeNotification](axanimatedimagesenableddidchangenotification.md)
- [AXPrefersHorizontalTextLayout](axprefershorizontaltextlayout.md)
- [AXPrefersHorizontalTextLayoutDidChangeNotification](axprefershorizontaltextlayoutdidchangenotification.md)
- [AXPrefersHeadAnchorAlternative](axprefersheadanchoralternative.md)
- [AXPrefersHeadAnchorAlternativeDidChangeNotification](axprefersheadanchoralternativedidchangenotification.md)
- [AXPrefersNonBlinkingTextInsertionIndicator](axprefersnonblinkingtextinsertionindicator.md)
