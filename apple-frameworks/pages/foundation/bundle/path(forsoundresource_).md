> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/path(forsoundresource:)](https://developer.apple.com/documentation/foundation/bundle/path(forsoundresource:))

# path(forSoundResource:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the location of the specified sound resource file.

## Declaration

```swift
func path(forSoundResource name: NSSound.Name) -> String?
```

## Parameters

- `name`: The name of the sound resource file, without any pathname information. Including a filename extension is optional

<a id="return-value"></a>

## Return Value

The absolute pathname of the resource file or `nil` if the file was not found.

<a id="Discussion"></a>

## Discussion

Sound resources are those files in the bundle that are recognized by the `NSSound` class. The types of sound files can be determined by calling the `soundUnfilteredFileTypes` method of `NSSound`.

## See Also

### Related Documentation

- [path(forResource:ofType:)](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.

# pathForSoundResource: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the location of the specified sound resource file.

## Declaration

```objectivec
- (NSString *) pathForSoundResource:(NSSoundName) name;
```

## Parameters

- `name`: The name of the sound resource file, without any pathname information. Including a filename extension is optional

<a id="return-value"></a>

## Return Value

The absolute pathname of the resource file or `nil` if the file was not found.

<a id="Discussion"></a>

## Discussion

Sound resources are those files in the bundle that are recognized by the `NSSound` class. The types of sound files can be determined by calling the `soundUnfilteredFileTypes` method of `NSSound`.

## See Also

### Related Documentation

- [pathForResource:ofType:](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.
