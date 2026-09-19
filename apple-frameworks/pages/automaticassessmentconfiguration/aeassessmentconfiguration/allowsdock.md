> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsdock

# allowsDock (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the Dock during an assessment.

## Declaration

```swift
var allowsDock: Bool { get set }
```

<a id="discussion"></a>

## Discussion

An assessment session hides the Dock by default, but you can allow it by setting [allowsDock](allowsdock.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsDock (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow the Dock during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsDock;
```

<a id="discussion"></a>

## Discussion

An assessment session hides the Dock by default, but you can allow it by setting [allowsDock](allowsdock.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
