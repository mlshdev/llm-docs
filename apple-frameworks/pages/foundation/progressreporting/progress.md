> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressreporting/progress](https://developer.apple.com/documentation/foundation/progressreporting/progress)

# progress (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The progress object returned by the class.

## Declaration

```swift
var progress: Progress { get }
```

<a id="Discussion"></a>

## Discussion

The progress object is usually setup at class initialization time and updated as work is completed. The [progress](progress.md) property is set only once. If another progress object is needed the caller should create a new instance of the custom class to represent the work.

<a id="Special-Considerations"></a>

### Special Considerations

The [progress](progress.md) property is only set once.

# progress (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The progress object returned by the class.

## Declaration

```objectivec
@property (readonly) NSProgress * progress;
```

<a id="Discussion"></a>

## Discussion

The progress object is usually setup at class initialization time and updated as work is completed. The [progress](progress.md) property is set only once. If another progress object is needed the caller should create a new instance of the custom class to represent the work.

<a id="Special-Considerations"></a>

### Special Considerations

The [progress](progress.md) property is only set once.
