> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/activates](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/activates)

# activates (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether the system activates the app and brings it to the foreground.

## Declaration

```swift
var activates: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the system to bring the app to the foreground.

## See Also

### Specifying app-related behaviors

- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

# activates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether the system activates the app and brings it to the foreground.

## Declaration

```objectivec
@property BOOL activates;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true), which causes the system to bring the app to the foreground.

## See Also

### Specifying app-related behaviors

- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hides](hides.md): A Boolean value indicating whether you want the app to hide itself after it launches.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.
