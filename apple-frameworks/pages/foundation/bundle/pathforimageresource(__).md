> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/pathforimageresource(_:)](https://developer.apple.com/documentation/foundation/bundle/pathforimageresource(_:))

# pathForImageResource(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the location of the specified image resource file.

## Declaration

```swift
func pathForImageResource(_ name: NSImage.Name) -> String?
```

## Parameters

- `name`: The name of the image resource file, without any pathname information. Including a filename extension is optional.

<a id="return-value"></a>

## Return Value

The absolute pathname of the resource file or `nil` if the file is not found.

<a id="Discussion"></a>

## Discussion

Image resources are those files in the bundle that are recognized by the `NSImage` class, including those that can be converted using the Image IO framework.

## See Also

### Related Documentation

- [path(forResource:ofType:)](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.

### Finding image resources

- [urlForImageResource(\_:)](urlforimageresource%28__%29.md): Returns the location of the specified image resource as an NSURL.
- [image(forResource:)](image%28forresource_%29.md): Returns an `NSImage` instance associated with the specified name, which can be backed by multiple files representing different resolution versions of the image.

# pathForImageResource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the location of the specified image resource file.

## Declaration

```objectivec
- (NSString *) pathForImageResource:(NSImageName) name;
```

## Parameters

- `name`: The name of the image resource file, without any pathname information. Including a filename extension is optional.

<a id="return-value"></a>

## Return Value

The absolute pathname of the resource file or `nil` if the file is not found.

<a id="Discussion"></a>

## Discussion

Image resources are those files in the bundle that are recognized by the `NSImage` class, including those that can be converted using the Image IO framework.

## See Also

### Related Documentation

- [pathForResource:ofType:](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.

### Finding image resources

- [URLForImageResource:](urlforimageresource%28__%29.md): Returns the location of the specified image resource as an NSURL.
- [imageForResource:](image%28forresource_%29.md): Returns an `NSImage` instance associated with the specified name, which can be backed by multiple files representing different resolution versions of the image.
