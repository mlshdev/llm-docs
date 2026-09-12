> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/systemextensions/ossystemextensionsworkspaceobserver/systemextensionwillbecomedisabled(_:)](https://developer.apple.com/documentation/systemextensions/ossystemextensionsworkspaceobserver/systemextensionwillbecomedisabled(_:))

# systemExtensionWillBecomeDisabled(\_:) (Swift)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```swift
optional func systemExtensionWillBecomeDisabled(_ systemExtensionInfo: OSSystemExtensionInfo)
```

<a id="discussion"></a>

## Discussion

This delegate method will be called when the user disables an already enabled system extension, or when the system extension is first installed and is in the disabled state.

# systemExtensionWillBecomeDisabled: (Objective-C)

**Framework:** System Extensions  
**Kind:** Instance Method  
**Availability:** macOS 15.1+

## Declaration

```objectivec
- (void) systemExtensionWillBecomeDisabled:(OSSystemExtensionInfo *) systemExtensionInfo;
```

<a id="discussion"></a>

## Discussion

This delegate method will be called when the user disables an already enabled system extension, or when the system extension is first installed and is in the disabled state.
