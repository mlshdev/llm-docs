> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axfeatureoverridesessionerrordomain](https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionerrordomain)

# AXFeatureOverrideSessionErrorDomain (Swift)

**Framework:** Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 18.2+ · iPadOS 18.2+

## Declaration

```swift
let AXFeatureOverrideSessionErrorDomain: String
```

## See Also

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSession.Options](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct.md)
- [AXFeatureOverrideSessionError.Code](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)

# AXFeatureOverrideSessionErrorDomain (Objective-C)

**Framework:** Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 18.2+ · iPadOS 18.2+

## Declaration

```objectivec
extern NSErrorDomain const AXFeatureOverrideSessionErrorDomain;
```

## See Also

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSessionOptions](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
