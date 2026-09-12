> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/begesturetype](https://developer.apple.com/documentation/browserenginekit/begesturetype)

# BEGestureType (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

The types of touch gestures that operate on input text.

## Declaration

```swift
enum BEGestureType
```

## Topics

### Tap gestures

- [BEGestureType.oneFingerTap](begesturetype/onefingertap.md): A gesture for a single tap performed with one finger.
- [BEGestureType.oneFingerDoubleTap](begesturetype/onefingerdoubletap.md): A gesture for a double tap with a single finger.
- [BEGestureType.oneFingerTripleTap](begesturetype/onefingertripletap.md): A gesture for three rapid consecutive taps with one finger.
- [BEGestureType.doubleTap](begesturetype/doubletap.md): A gesture for two rapid consecutive taps.
- [BEGestureType.twoFingerSingleTap](begesturetype/twofingersingletap.md): A gesture for a single simultaneous tap with two fingers.

### Press and hold gestures

- [BEGestureType.doubleTapAndHold](begesturetype/doubletapandhold.md): A gesture for a double tap followed by holding the second tap.
- [BEGestureType.loupe](begesturetype/loupe.md): A gesture for touch interactions with the magnifying glass tool.
- [BEGestureType.forceTouch](begesturetype/forcetouch.md): A gesture that represents a deep press using 3D Touch or Force Touch.

### Selection and range gestures

- [BEGestureType.twoFingerRangedSelectGesture](begesturetype/twofingerrangedselectgesture.md): A gesture to select a range of text with two fingers.
- [BEGestureType.imPhraseBoundaryDrag](begesturetype/imphraseboundarydrag.md): A gesture for dragging to adjust input method phrase boundaries.

### Creation of a gesture type

- [init(rawValue:)](begesturetype/init%28rawvalue_%29.md): Creates a gesture option of the specified underlying value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.

# BEGestureType (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · tvOS 17.4+ · visionOS 1.1+

The types of touch gestures that operate on input text.

## Declaration

```objectivec
enum BEGestureType : NSInteger;
```

## Topics

### Tap gestures

- [BEGestureTypeOneFingerTap](begesturetype/onefingertap.md): A gesture for a single tap performed with one finger.
- [BEGestureTypeOneFingerDoubleTap](begesturetype/onefingerdoubletap.md): A gesture for a double tap with a single finger.
- [BEGestureTypeOneFingerTripleTap](begesturetype/onefingertripletap.md): A gesture for three rapid consecutive taps with one finger.
- [BEGestureTypeDoubleTap](begesturetype/doubletap.md): A gesture for two rapid consecutive taps.
- [BEGestureTypeTwoFingerSingleTap](begesturetype/twofingersingletap.md): A gesture for a single simultaneous tap with two fingers.

### Press and hold gestures

- [BEGestureTypeDoubleTapAndHold](begesturetype/doubletapandhold.md): A gesture for a double tap followed by holding the second tap.
- [BEGestureTypeLoupe](begesturetype/loupe.md): A gesture for touch interactions with the magnifying glass tool.
- [BEGestureTypeForceTouch](begesturetype/forcetouch.md): A gesture that represents a deep press using 3D Touch or Force Touch.

### Selection and range gestures

- [BEGestureTypeTwoFingerRangedSelectGesture](begesturetype/twofingerrangedselectgesture.md): A gesture to select a range of text with two fingers.
- [BEGestureTypeIMPhraseBoundaryDrag](begesturetype/imphraseboundarydrag.md): A gesture for dragging to adjust input method phrase boundaries.

## See Also

### Interaction responses

- [BETextInteraction](betextinteraction.md): An interaction you add to a text view to support extended text gestures.
- [BETextInteractionDelegate](betextinteractiondelegate.md): A set of methods that informs you about selection changes in text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
- [BEResponderEditActions](berespondereditactions.md): A set of methods that defines extended interactions in browser text views.
