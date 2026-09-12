> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsspellcheck](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsspellcheck)

# allowsSpellCheck (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether to allow spell check during an assessment.

## Declaration

```swift
var allowsSpellCheck: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Users can activate the spell checker by turning on the Check Spelling feature in the Settings app (General \> Keyboard). An assessment session disables spell checking by default, but you can allow it by setting [allowsSpellCheck](allowsspellcheck.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing corrections

- [autocorrectMode](autocorrectmode-swift.property.md): A Boolean value that indicates whether to allow Autocorrect during an assessment.
- [AEAssessmentConfiguration.AutocorrectMode](autocorrectmode-swift.struct.md): The set of autocorrect features that you can enable during an assessment.

# allowsSpellCheck (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether to allow spell check during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsSpellCheck;
```

<a id="Discussion"></a>

## Discussion

Users can activate the spell checker by turning on the Check Spelling feature in the Settings app (General \> Keyboard). An assessment session disables spell checking by default, but you can allow it by setting [allowsSpellCheck](allowsspellcheck.md) to `true` in the [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance that you use to initialize a session.

## See Also

### Allowing corrections

- [autocorrectMode](autocorrectmode-swift.property.md): A Boolean value that indicates whether to allow Autocorrect during an assessment.
- [AEAutocorrectMode](autocorrectmode-swift.struct.md): The set of autocorrect features that you can enable during an assessment.
