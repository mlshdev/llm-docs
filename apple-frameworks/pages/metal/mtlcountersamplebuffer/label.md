> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffer/label](https://developer.apple.com/documentation/metal/mtlcountersamplebuffer/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A string that identifies the counter sample buffer.

## Declaration

```swift
var label: String { get }
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Inspecting the counter sample buffer’s configuration

- [device](device.md): The GPU device instance that owns the counter sample buffer.
- [sampleCount](samplecount.md): The number of samples in the buffer.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A string that identifies the counter sample buffer.

## Declaration

```objectivec
@property (readonly) NSString * label;
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Inspecting the counter sample buffer’s configuration

- [device](device.md): The GPU device instance that owns the counter sample buffer.
- [sampleCount](samplecount.md): The number of samples in the buffer.
