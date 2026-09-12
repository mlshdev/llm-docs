> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/allowsrunningapplicationsubstitution](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/allowsrunningapplicationsubstitution)

# allowsRunningApplicationSubstitution (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.

## Declaration

```swift
var allowsRunningApplicationSubstitution: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If an instance of an application is already running and is capable of opening the provided URLs, but the running instance is at a different URL, use the running application.

This property defaults to [true](https://developer.apple.com/documentation/swift/true). Set this to [false](https://developer.apple.com/documentation/swift/false) if you let the user select between specific versions of an application, or let them choose a particular installation.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

# allowsRunningApplicationSubstitution (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.

## Declaration

```objectivec
@property BOOL allowsRunningApplicationSubstitution;
```

<a id="Discussion"></a>

## Discussion

If an instance of an application is already running and is capable of opening the provided URLs, but the running instance is at a different URL, use the running application.

This property defaults to [true](https://developer.apple.com/documentation/swift/true). Set this to [false](https://developer.apple.com/documentation/swift/false) if you let the user select between specific versions of an application, or let them choose a particular installation.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.
