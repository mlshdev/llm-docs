> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfspeechrecognitiontask/iscancelled](https://developer.apple.com/documentation/speech/sfspeechrecognitiontask/iscancelled)

# isCancelled (Swift)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the speech recognition task was canceled.

## Declaration

```swift
var isCancelled: Bool { get }
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is `false`.

## See Also

### Canceling a speech recognition task

- [cancel()](cancel%28%29.md): Cancels the current speech recognition task.

# cancelled (Objective-C)

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.15+ · visionOS 1.0+

A Boolean value that indicates whether the speech recognition task was canceled.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCancelled) BOOL cancelled;
```

<a id="discussion"></a>

## Discussion

By default, the value of this property is `false`.

## See Also

### Canceling a speech recognition task

- [cancel](cancel%28%29.md): Cancels the current speech recognition task.
