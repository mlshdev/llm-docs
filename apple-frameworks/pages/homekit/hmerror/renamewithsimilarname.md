> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/renamewithsimilarname](https://developer.apple.com/documentation/homekit/hmerror/renamewithsimilarname)

# renameWithSimilarName

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to rename an object with its current name.

## Declaration

```swift
static var renameWithSimilarName: HMError.Code { get }
```

## See Also

### Detecting collision errors

- [homeWithSimilarNameExists](homewithsimilarnameexists.md): An attempt to assign a home the same name as an existing home.
- [objectWithSimilarNameExists](objectwithsimilarnameexists.md): An object with a similar name already exists.
- [objectWithSimilarNameExistsInHome](objectwithsimilarnameexistsinhome.md): An attempt to give the name of one object to another object in the home.
