> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileprotectiontype/complete](https://developer.apple.com/documentation/foundation/fileprotectiontype/complete)

# complete (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.

## Declaration

```swift
static let complete: FileProtectionType
```

## See Also

### Working with Protection Levels

- [completeUnlessOpen](completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
- [none](none.md): The file has no special protections associated with it.

# NSFileProtectionComplete (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.

## Declaration

```objectivec
extern NSFileProtectionType const NSFileProtectionComplete;
```

## See Also

### Working with Protection Levels

- [NSFileProtectionCompleteUnlessOpen](completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [NSFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
- [NSFileProtectionNone](none.md): The file has no special protections associated with it.
