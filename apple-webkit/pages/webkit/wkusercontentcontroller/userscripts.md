> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkusercontentcontroller/userscripts](https://developer.apple.com/documentation/webkit/wkusercontentcontroller/userscripts)

# userScripts (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The user scripts associated with the user content controller.

## Declaration

```swift
var userScripts: [WKUserScript] { get }
```

## See Also

### Adding and Removing Custom Scripts

- [addUserScript(\_:)](adduserscript%28__%29.md): Injects the specified script into the webpage’s content.
- [removeAllUserScripts()](removealluserscripts%28%29.md): Removes all user scripts from the web view.

# userScripts (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The user scripts associated with the user content controller.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<WKUserScript *> * userScripts;
```

## See Also

### Adding and Removing Custom Scripts

- [addUserScript:](adduserscript%28__%29.md): Injects the specified script into the webpage’s content.
- [removeAllUserScripts](removealluserscripts%28%29.md): Removes all user scripts from the web view.
