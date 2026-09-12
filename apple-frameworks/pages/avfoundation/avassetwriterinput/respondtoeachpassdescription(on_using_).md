> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/respondtoeachpassdescription(on:using:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/respondtoeachpassdescription(on:using:))

# respondToEachPassDescription(on:using:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the input to invoke a callback whenever it begins a new pass.

## Declaration

```swift
func respondToEachPassDescription(on queue: dispatch_queue_t, using block: @escaping @Sendable () -> Void)
```

## Parameters

- `queue`: The queue on which to invoke the callback.
- `block`: A callback the input invokes at the beginning of each pass.

<a id="Discussion"></a>

## Discussion

A typical implemementation of the callback block performs the following steps:

1. Gets the value of the [currentPassDescription](currentpassdescription.md) property and configures media data source accordingly.
2. Calls the [requestMediaDataWhenReady(on:using:)](requestmediadatawhenready%28on_using_%29.md) method to begin appending data for the current pass.

After you’ve appended all media data for the current pass, call the [markCurrentPassAsFinished()](markcurrentpassasfinished%28%29.md) method have the system determine whether to perform another pass. If it performs an additional pass the system invokes the callback to begin the next pass. When it determines that it requires no additional passes, the system invokes the callback one final time so the client can invoke [markAsFinished()](markasfinished%28%29.md) in response to the value of [currentPassDescription](currentpassdescription.md) becoming `nil`.

> **Important**

>  Before calling this method, you must add the input to an asset writer and call the writer’s [startWriting()](../avassetwriter/startwriting%28%29.md) method.

## See Also

### Performing multiple-pass encoding

- [canPerformMultiplePasses](canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](../avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished()](markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
- [AVAssetWriterInput.MultiPassController](multipasscontroller.md): Provides an interface to receive an async sequence of pass descriptions for the writer input receiver, if multi-pass is supported.

# respondToEachPassDescriptionOnQueue:usingBlock: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Tells the input to invoke a callback whenever it begins a new pass.

## Declaration

```objectivec
- (void) respondToEachPassDescriptionOnQueue:(dispatch_queue_t) queue usingBlock:(dispatch_block_t) block;
```

## Parameters

- `queue`: The queue on which to invoke the callback.
- `block`: A callback the input invokes at the beginning of each pass.

<a id="Discussion"></a>

## Discussion

A typical implemementation of the callback block performs the following steps:

1. Gets the value of the [currentPassDescription](currentpassdescription.md) property and configures media data source accordingly.
2. Calls the [requestMediaDataWhenReadyOnQueue:usingBlock:](requestmediadatawhenready%28on_using_%29.md) method to begin appending data for the current pass.

After you’ve appended all media data for the current pass, call the [markCurrentPassAsFinished](markcurrentpassasfinished%28%29.md) method have the system determine whether to perform another pass. If it performs an additional pass the system invokes the callback to begin the next pass. When it determines that it requires no additional passes, the system invokes the callback one final time so the client can invoke [markAsFinished](markasfinished%28%29.md) in response to the value of [currentPassDescription](currentpassdescription.md) becoming `nil`.

> **Important**

>  Before calling this method, you must add the input to an asset writer and call the writer’s [startWriting](../avassetwriter/startwriting%28%29.md) method.

## See Also

### Performing multiple-pass encoding

- [canPerformMultiplePasses](canperformmultiplepasses.md): A Boolean value that indicates whether the input may perform multiple passes over appended media data.
- [currentPassDescription](currentpassdescription.md): An object that describes the requirements for the current pass.
- [AVAssetWriterInputPassDescription](../avassetwriterinputpassdescription.md): An object that defines the interface to query for the requirements of the current pass.
- [markCurrentPassAsFinished](markcurrentpassasfinished%28%29.md): Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.
- [performsMultiPassEncodingIfSupported](performsmultipassencodingifsupported.md): A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.
