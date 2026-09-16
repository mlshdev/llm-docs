> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/packagedescription/gitinformation

# GitInformation

**Framework:** PackageDescription  
**Kind:** Structure  
**Availability:** SwiftPM 6.0+

Information about the git status of a given package, if available.

## Declaration

```swift
struct GitInformation
```

## Topics

### Instance Properties

- [currentCommit](gitinformation/currentcommit.md): The commit currently checked out.
- [currentTag](gitinformation/currenttag.md): The version tag currently checked out, if available.
- [hasUncommittedChanges](gitinformation/hasuncommittedchanges.md): Whether or not there are uncommitted changes in the current repository.

## Relationships

### Conforms To

- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)
