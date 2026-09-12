> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/createsnewapplicationinstance](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/createsnewapplicationinstance)

# createsNewApplicationInstance (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you want the system to launch a new instance of the app.

## Declaration

```swift
var createsNewApplicationInstance: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system always launches a new version of the app, even if an existing copy is already running. The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the system to open the already running app when present.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

# createsNewApplicationInstance (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you want the system to launch a new instance of the app.

## Declaration

```objectivec
@property BOOL createsNewApplicationInstance;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the system always launches a new version of the app, even if an existing copy is already running. The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which causes the system to open the already running app when present.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.
