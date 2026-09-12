> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachment/init(filewrapper:)](https://developer.apple.com/documentation/appkit/nstextattachment/init(filewrapper:))

# init(fileWrapper:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Creates a text attachment object to contain the specified file wrapper.

## Declaration

```swift
convenience init(fileWrapper: FileWrapper?)
```

## Parameters

- `fileWrapper`: The file wrapper for the attachment.

<a id="return-value"></a>

## Return Value

A new text attachment object initialized with the file wrapper.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the [NSTextAttachment](../nstextattachment.md) class in macOS.

If `aWrapper` contains an image file that the receiver can interpret as an [NSImage](../nsimage.md) object, this method sets the attachment cell’s image to that image rather than to the icon of `aWrapper`.

## See Also

### Initializing a text attachment

- [init(data:ofType:)](init%28data_oftype_%29.md): Creates a text attachment object with the specified data.

# initWithFileWrapper: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Creates a text attachment object to contain the specified file wrapper.

## Declaration

```objectivec
- (instancetype) initWithFileWrapper:(NSFileWrapper *) fileWrapper;
```

## Parameters

- `fileWrapper`: The file wrapper for the attachment.

<a id="return-value"></a>

## Return Value

A new text attachment object initialized with the file wrapper.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the [NSTextAttachment](../nstextattachment.md) class in macOS.

If `aWrapper` contains an image file that the receiver can interpret as an [NSImage](../nsimage.md) object, this method sets the attachment cell’s image to that image rather than to the icon of `aWrapper`.

## See Also

### Initializing a text attachment

- [initWithData:ofType:](init%28data_oftype_%29.md): Creates a text attachment object with the specified data.
