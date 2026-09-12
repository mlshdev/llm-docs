> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/init(byfilteringfile:)](https://developer.apple.com/documentation/appkit/nspasteboard/init(byfilteringfile:))

# init(byFilteringFile:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.

## Declaration

```swift
init(byFilteringFile filename: String)
```

## Parameters

- `filename`: The filename to put on the pasteboard.

<a id="return-value"></a>

## Return Value

The new pasteboard object.

<a id="Discussion"></a>

## Discussion

No filter service is invoked until the data is actually requested, so invoking this method is reasonably inexpensive.

## See Also

### Creating and releasing a pasteboard

- [general](general.md): The shared pasteboard object to use for general content.
- [init(byFilteringData:ofType:)](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringTypesInPasteboard:)](init%28byfilteringtypesinpasteboard_%29.md): Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.
- [init(name:)](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboard.Name](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [withUniqueName()](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally()](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.

# pasteboardByFilteringFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.

## Declaration

```objectivec
+ (NSPasteboard *) pasteboardByFilteringFile:(NSString *) filename;
```

## Parameters

- `filename`: The filename to put on the pasteboard.

<a id="return-value"></a>

## Return Value

The new pasteboard object.

<a id="Discussion"></a>

## Discussion

No filter service is invoked until the data is actually requested, so invoking this method is reasonably inexpensive.

## See Also

### Creating and releasing a pasteboard

- [generalPasteboard](general.md): The shared pasteboard object to use for general content.
- [pasteboardByFilteringData:ofType:](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [pasteboardWithName:](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboardName](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.
