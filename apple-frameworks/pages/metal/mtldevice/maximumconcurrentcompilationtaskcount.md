> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maximumconcurrentcompilationtaskcount](https://developer.apple.com/documentation/metal/mtldevice/maximumconcurrentcompilationtaskcount)

# maximumConcurrentCompilationTaskCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.3+ · tvOS 26.0+ · visionOS 26.0+

The maximum number of concurrent compilation tasks the device is running.

## Declaration

```swift
var maximumConcurrentCompilationTaskCount: Int { get }
```

<a id="discussion"></a>

## Discussion

The property’s value can change when you set the [shouldMaximizeConcurrentCompilation](shouldmaximizeconcurrentcompilation.md) property to a new value.

# maximumConcurrentCompilationTaskCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.3+ · tvOS 26.0+ · visionOS 26.0+

The maximum number of concurrent compilation tasks the device is running.

## Declaration

```objectivec
@property (readonly) NSUInteger maximumConcurrentCompilationTaskCount;
```

<a id="discussion"></a>

## Discussion

The property’s value can change when you set the [shouldMaximizeConcurrentCompilation](shouldmaximizeconcurrentcompilation.md) property to a new value.
