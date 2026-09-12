> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitionresult/isfinal](https://developer.apple.com/documentation/speech/sfspeechrecognitionresult/isfinal)

# isFinal (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether speech recognition is complete and whether the transcriptions are final.

## Declaration

```swift
var isFinal: Bool { get }
```

<a id="discussion"></a>

## Discussion

When a speech recognition request is final, its transcriptions don’t change.

# final (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether speech recognition is complete and whether the transcriptions are final.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFinal) BOOL final;
```

<a id="discussion"></a>

## Discussion

When a speech recognition request is final, its transcriptions don’t change.
