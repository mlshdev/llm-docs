> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/fileprotectiontype/completeuntilfirstuserauthentication](https://developer.apple.com/documentation/foundation/fileprotectiontype/completeuntilfirstuserauthentication)

# completeUntilFirstUserAuthentication (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.

## Declaration

```swift
static let completeUntilFirstUserAuthentication: FileProtectionType
```

<a id="Discussion"></a>

## Discussion

After the user unlocks the device for the first time, your app can access the file and continue to access it even if the user subsequently locks the device.

## See Also

### Working with Protection Levels

- [complete](complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [completeUnlessOpen](completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [none](none.md): The file has no special protections associated with it.

# NSFileProtectionCompleteUntilFirstUserAuthentication (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The file is stored in an encrypted format on disk and cannot be accessed until after the device has booted.

## Declaration

```objectivec
extern NSFileProtectionType const NSFileProtectionCompleteUntilFirstUserAuthentication;
```

<a id="Discussion"></a>

## Discussion

After the user unlocks the device for the first time, your app can access the file and continue to access it even if the user subsequently locks the device.

## See Also

### Working with Protection Levels

- [NSFileProtectionComplete](complete.md): The file is stored in an encrypted format on disk and cannot be read from or written to while the device is locked or booting.
- [NSFileProtectionCompleteUnlessOpen](completeunlessopen.md): The file is stored in an encrypted format on disk after it is closed.
- [NSFileProtectionNone](none.md): The file has no special protections associated with it.
