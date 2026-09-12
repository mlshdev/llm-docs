> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileprotectiontype/none](https://developer.apple.com/documentation/foundation/fileprotectiontype/none)

# none (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file has no special protections associated with it.

## Declaration

```swift
static let none: FileProtectionType
```

<a id="Discussion"></a>

## Discussion

A file with this type of protection can be read from or written to at any time.

## See Also

### Working with Protection Levels

- [complete](complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [completeUnlessOpen](completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.

# NSFileProtectionNone (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file has no special protections associated with it.

## Declaration

```objectivec
extern NSFileProtectionType const NSFileProtectionNone;
```

<a id="Discussion"></a>

## Discussion

A file with this type of protection can be read from or written to at any time.

## See Also

### Working with Protection Levels

- [NSFileProtectionComplete](complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [NSFileProtectionCompleteUnlessOpen](completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [NSFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
