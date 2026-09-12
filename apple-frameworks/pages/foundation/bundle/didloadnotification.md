> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/didloadnotification](https://developer.apple.com/documentation/foundation/bundle/didloadnotification)

# didLoadNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that lets observers know when classes are dynamically loaded.

## Declaration

```swift
class let didLoadNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

When a request is made to a bundle for a class ([classNamed(\_:)](classnamed%28__%29.md) or [principalClass](principalclass.md)), the bundle dynamically loads the executable code file that contains the class implementation and all other class definitions contained in the file. After the module is loaded, the bundle posts the [didLoadNotification](didloadnotification.md).

The notification object is the [Bundle](../bundle.md) instance that dynamically loads classes. The `userInfo` dictionary contains an [NSLoadedClasses](../nsloadedclasses.md) key.

In a typical use of this notification, an object might want to enumerate the `userInfo` array to check if each loaded class conformed to a certain protocol (say, an protocol for a plug-and-play tool set); if a class does conform, the object would create an instance of that class and add the instance to another [NSArray](../nsarray.md) object.

## See Also

### Getting classes from a bundle

- [classNamed(\_:)](classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [principalClass](principalclass.md): The bundle’s principal class.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [didLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
- [Bundle.DidLoadMessage](didloadmessage.md): A message a bundle sends when it dynamically loads a class.

# NSBundleDidLoadNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification that lets observers know when classes are dynamically loaded.

## Declaration

```objectivec
extern NSNotificationName const NSBundleDidLoadNotification;
```

<a id="Discussion"></a>

## Discussion

When a request is made to a bundle for a class ([classNamed:](classnamed%28__%29.md) or [principalClass](principalclass.md)), the bundle dynamically loads the executable code file that contains the class implementation and all other class definitions contained in the file. After the module is loaded, the bundle posts the [NSBundleDidLoadNotification](didloadnotification.md).

The notification object is the [NSBundle](../bundle.md) instance that dynamically loads classes. The `userInfo` dictionary contains an [NSLoadedClasses](../nsloadedclasses.md) key.

In a typical use of this notification, an object might want to enumerate the `userInfo` array to check if each loaded class conformed to a certain protocol (say, an protocol for a plug-and-play tool set); if a class does conform, the object would create an instance of that class and add the instance to another [NSArray](../nsarray.md) object.

## See Also

### Getting classes from a bundle

- [classNamed:](classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [principalClass](principalclass.md): The bundle’s principal class.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [NSBundleDidLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
