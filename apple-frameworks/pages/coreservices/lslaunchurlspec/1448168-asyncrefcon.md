> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lslaunchurlspec/1448168-asyncrefcon](https://developer.apple.com/documentation/coreservices/lslaunchurlspec/1448168-asyncrefcon)

# asyncRefCon (Swift)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A pointer to an arbitrary application-defined value, passed in the Carbon event notifying you of an application’s launch or termination (if you have registered for such notification). The value of this field can be `NULL`.

## Declaration

```swift
var asyncRefCon: UnsafeMutableRawPointer?
```

## See Also

### Configuring a Launch URL

- [appURL](1443566-appurl.md): A Core Foundation URL reference designating the application to launch; see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type.The URL must have scheme `file` and contain a valid path to an application file or application bundle. Set this field to `NULL` to request that each item in the `itemURLs` array be opened in its own preferred application.
- [itemURLs](1443759-itemurls.md): A reference to an array of Core Foundation URL references designating the item or items to open; see the *CFArray Reference* in the Core Foundation Reference Documentation for a description of the `CFArrayRef` data type. The value of this field can be `NULL`, in which case the application designated by `appURL` will be launched without opening any items.
- [launchFlags](1443957-launchflags.md): Launch flags specifying how to launch each application (including whether to print or merely open documents); see [LSLaunchFlags](../lslaunchflags.md) for a description of these flags.
- [passThruParams](1445136-passthruparams.md): A pointer to an Apple event descriptor that is passed untouched as an optional parameter, with keyword `keyAEPropData` (`'prdt'`), in the Apple event sent to each application launched or activated (whether individual preferred applications or the application designated by `appURL`). See the *Apple Event Manager Reference* in the Carbon Interapplication Communication Documentation for a description of the `AEDesc` data type. The value of this field can be `NULL`.

# asyncRefCon (Objective-C)

**Framework:** Core Services  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

A pointer to an arbitrary application-defined value, passed in the Carbon event notifying you of an application’s launch or termination (if you have registered for such notification). The value of this field can be `NULL`.

## Declaration

```objectivec
void *asyncRefCon;
```

## See Also

### Configuring a Launch URL

- [appURL](1443566-appurl.md): A Core Foundation URL reference designating the application to launch; see the *CFURL Reference* in the Core Foundation Reference Documentation for a description of the `CFURLRef` data type.The URL must have scheme `file` and contain a valid path to an application file or application bundle. Set this field to `NULL` to request that each item in the `itemURLs` array be opened in its own preferred application.
- [itemURLs](1443759-itemurls.md): A reference to an array of Core Foundation URL references designating the item or items to open; see the *CFArray Reference* in the Core Foundation Reference Documentation for a description of the `CFArrayRef` data type. The value of this field can be `NULL`, in which case the application designated by `appURL` will be launched without opening any items.
- [launchFlags](1443957-launchflags.md): Launch flags specifying how to launch each application (including whether to print or merely open documents); see [LSLaunchFlags](../lslaunchflags.md) for a description of these flags.
- [passThruParams](1445136-passthruparams.md): A pointer to an Apple event descriptor that is passed untouched as an optional parameter, with keyword `keyAEPropData` (`'prdt'`), in the Apple event sent to each application launched or activated (whether individual preferred applications or the application designated by `appURL`). See the *Apple Event Manager Reference* in the Carbon Interapplication Communication Documentation for a description of the `AEDesc` data type. The value of this field can be `NULL`.
