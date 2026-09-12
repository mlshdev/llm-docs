> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldepthstencildescriptor/isdepthwriteenabled](https://developer.apple.com/documentation/metal/mtldepthstencildescriptor/isdepthwriteenabled)

# isDepthWriteEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether depth values can be written to the depth attachment.

## Declaration

```swift
var isDepthWriteEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which indicates the depth attachment is read-only.

## See Also

### Specifying depth operations

- [depthCompareFunction](depthcomparefunction.md): The comparison that is performed between a fragment’s depth value and the depth value in the attachment, which determines whether to discard the fragment.

# depthWriteEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether depth values can be written to the depth attachment.

## Declaration

```objectivec
@property (nonatomic, getter=isDepthWriteEnabled) BOOL depthWriteEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false), which indicates the depth attachment is read-only.

## See Also

### Specifying depth operations

- [depthCompareFunction](depthcomparefunction.md): The comparison that is performed between a fragment’s depth value and the depth value in the attachment, which determines whether to discard the fragment.
