> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsstructuralinput](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsstructuralinput)

# allowsStructuralInput (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Chinese and Japanese structural input during an assessment.

## Declaration

```swift
var allowsStructuralInput: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Chinese and Japanese structural input methods allow users to enter characters using component-based input. An assessment session disables structural input by default, but you can allow it by setting [allowsStructuralInput](allowsstructuralinput.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

# allowsStructuralInput (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether to allow Chinese and Japanese structural input during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsStructuralInput;
```

<a id="discussion"></a>

## Discussion

Chinese and Japanese structural input methods allow users to enter characters using component-based input. An assessment session disables structural input by default, but you can allow it by setting [allowsStructuralInput](allowsstructuralinput.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.
