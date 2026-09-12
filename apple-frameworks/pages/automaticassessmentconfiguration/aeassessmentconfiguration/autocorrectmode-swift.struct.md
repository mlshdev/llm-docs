> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/autocorrectmode-swift.struct](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/autocorrectmode-swift.struct)

# AEAssessmentConfiguration.AutocorrectMode (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 18.0+ · macOS 15.0+

The set of autocorrect features that you can enable during an assessment.

## Declaration

```swift
struct AutocorrectMode
```

<a id="overview"></a>

## Overview

Use one or more of the autocorrect modes to set the [autocorrectMode](autocorrectmode-swift.property.md) property of an [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance. For example, you can enable both spelling and punctuation corrections by combining [spelling](autocorrectmode-swift.struct/spelling.md) and [punctuation](autocorrectmode-swift.struct/punctuation.md):

**Swift**

```swift
let config = AEAssessmentConfiguration()

#if os(iOS) // Available only on iOS and iPadOS.
config.autocorrectMode = [.punctuation, .spelling]
#endif

let session = AEAssessmentSession(configuration: config)
```

**Objective-C**

```objc
AEAssessmentConfiguration *config = [AEAssessmentConfiguration new];

#if TARGET_OS_IPHONE || TARGET_IPHONE_SIMULATOR // Available only on iOS and iPadOS.
config.autocorrectMode = AEAutocorrectModePunctuation | AEAutocorrectModeSpelling;
#endif

AEAssessmentSession *session = [[AEAssessmentSession alloc] initWithConfiguration:config];
```

## Topics

### Creating a mode

- [init(rawValue:)](autocorrectmode-swift.struct/init%28rawvalue_%29.md): Creates a new mode instance.

### Modes

- [punctuation](autocorrectmode-swift.struct/punctuation.md): A mode in which autocorrect checks punctuation as the user types.
- [spelling](autocorrectmode-swift.struct/spelling.md): A mode in which autocorrect checks for spelling as the user types.

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

### Allowing corrections

- [allowsSpellCheck](allowsspellcheck.md): A Boolean value that indicates whether to allow spell check during an assessment.
- [autocorrectMode](autocorrectmode-swift.property.md): A Boolean value that indicates whether to allow Autocorrect during an assessment.

# AEAutocorrectMode (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

The set of autocorrect features that you can enable during an assessment.

## Declaration

```objectivec
enum AEAutocorrectMode : NSUInteger;
```

<a id="overview"></a>

## Overview

Use one or more of the autocorrect modes to set the [autocorrectMode](autocorrectmode-swift.property.md) property of an [AEAssessmentConfiguration](../aeassessmentconfiguration.md) instance. For example, you can enable both spelling and punctuation corrections by combining [AEAutocorrectModeSpelling](autocorrectmode-swift.struct/spelling.md) and [AEAutocorrectModePunctuation](autocorrectmode-swift.struct/punctuation.md):

**Swift**

```swift
let config = AEAssessmentConfiguration()

#if os(iOS) // Available only on iOS and iPadOS.
config.autocorrectMode = [.punctuation, .spelling]
#endif

let session = AEAssessmentSession(configuration: config)
```

**Objective-C**

```objc
AEAssessmentConfiguration *config = [AEAssessmentConfiguration new];

#if TARGET_OS_IPHONE || TARGET_IPHONE_SIMULATOR // Available only on iOS and iPadOS.
config.autocorrectMode = AEAutocorrectModePunctuation | AEAutocorrectModeSpelling;
#endif

AEAssessmentSession *session = [[AEAssessmentSession alloc] initWithConfiguration:config];
```

## Topics

### Modes

- [AEAutocorrectModePunctuation](autocorrectmode-swift.struct/punctuation.md): A mode in which autocorrect checks punctuation as the user types.
- [AEAutocorrectModeSpelling](autocorrectmode-swift.struct/spelling.md): A mode in which autocorrect checks for spelling as the user types.
- [AEAutocorrectModeNone](../aeautocorrectmode/aeautocorrectmodenone.md): A mode that indicates autocorrect doesn’t check anything.

## See Also

### Allowing corrections

- [allowsSpellCheck](allowsspellcheck.md): A Boolean value that indicates whether to allow spell check during an assessment.
- [autocorrectMode](autocorrectmode-swift.property.md): A Boolean value that indicates whether to allow Autocorrect during an assessment.
