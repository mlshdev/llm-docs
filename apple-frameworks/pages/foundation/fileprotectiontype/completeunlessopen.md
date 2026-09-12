> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileprotectiontype/completeunlessopen](https://developer.apple.com/documentation/foundation/fileprotectiontype/completeunlessopen)

# completeUnlessOpen (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file is stored in an encrypted format on disk after it is closed.

## Declaration

```swift
static let completeUnlessOpen: FileProtectionType
```

<a id="Discussion"></a>

## Discussion

Files with this type of protection can be created while the device is locked, but once closed, cannot be opened again until the device is unlocked. If the file is opened when unlocked, you may continue to access the file normally, even if the user locks the device. There is a small performance penalty when the file is created and opened, though not when being written to or read from. This can be mitigated by changing the file protection to [complete](complete.md) when the device is unlocked.

## See Also

### Working with Protection Levels

- [complete](complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [completeUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
- [none](none.md): The file has no special protections associated with it.

# NSFileProtectionCompleteUnlessOpen (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file is stored in an encrypted format on disk after it is closed.

## Declaration

```objectivec
extern NSFileProtectionType const NSFileProtectionCompleteUnlessOpen;
```

<a id="Discussion"></a>

## Discussion

Files with this type of protection can be created while the device is locked, but once closed, cannot be opened again until the device is unlocked. If the file is opened when unlocked, you may continue to access the file normally, even if the user locks the device. There is a small performance penalty when the file is created and opened, though not when being written to or read from. This can be mitigated by changing the file protection to [NSFileProtectionComplete](complete.md) when the device is unlocked.

## See Also

### Working with Protection Levels

- [NSFileProtectionComplete](complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [NSFileProtectionCompleteUntilFirstUserAuthentication](completeuntilfirstuserauthentication.md): The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.
- [NSFileProtectionNone](none.md): The file has no special protections associated with it.
