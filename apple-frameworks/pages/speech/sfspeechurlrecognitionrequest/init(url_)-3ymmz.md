> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechurlrecognitionrequest/init(url:)-3ymmz](https://developer.apple.com/documentation/speech/sfspeechurlrecognitionrequest/init(url:)-3ymmz)

# init(url:) (Swift)

**Framework:** Speech  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Creates a speech recognition request, initialized with the specified URL.

## Declaration

```swift
init(url URL: URL)
```

<a id="discussion"></a>

## Discussion

Use this method to create a request to recognize speech in a recorded audio file that resides at the specified URL. Pass the request to the recognizer’s [recognitionTask(with:delegate:)](../sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) method to start recognition.

# initWithURL: (Objective-C)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

Creates a speech recognition request, initialized with the specified URL.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) URL;
```

<a id="discussion"></a>

## Discussion

Use this method to create a request to recognize speech in a recorded audio file that resides at the specified URL. Pass the request to the recognizer’s [recognitionTaskWithRequest:delegate:](../sfspeechrecognizer/recognitiontask%28with_delegate_%29.md) method to start recognition.
