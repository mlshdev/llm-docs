> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfence/label](https://developer.apple.com/documentation/metal/mtlfence/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A string that identifies the fence.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying a fence

- [device](device.md): The device object that created the fence.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A string that identifies the fence.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying a fence

- [device](device.md): The device object that created the fence.
