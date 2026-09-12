> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitcomponentmanager/components(passingtest:)](https://developer.apple.com/documentation/avfaudio/avaudiounitcomponentmanager/components(passingtest:))

# components(passingTest:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets an array of audio components that pass the block method.

## Declaration

```swift
func components(passingTest testHandler: @escaping (AVAudioUnitComponent, UnsafeMutablePointer<ObjCBool>) -> Bool) -> [AVAudioUnitComponent]
```

## Parameters

- `testHandler`: The block to apply to the audio unit components.

  The block takes two parameters.

  - **comp**: A block to test.
  - **stop**: A reference to a Boolean value. To stop further processing of the search, the block sets the value to [true](https://developer.apple.com/documentation/swift/true). The stop argument is an out-only argument. Only set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

  The block returns a Boolean value that indicates whether `comp` passes the test. Returning [true](https://developer.apple.com/documentation/swift/true) stops further processing of the audio components.

<a id="return-value"></a>

## Return Value

An array of audio components that pass the test.

<a id="Discussion"></a>

## Discussion

For each audio component the manager finds, the system calls the block method. If the block returns [true](https://developer.apple.com/documentation/swift/true), the method adds `AVAudioComponent` instance to the array.

## See Also

### Getting matching audio components

- [components(matching:)](components%28matching_%29-9qt94.md): Gets an array of audio component objects that match the description.
- [components(matching:)](components%28matching_%29-96l2c.md): Gets an array of audio component objects that match the search predicate.

# componentsPassingTest: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Gets an array of audio components that pass the block method.

## Declaration

```objectivec
- (NSArray<AVAudioUnitComponent *> *) componentsPassingTest:(BOOL (^)(AVAudioUnitComponent *comp, BOOL *stop)) testHandler;
```

## Parameters

- `testHandler`: The block to apply to the audio unit components.

  The block takes two parameters.

  - **comp**: A block to test.
  - **stop**: A reference to a Boolean value. To stop further processing of the search, the block sets the value to [true](https://developer.apple.com/documentation/swift/true). The stop argument is an out-only argument. Only set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the block.

  The block returns a Boolean value that indicates whether `comp` passes the test. Returning [true](https://developer.apple.com/documentation/swift/true) stops further processing of the audio components.

<a id="return-value"></a>

## Return Value

An array of audio components that pass the test.

<a id="Discussion"></a>

## Discussion

For each audio component the manager finds, the system calls the block method. If the block returns [true](https://developer.apple.com/documentation/swift/true), the method adds `AVAudioComponent` instance to the array.

## See Also

### Getting matching audio components

- [componentsMatchingDescription:](components%28matching_%29-9qt94.md): Gets an array of audio component objects that match the description.
- [componentsMatchingPredicate:](components%28matching_%29-96l2c.md): Gets an array of audio component objects that match the search predicate.
