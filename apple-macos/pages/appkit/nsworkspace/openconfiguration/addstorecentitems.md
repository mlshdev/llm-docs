> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/addstorecentitems](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/addstorecentitems)

# addsToRecentItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether to add the app or documents to the Recent Items menu.

## Declaration

```swift
var addsToRecentItems: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes AppKit to add the items to the Recent Items menu.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

# addsToRecentItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether to add the app or documents to the Recent Items menu.

## Declaration

```objectivec
@property BOOL addsToRecentItems;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes AppKit to add the items to the Recent Items menu.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.
