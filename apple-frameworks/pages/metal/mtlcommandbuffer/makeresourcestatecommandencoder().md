> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/makeresourcestatecommandencoder()](https://developer.apple.com/documentation/metal/mtlcommandbuffer/makeresourcestatecommandencoder())

# makeResourceStateCommandEncoder() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a resource state command encoder that uses default settings.

## Declaration

```swift
func makeResourceStateCommandEncoder() -> (any MTLResourceStateCommandEncoder)?
```

<a id="discussion"></a>

## Discussion

Use an [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) instance’s methods to create a pass that updates the state of one or more sparse textures.

## See Also

### Creating resource state encoders

- [resourceStateCommandEncoder(with:)](resourcestatecommandencoder%28with_%29.md): Creates a resource state command encoder from a descriptor.

# resourceStateCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a resource state command encoder that uses default settings.

## Declaration

```objectivec
- (id<MTLResourceStateCommandEncoder>) resourceStateCommandEncoder;
```

<a id="discussion"></a>

## Discussion

Use an [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) instance’s methods to create a pass that updates the state of one or more sparse textures.

## See Also

### Creating resource state encoders

- [resourceStateCommandEncoderWithDescriptor:](resourcestatecommandencoder%28with_%29.md): Creates a resource state command encoder from a descriptor.
