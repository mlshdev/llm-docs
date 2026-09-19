> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/objectwithsimilarnameexists

# objectWithSimilarNameExists

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

An object with a similar name already exists.

## Declaration

```swift
static var objectWithSimilarNameExists: HMError.Code { get }
```

## See Also

### Detecting collision errors

- [homeWithSimilarNameExists](homewithsimilarnameexists.md): An attempt to assign a home the same name as an existing home.
- [objectWithSimilarNameExistsInHome](objectwithsimilarnameexistsinhome.md): An attempt to give the name of one object to another object in the home.
- [renameWithSimilarName](renamewithsimilarname.md): An attempt to rename an object with its current name.
