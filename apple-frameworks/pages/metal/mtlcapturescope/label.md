> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturescope/label](https://developer.apple.com/documentation/metal/mtlcapturescope/label)

# label (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A string that helps you identify the capture scope.

## Declaration

```swift
var label: String? { get set }
```

<a id="discussion"></a>

## Discussion

Setting a capture scope’s label makes it easier to find in Xcode. See [Creating and using custom capture scopes](https://developer.apple.com/documentation/xcode/creating-and-using-custom-capture-scopes) for more information.

## See Also

### Identifying the capture scope

- [device](device.md): The device object from which you created the capture scope.
- [commandQueue](commandqueue.md): The command queue that this capture scope uses to limit which commands are recorded.

# label (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A string that helps you identify the capture scope.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSString * label;
```

<a id="discussion"></a>

## Discussion

Setting a capture scope’s label makes it easier to find in Xcode. See [Creating and using custom capture scopes](https://developer.apple.com/documentation/xcode/creating-and-using-custom-capture-scopes) for more information.

## See Also

### Identifying the capture scope

- [device](device.md): The device object from which you created the capture scope.
- [commandQueue](commandqueue.md): The command queue that this capture scope uses to limit which commands are recorded.
