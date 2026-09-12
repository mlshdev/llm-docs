> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/init(byfilteringtypesinpasteboard:)](https://developer.apple.com/documentation/appkit/nspasteboard/init(byfilteringtypesinpasteboard:))

# init(byFilteringTypesInPasteboard:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.

## Declaration

```swift
init(byFilteringTypesInPasteboard pboard: NSPasteboard)
```

## Parameters

- `pboard`: The original pasteboard object.

<a id="return-value"></a>

## Return Value

The new pasteboard object. This method returns the object in the `pasteboard` parameter if the pasteboard was returned by one of the `pasteboardByFiltering...` methods. This prevents a pasteboard from being expanded multiple times.

<a id="Discussion"></a>

## Discussion

This process can be thought of as expanding the pasteboard, because the new pasteboard generally contains more representations of the data than `pasteboard`.

This method only returns the original types and the types that can be created as a result of a single filter; the pasteboard does not have defined types that are the result of translation by multiple filters.

No filter service is invoked until the data is actually requested, so invoking this method is reasonably inexpensive.

## See Also

### Creating and releasing a pasteboard

- [general](general.md): The shared pasteboard object to use for general content.
- [init(byFilteringData:ofType:)](init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringFile:)](init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [init(name:)](init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboard.Name](name-swift.struct.md): Constants that represent the standard pasteboard names.
- [withUniqueName()](withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally()](releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.
