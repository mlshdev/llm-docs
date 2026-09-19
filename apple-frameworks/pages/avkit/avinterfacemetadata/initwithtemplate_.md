> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avinterfacemetadata/initwithtemplate:

# initWithTemplate:

**Interface language:** Objective-C

**Framework:** AVKit  
**Kind:** Instance Method

Initializes a new metadata object by copying values from a metadata template.

## Declaration

```objectivec
- (instancetype) initWithTemplate:(AVInterfaceMetadataTemplate *) metadataTemplate;
```

## Parameters

- `metadataTemplate`: The metadata template to copy values from. If nil, returns a metadata object with default values.

<a id="discussion"></a>

## Discussion

This initializer creates an immutable `AVInterfaceMetadata` instance from a mutable `AVInterfaceMetadataTemplate`, providing a convenient way to convert configured template data into stable metadata for playback interfaces.

All properties from the template are copied into the new metadata object, creating an independent immutable snapshot of the template’s current state. Subsequent changes to the template will not affect the created metadata object.
