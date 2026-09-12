> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkclinicalcoding/system](https://developer.apple.com/documentation/healthkit/hkclinicalcoding/system)

# system (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The string that identifies the coding system that defines this clinical code.

## Declaration

```swift
var system: String { get }
```

<a id="discussion"></a>

## Discussion

The system is usually expressed as a URL from the [HL7 Terminology](https://terminology.hl7.org/). For example, the RxNorm, a coding system for medications uses: `http://www.nlm.nih.gov/research/umls/rxnorm`.

# system (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The string that identifies the coding system that defines this clinical code.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * system;
```

<a id="discussion"></a>

## Discussion

The system is usually expressed as a URL from the [HL7 Terminology](https://terminology.hl7.org/). For example, the RxNorm, a coding system for medications uses: `http://www.nlm.nih.gov/research/umls/rxnorm`.
