> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axfeatureoverridesessionerror-swift.struct/code](https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionerror-swift.struct/code)

# AXFeatureOverrideSessionError.Code (Swift)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 18.2+ · iPadOS 18.2+

## Declaration

```swift
enum Code
```

## Topics

### Enumeration Cases

- [AXFeatureOverrideSessionError.Code.appNotEntitled](code/appnotentitled.md)
- [AXFeatureOverrideSessionError.Code.overrideIsAlreadyActive](code/overrideisalreadyactive.md)
- [AXFeatureOverrideSessionError.Code.overrideNotFoundForUUID](code/overridenotfoundforuuid.md)
- [AXFeatureOverrideSessionError.Code.undefined](code/undefined.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Override sessions

- [AXFeatureOverrideSession](../axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](../axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSession.Options](../axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](../axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](../axfeatureoverridesessionerror-swift.struct.md)
- [com.apple.developer.accessibility.merchant-api-control](../../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)

# AXFeatureOverrideSessionError (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

## Declaration

```objectivec
enum AXFeatureOverrideSessionError : NSInteger;
```

## Topics

### Enumeration Cases

- [AXFeatureOverrideSessionErrorAppNotEntitled](code/appnotentitled.md)
- [AXFeatureOverrideSessionErrorOverrideIsAlreadyActive](code/overrideisalreadyactive.md)
- [AXFeatureOverrideSessionErrorOverrideNotFoundForUUID](code/overridenotfoundforuuid.md)
- [AXFeatureOverrideSessionErrorUndefined](code/undefined.md)

## See Also

### Override sessions

- [AXFeatureOverrideSession](../axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](../axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSessionOptions](../axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](../axfeatureoverridesessionerrordomain.md)
- [com.apple.developer.accessibility.merchant-api-control](../../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
