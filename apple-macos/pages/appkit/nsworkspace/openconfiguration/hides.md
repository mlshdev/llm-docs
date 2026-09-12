> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/openconfiguration/hides](https://developer.apple.com/documentation/appkit/nsworkspace/openconfiguration/hides)

# hides (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you want the app to hide itself after it launches.

## Declaration

```swift
var hides: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which leaves the app in its default state after launch. Setting the property to [true](https://developer.apple.com/documentation/swift/true) causes the app to hide itself.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.

# hides (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value indicating whether you want the app to hide itself after it launches.

## Declaration

```objectivec
@property BOOL hides;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false), which leaves the app in its default state after launch. Setting the property to [true](https://developer.apple.com/documentation/swift/true) causes the app to hide itself.

## See Also

### Specifying app-related behaviors

- [activates](activates.md): A Boolean value indicating whether the system activates the app and brings it to the foreground.
- [addsToRecentItems](addstorecentitems.md): A Boolean value indicating whether to add the app or documents to the Recent Items menu.
- [allowsRunningApplicationSubstitution](allowsrunningapplicationsubstitution.md): A Boolean value that indicates whether to use a running instance of an application even if it’s at a different URL.
- [createsNewApplicationInstance](createsnewapplicationinstance.md): A Boolean value indicating whether you want the system to launch a new instance of the app.
- [hidesOthers](hidesothers.md): A Boolean value indicating whether you want to hide all apps except the one that launched.
