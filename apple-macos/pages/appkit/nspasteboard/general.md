> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/general](https://developer.apple.com/documentation/appkit/nspasteboard/general)

# general (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The shared pasteboard object to use for general content.

## Declaration

```swift
class var general: NSPasteboard { get }
```

<a id="return-value"></a>

## Return Value

The general pasteboard.

<a id="Discussion"></a>

## Discussion

Invokes [init(name:)](init%28name_%29.md) to obtain the pasteboard.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

### Creating and releasing a pasteboard

- [init(byFilteringData:ofType:)](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringFile:)](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [init(byFilteringTypesInPasteboard:)](init%28byfilteringtypesinpasteboard_%29.md): Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.
- [init(name:)](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboard.Name](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [withUniqueName()](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally()](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.

# generalPasteboard (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The shared pasteboard object to use for general content.

## Declaration

```objectivec
@property (class, strong, readonly) NSPasteboard * generalPasteboard;
```

<a id="return-value"></a>

## Return Value

The general pasteboard.

<a id="Discussion"></a>

## Discussion

Invokes [pasteboardWithName:](init%28name_%29.md) to obtain the pasteboard.

## See Also

### Related Documentation

- [Drag and Drop](../drag-and-drop.md): Support the direct manipulation of your app’s content using drag and drop.
- [NSPasteboard](../nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [Services Functions](../services-functions.md): Configure the contents of your app’s Services menu.

### Creating and releasing a pasteboard

- [pasteboardByFilteringData:ofType:](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [pasteboardByFilteringFile:](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [pasteboardWithName:](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboardName](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.
