> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentapplication/requiressignaturevalidation](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentapplication/requiressignaturevalidation)

# requiresSignatureValidation (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

A Boolean that indicates whether the session requires the app to have a valid code signature to run.

## Declaration

```swift
var requiresSignatureValidation: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is `true`, as it is by default, the system requires that the app’s code signature is valid, and that either Apple distributes the app, or the developer notarizes the app or distributes it through the App Store. You can set the value to `false` to relax these requirements, but do so with caution, because that greatly reduces the security of your assessment session.

# requiresSignatureValidation (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

A Boolean that indicates whether the session requires the app to have a valid code signature to run.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresSignatureValidation;
```

<a id="Discussion"></a>

## Discussion

When this property is `true`, as it is by default, the system requires that the app’s code signature is valid, and that either Apple distributes the app, or the developer notarizes the app or distributes it through the App Store. You can set the value to `false` to relax these requirements, but do so with caution, because that greatly reduces the security of your assessment session.
