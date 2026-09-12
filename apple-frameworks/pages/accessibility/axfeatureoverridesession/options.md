> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axfeatureoverridesession/options](https://developer.apple.com/documentation/accessibility/axfeatureoverridesession/options)

# AXFeatureOverrideSession.Options (Swift)

**Framework:** Accessibility  
**Kind:** Structure  
**Availability:** iOS 18.2+ · iPadOS 18.2+

Options indicating which Accessibility features will be turned on or off when an override session is held by your app.

## Declaration

```swift
struct Options
```

## Topics

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

### Type Properties

- [grayscale](options/grayscale.md)
- [invertColors](options/invertcolors.md)
- [voiceControl](options/voicecontrol.md)
- [voiceOver](options/voiceover.md)
- [zoom](options/zoom.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Override sessions

- [AXFeatureOverrideSession](../axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](../axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSessionErrorDomain](../axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](../axfeatureoverridesessionerror-swift.struct.md)
- [AXFeatureOverrideSessionError.Code](../axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)

# AXFeatureOverrideSessionOptions (Objective-C)

**Framework:** Accessibility  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+

Options indicating which Accessibility features will be turned on or off when an override session is held by your app.

## Declaration

```objectivec
enum AXFeatureOverrideSessionOptions : NSUInteger;
```

## Topics

### Enumeration Cases

- [AXFeatureOverrideSessionOptionsGrayscale](options/grayscale.md)
- [AXFeatureOverrideSessionOptionsInvertColors](options/invertcolors.md)
- [AXFeatureOverrideSessionOptionsVoiceControl](options/voicecontrol.md)
- [AXFeatureOverrideSessionOptionsVoiceOver](options/voiceover.md)
- [AXFeatureOverrideSessionOptionsZoom](options/zoom.md)

## See Also

### Override sessions

- [AXFeatureOverrideSession](../axfeatureoverridesession.md): A token object that represents an override session held by your app.
- [AXFeatureOverrideSessionManager](../axfeatureoverridesessionmanager.md): A manager class to begin and end accessibility feature override sessions. Multiple override sessions are reconciled by combining the requests, preferring feature enablement. Ending all sessions restores the prior state of Accessibility feature enablement. Your app must be entitled with com.apple.developer.accessibility.merchant-api-control.
- [AXFeatureOverrideSessionErrorDomain](../axfeatureoverridesessionerrordomain.md)
- [AXFeatureOverrideSessionError](../axfeatureoverridesessionerror-swift.struct/code.md)
- [com.apple.developer.accessibility.merchant-api-control](../../bundleresources/entitlements/com.apple.developer.accessibility.merchant-api-control.md)
