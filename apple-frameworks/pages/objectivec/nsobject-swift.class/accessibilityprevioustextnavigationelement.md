> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityprevioustextnavigationelement

# accessibilityPreviousTextNavigationElement (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An accessibility element that contains text that is semantically previous to this element’s text.

## Declaration

```swift
@MainActor var accessibilityPreviousTextNavigationElement: Any? { get set }
```

<a id="discussion"></a>

## Discussion

Assistive technologies transition to these elements when navigating through text granularities, such as when using the VoiceOver Lines rotor.

# accessibilityPreviousTextNavigationElement (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

An accessibility element that contains text that is semantically previous to this element’s text.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id accessibilityPreviousTextNavigationElement;
```

<a id="discussion"></a>

## Discussion

Assistive technologies transition to these elements when navigating through text granularities, such as when using the VoiceOver Lines rotor.
