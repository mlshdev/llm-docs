> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/autocorrectmode-swift.property](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/autocorrectmode-swift.property)

# autocorrectMode (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether to allow Autocorrect during an assessment.

## Declaration

```swift
var autocorrectMode: AEAssessmentConfiguration.AutocorrectMode { get set }
```

<a id="Discussion"></a>

## Discussion

Users can turn on autocorrect in the Settings app (General \> Keyboard \> Auto-Correction). An assessment session disables this feature by default, but you can allow it by setting [autocorrectMode](autocorrectmode-swift.property.md) in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session. Set the mode’s value to some combination of the the values from the [AEAssessmentConfiguration.AutocorrectMode](autocorrectmode-swift.struct.md) structure.

## See Also

### Allowing corrections

- [allowsSpellCheck](allowsspellcheck.md): A Boolean value that indicates whether to allow spell check during an assessment.
- [AEAssessmentConfiguration.AutocorrectMode](autocorrectmode-swift.struct.md): The set of autocorrect features that you can enable during an assessment.

# autocorrectMode (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether to allow Autocorrect during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) AEAutocorrectMode autocorrectMode;
```

<a id="Discussion"></a>

## Discussion

Users can turn on autocorrect in the Settings app (General \> Keyboard \> Auto-Correction). An assessment session disables this feature by default, but you can allow it by setting [autocorrectMode](autocorrectmode-swift.property.md) in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session. Set the mode’s value to some combination of the the values from the [AEAutocorrectMode](autocorrectmode-swift.struct.md) structure.

## See Also

### Allowing corrections

- [allowsSpellCheck](allowsspellcheck.md): A Boolean value that indicates whether to allow spell check during an assessment.
- [AEAutocorrectMode](autocorrectmode-swift.struct.md): The set of autocorrect features that you can enable during an assessment.
