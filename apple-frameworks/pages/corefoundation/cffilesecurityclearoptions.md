> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cffilesecurityclearoptions](https://developer.apple.com/documentation/corefoundation/cffilesecurityclearoptions)

# CFFileSecurityClearOptions (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
struct CFFileSecurityClearOptions
```

## Topics

### Constants

- [accessControlList](cffilesecurityclearoptions/accesscontrollist.md): Clear the access control list.
- [group](cffilesecurityclearoptions/group.md): Clear the (POSIX) group ID.
- [groupUUID](cffilesecurityclearoptions/groupuuid.md): Clear the group UUID (for the access control list).
- [mode](cffilesecurityclearoptions/mode.md): Clear the file’s mode (POSIX permissions).
- [owner](cffilesecurityclearoptions/owner.md): Clear the (POSIX) owner ID.
- [ownerUUID](cffilesecurityclearoptions/owneruuid.md): Clear the owner UUID (for the access control list).

### Initializers

- [init(rawValue:)](cffilesecurityclearoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Enumerations

- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFRunLoopRunResult](cfrunlooprunresult.md)
- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.
- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL(\_:\_:\_:)](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CGRectEdge](cgrectedge.md)

# CFFileSecurityClearOptions (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
enum CFFileSecurityClearOptions : CFOptionFlags;
```

## Topics

### Constants

- [kCFFileSecurityClearAccessControlList](cffilesecurityclearoptions/accesscontrollist.md): Clear the access control list.
- [kCFFileSecurityClearGroup](cffilesecurityclearoptions/group.md): Clear the (POSIX) group ID.
- [kCFFileSecurityClearGroupUUID](cffilesecurityclearoptions/groupuuid.md): Clear the group UUID (for the access control list).
- [kCFFileSecurityClearMode](cffilesecurityclearoptions/mode.md): Clear the file’s mode (POSIX permissions).
- [kCFFileSecurityClearOwner](cffilesecurityclearoptions/owner.md): Clear the (POSIX) owner ID.
- [kCFFileSecurityClearOwnerUUID](cffilesecurityclearoptions/owneruuid.md): Clear the owner UUID (for the access control list).

## See Also

### Enumerations

- [CFISO8601DateFormatOptions](cfiso8601dateformatoptions.md)
- [CFRunLoopRunResult](cfrunlooprunresult.md)
- [CFURLEnumeratorOptions](cfurlenumeratoroptions.md): Options for controlling enumerator behavior.
- [CFURLEnumeratorResult](cfurlenumeratorresult.md): Result codes from the [CFURLEnumeratorGetNextURL](cfurlenumeratorgetnexturl%28______%29.md) function.
- [CGRectEdge](cgrectedge.md)
