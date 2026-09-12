> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axfeatureoverridesessionmanager](https://developer.apple.com/documentation/accessibility/axfeatureoverridesessionmanager)

# AXFeatureOverrideSessionManager (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.

## Declaration

```swift
class AXFeatureOverrideSessionManager
```

## Topics

### Instance Methods

- [beginOverrideSession(enabling:disabling:)](axfeatureoverridesessionmanager/beginoverridesession%28enabling_disabling_%29.md)
- [end(\_:)](axfeatureoverridesessionmanager/end%28__%29.md)

### Type Properties

- [sharedInstance](axfeatureoverridesessionmanager/sharedinstance.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSession.Options](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct.md)
- [AXFeatureOverrideSessionError.Code](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)

# AXFeatureOverrideSessionManager (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.

## Declaration

```objectivec
@interface AXFeatureOverrideSessionManager : NSObject
```

## Topics

### Instance Methods

- [beginOverrideSessionEnablingOptions:disablingOptions:error:](axfeatureoverridesessionmanager/beginoverridesession%28enabling_disabling_%29.md)
- [endOverrideSession:error:](axfeatureoverridesessionmanager/end%28__%29.md)

### Type Properties

- [sharedInstance](axfeatureoverridesessionmanager/sharedinstance.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Override sessions

- [AXFeatureOverrideSession](axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionOptions](axfeatureoverridesession/options.md): Options indicating which Accessibility features will be turned on or off when an override session is held by your app.
- [AXFeatureOverrideSessionErrorDomain](axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
