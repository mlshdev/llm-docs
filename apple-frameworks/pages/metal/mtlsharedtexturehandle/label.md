> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedtexturehandle/label](https://developer.apple.com/documentation/metal/mtlsharedtexturehandle/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A string that identifies the texture.

## Declaration

```swift
var label: String? { get }
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the shared texture handle

- [device](device.md): The device object that created the texture.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

A string that identifies the texture.

## Declaration

```objectivec
@property (readonly, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Object and command labels are useful identifiers at runtime or when profiling and debugging your app using any Metal tool. See [Naming resources and commands](https://developer.apple.com/documentation/xcode/naming-resources-and-commands).

## See Also

### Identifying the shared texture handle

- [device](device.md): The device object that created the texture.
