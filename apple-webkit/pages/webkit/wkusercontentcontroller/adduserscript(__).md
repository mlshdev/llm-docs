> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/adduserscript(_:)](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/adduserscript(_:))

# addUserScript(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Injects the specified script into the webpage’s content.

## Declaration

```swift
func addUserScript(_ userScript: WKUserScript)
```

## Parameters

- `userScript`: The user script to add to the web view’s current page.

## See Also

### Adding and Removing Custom Scripts

- [removeAllUserScripts()](removealluserscripts%28%29.md): Removes all user scripts from the web view.
- [userScripts](userscripts.md): The user scripts associated with the user content controller.

# addUserScript: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Injects the specified script into the webpage’s content.

## Declaration

```objectivec
- (void) addUserScript:(WKUserScript *) userScript;
```

## Parameters

- `userScript`: The user script to add to the web view’s current page.

## See Also

### Adding and Removing Custom Scripts

- [removeAllUserScripts](removealluserscripts%28%29.md): Removes all user scripts from the web view.
- [userScripts](userscripts.md): The user scripts associated with the user content controller.
