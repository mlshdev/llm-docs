> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/label](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

A string that identifies the rate map.

## Declaration

```swift
var label: String? { get }
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. For more information, see [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the rate map

- [device](device.md): The device object that created the rate map.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

A string that identifies the rate map.

## Declaration

```objectivec
@property (readonly, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. For more information, see [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the rate map

- [device](device.md): The device object that created the rate map.
