> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsloadedclasses](https://developer.apple.com/documentation/foundation/nsloadedclasses)

# NSLoadedClasses (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant used as a key for the `userInfo` dictionary of a [didLoadNotification](bundle/didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.

## Declaration

```swift
let NSLoadedClasses: String
```

## See Also

### Getting classes from a bundle

- [classNamed(\_:)](bundle/classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [principalClass](bundle/principalclass.md): The bundle’s principal class.
- [didLoadNotification](bundle/didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
- [Bundle.DidLoadMessage](bundle/didloadmessage.md): A message a bundle sends when it dynamically loads a class.

# NSLoadedClasses (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant used as a key for the `userInfo` dictionary of a [NSBundleDidLoadNotification](bundle/didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.

## Declaration

```objectivec
extern NSString * const NSLoadedClasses;
```

## See Also

### Getting classes from a bundle

- [classNamed:](bundle/classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [principalClass](bundle/principalclass.md): The bundle’s principal class.
- [NSBundleDidLoadNotification](bundle/didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
