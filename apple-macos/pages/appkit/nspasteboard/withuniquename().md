> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/withuniquename()](https://developer.apple.com/documentation/appkit/nspasteboard/withuniquename())

# withUniqueName() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.

## Declaration

```swift
class func withUniqueName() -> NSPasteboard
```

<a id="return-value"></a>

## Return Value

The new pasteboard object.

<a id="Discussion"></a>

## Discussion

This method is useful for apps that implement their own interprocess communication using pasteboards. Because the lifetime of a unique pasteboard is not related to the lifetime of the creating app, you must release a unique pasteboard by calling [releaseGlobally()](releaseglobally%28%29.md) to avoid possible leaks.

## See Also

### Creating and releasing a pasteboard

- [general](general.md): The shared pasteboard object to use for general content.
- [init(byFilteringData:ofType:)](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringFile:)](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [init(byFilteringTypesInPasteboard:)](init%28byfilteringtypesinpasteboard_%29.md): Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.
- [init(name:)](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboard.Name](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [releaseGlobally()](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.

# pasteboardWithUniqueName (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.

## Declaration

```objectivec
+ (NSPasteboard *) pasteboardWithUniqueName;
```

<a id="return-value"></a>

## Return Value

The new pasteboard object.

<a id="Discussion"></a>

## Discussion

This method is useful for apps that implement their own interprocess communication using pasteboards. Because the lifetime of a unique pasteboard is not related to the lifetime of the creating app, you must release a unique pasteboard by calling [releaseGlobally](releaseglobally%28%29.md) to avoid possible leaks.

## See Also

### Creating and releasing a pasteboard

- [generalPasteboard](general.md): The shared pasteboard object to use for general content.
- [pasteboardByFilteringData:ofType:](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [pasteboardByFilteringFile:](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [pasteboardWithName:](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboardName](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [releaseGlobally](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.
