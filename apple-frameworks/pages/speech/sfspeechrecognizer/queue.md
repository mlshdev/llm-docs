> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognizer/queue](https://developer.apple.com/documentation/speech/sfspeechrecognizer/queue)

# queue (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The queue on which to execute recognition task handlers and delegate methods.

## Declaration

```swift
var queue: OperationQueue { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is the app’s main queue. Assign a different queue if you want delegate methods and handlers to be executed on a background queue.

The handler you pass to the [requestAuthorization(\_:)](requestauthorization%28__%29.md) method does not use this queue.

## See Also

### Configuring the speech recognizer

- [defaultTaskHint](defaulttaskhint.md): A hint that indicates the type of speech recognition being requested.

# queue (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

The queue on which to execute recognition task handlers and delegate methods.

## Declaration

```objectivec
@property (nonatomic, strong) NSOperationQueue * queue;
```

<a id="discussion"></a>

## Discussion

The default value of this property is the app’s main queue. Assign a different queue if you want delegate methods and handlers to be executed on a background queue.

The handler you pass to the [requestAuthorization:](requestauthorization%28__%29.md) method does not use this queue.

## See Also

### Configuring the speech recognizer

- [defaultTaskHint](defaulttaskhint.md): A hint that indicates the type of speech recognition being requested.
