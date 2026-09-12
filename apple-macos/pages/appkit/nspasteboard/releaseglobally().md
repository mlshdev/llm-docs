> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/releaseglobally()](https://developer.apple.com/documentation/appkit/nspasteboard/releaseglobally())

# releaseGlobally() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Releases the receiver’s resources in the pasteboard server.

## Declaration

```swift
func releaseGlobally()
```

<a id="Discussion"></a>

## Discussion

After this method is invoked, no other application can use the receiver.

> **Important**

>  Although you must call this method to release a temporary, privately named pasteboard to avoid leaks, you should never call it on a standard pasteboard.

## See Also

### Creating and releasing a pasteboard

- [general](general.md): The shared pasteboard object to use for general content.
- [init(byFilteringData:ofType:)](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringFile:)](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [init(byFilteringTypesInPasteboard:)](init%28byfilteringtypesinpasteboard_%29.md): Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.
- [init(name:)](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboard.Name](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [withUniqueName()](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.

# releaseGlobally (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Releases the receiver’s resources in the pasteboard server.

## Declaration

```objectivec
- (void) releaseGlobally;
```

<a id="Discussion"></a>

## Discussion

After this method is invoked, no other application can use the receiver.

> **Important**

>  Although you must call this method to release a temporary, privately named pasteboard to avoid leaks, you should never call it on a standard pasteboard.

## See Also

### Creating and releasing a pasteboard

- [generalPasteboard](general.md): The shared pasteboard object to use for general content.
- [pasteboardByFilteringData:ofType:](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [pasteboardByFilteringFile:](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [pasteboardWithName:](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboardName](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [pasteboardWithUniqueName](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
