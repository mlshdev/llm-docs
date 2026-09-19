> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/speech/sfspeechrecognitionrequest/addspunctuation

# addsPunctuation (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether to add punctuation to speech recognition results.

## Declaration

```swift
var addsPunctuation: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to `true` for the speech framework to automatically include punctuation in the recognition results. Punctuation includes a period or question mark at the end of a sentence, and a comma within a sentence.

# addsPunctuation (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether to add punctuation to speech recognition results.

## Declaration

```objectivec
@property (nonatomic) BOOL addsPunctuation;
```

<a id="discussion"></a>

## Discussion

Set this property to `true` for the speech framework to automatically include punctuation in the recognition results. Punctuation includes a period or question mark at the end of a sentence, and a comma within a sentence.
