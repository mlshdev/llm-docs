> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axfeatureoverridesessionerror-swift.struct](https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionerror-swift.struct)

# AXFeatureOverrideSessionError

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 18.2+ · iPadOS 18.2+

## Declaration

```swift
struct AXFeatureOverrideSessionError
```

## Topics

### Type Properties

- [appNotEntitled](axfeatureoverridesessionerror-swift.struct/appnotentitled.md)
- [errorDomain](axfeatureoverridesessionerror-swift.struct/errordomain.md)
- [overrideIsAlreadyActive](axfeatureoverridesessionerror-swift.struct/overrideisalreadyactive.md)
- [overrideNotFoundForUUID](axfeatureoverridesessionerror-swift.struct/overridenotfoundforuuid.md)
- [undefined](axfeatureoverridesessionerror-swift.struct/undefined.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSession.Options](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError.Code](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
