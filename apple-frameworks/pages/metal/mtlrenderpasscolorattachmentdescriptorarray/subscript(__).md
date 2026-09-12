> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpasscolorattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlrenderpasscolorattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the descriptor object for the specified color attachment.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTLRenderPassColorAttachmentDescriptor! { get set }
```

## Parameters

- `attachmentIndex`: An index in the color attachment array.

<a id="return-value"></a>

## Return Value

A descriptor object that contains color attachment information.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Returns the descriptor object for the specified color attachment.

## Declaration

```objectivec
- (MTLRenderPassColorAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: An index in the color attachment array.

<a id="return-value"></a>

## Return Value

A descriptor object that contains color attachment information.

## See Also

### Accessing the description of a color attachment

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets the descriptor for the specified color attachment.
