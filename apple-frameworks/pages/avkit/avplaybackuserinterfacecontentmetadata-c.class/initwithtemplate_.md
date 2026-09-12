> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplaybackuserinterfacecontentmetadata-c.class/initwithtemplate:](https://developer.apple.com/documentation/avkit/avplaybackuserinterfacecontentmetadata-c.class/initwithtemplate:)

# initWithTemplate:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initializes a new metadata object by copying values from a metadata template.

## Declaration

```objectivec
- (instancetype) initWithTemplate:(AVPlaybackUserInterfaceContentMetadataTemplate *) metadataTemplate;
```

## Parameters

- `metadataTemplate`: The metadata template to copy values from. If `nil`, returns a metadata object with default values.

<a id="discussion"></a>

## Discussion

This initializer creates an immutable [AVPlaybackUserInterfaceContentMetadata](../avplaybackuserinterfacecontentmetadata-c.class.md) instance from a mutable [AVPlaybackUserInterfaceContentMetadataTemplate](../avplaybackuserinterfacecontentmetadatatemplate.md), providing a convenient way to convert configured template data into stable metadata for playback interfaces.

All properties from the template are copied into the new metadata object, creating an independent immutable snapshot of the template’s current state. Subsequent changes to the template will not affect the created metadata object.
