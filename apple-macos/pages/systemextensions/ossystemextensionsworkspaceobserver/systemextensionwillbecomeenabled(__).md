> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionsworkspaceobserver/systemextensionwillbecomeenabled(_:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionsworkspaceobserver/systemextensionwillbecomeenabled(_:))

# systemExtensionWillBecomeEnabled(\_:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```swift
optional func systemExtensionWillBecomeEnabled(_ systemExtensionInfo: OSSystemExtensionInfo)
```

<a id="discussion"></a>

## Discussion

This delegate method will be called when a system extension has been validated and allowed by the user to run.

# systemExtensionWillBecomeEnabled: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```objectivec
- (void) systemExtensionWillBecomeEnabled:(OSSystemExtensionInfo *) systemExtensionInfo;
```

<a id="discussion"></a>

## Discussion

This delegate method will be called when a system extension has been validated and allowed by the user to run.
