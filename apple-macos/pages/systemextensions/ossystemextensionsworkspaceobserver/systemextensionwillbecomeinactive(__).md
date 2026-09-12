> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionsworkspaceobserver/systemextensionwillbecomeinactive(_:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionsworkspaceobserver/systemextensionwillbecomeinactive(_:))

# systemExtensionWillBecomeInactive(\_:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```swift
optional func systemExtensionWillBecomeInactive(_ systemExtensionInfo: OSSystemExtensionInfo)
```

<a id="discussion"></a>

## Discussion

This delegate method will be called when a system extension is deactivated and is about to get uninstalled. The extension may still be running until the system is rebooted.

# systemExtensionWillBecomeInactive: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```objectivec
- (void) systemExtensionWillBecomeInactive:(OSSystemExtensionInfo *) systemExtensionInfo;
```

<a id="discussion"></a>

## Discussion

This delegate method will be called when a system extension is deactivated and is about to get uninstalled. The extension may still be running until the system is rebooted.
