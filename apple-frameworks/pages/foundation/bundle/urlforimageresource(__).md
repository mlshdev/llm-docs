> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/urlforimageresource(_:)](https://developer.apple.com/documentation/foundation/bundle/urlforimageresource(_:))

# urlForImageResource(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the location of the specified image resource as an NSURL.

## Declaration

```swift
func urlForImageResource(_ name: NSImage.Name) -> URL?
```

## Parameters

- `name`: The name of the image resource file. Including a filename extension is optional.

<a id="return-value"></a>

## Return Value

An `NSURL` for the resource file or `nil` if the file was not found.

## See Also

### Finding image resources

- [pathForImageResource(\_:)](pathforimageresource%28__%29.md): Returns the location of the specified image resource file.
- [image(forResource:)](image%28forresource_%29.md): Returns an `NSImage` instance associated with the specified name, which can be backed by multiple files representing different resolution versions of the image.

# URLForImageResource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the location of the specified image resource as an NSURL.

## Declaration

```objectivec
- (NSURL *) URLForImageResource:(NSImageName) name;
```

## Parameters

- `name`: The name of the image resource file. Including a filename extension is optional.

<a id="return-value"></a>

## Return Value

An `NSURL` for the resource file or `nil` if the file was not found.

## See Also

### Finding image resources

- [pathForImageResource:](pathforimageresource%28__%29.md): Returns the location of the specified image resource file.
- [imageForResource:](image%28forresource_%29.md): Returns an `NSImage` instance associated with the specified name, which can be backed by multiple files representing different resolution versions of the image.
