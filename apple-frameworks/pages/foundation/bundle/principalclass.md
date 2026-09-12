> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/principalclass](https://developer.apple.com/documentation/foundation/bundle/principalclass)

# principalClass (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bundle’s principal class.

## Declaration

```swift
var principalClass: AnyClass? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set after ensuring that the code containing the definition of the class is dynamically loaded. If the bundle encounters errors in loading or if it can’t find the executable code file in the bundle directory, this property is `nil`.

The principal class typically controls all the other classes in the bundle; it should mediate between those classes and classes external to the bundle. Classes (and categories) are loaded from just one file within the bundle directory. The bundle obtains the name of the code file to load from the dictionary returned from [infoDictionary](infodictionary.md), using “`NSExecutable`” as the key. The bundle determines its principal class in one of two ways:

- It first looks in its own information dictionary, which extracts the information encoded in the bundle’s property list (`Info.plist`). The bundle obtains the principal class from the dictionary using the key `NSPrincipalClass`. For non-loadable bundles (applications and frameworks), if the principal class is not specified in the property list, this property is `nil`.
- If the principal class is not specified in the information dictionary, the bundle identifies the first class loaded as the principal class. When several classes are linked into a dynamically loadable file, the default principal class is the first one listed on the `ld` command line. In the following example, Reporter would be the principal class:

```objc
ld -o myBundle -r Reporter.o NotePad.o QueryList.o
```

The order of classes in Xcode’s project browser is the order in which they will be linked. To designate the principal class, control-drag the file containing its implementation to the top of the list.

As a side effect of code loading, the receiver posts [didLoadNotification](didloadnotification.md) after all classes and categories have been loaded; see `Notifications` for details.

The following method obtains a bundle by specifying its path ([bundleWithPath:](../nsbundle/bundlewithpath_.md)), then loads the bundle with [principalClass](principalclass.md) and uses the principal class object to allocate and initialize an instance of that class:

```objc
- (void)loadBundle:(id)sender
{
    Class exampleClass;
    id newInstance;
    NSString *path = @"/tmp/Projects/BundleExample/BundleExample.bundle";
    NSBundle *bundleToLoad = [NSBundle bundleWithPath:path];
    if (exampleClass = bundleToLoad.principalClass) {
        newInstance = [[exampleClass alloc] init];
        [newInstance doSomething];
    }
}
```

## See Also

### Related Documentation

- [load()](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.

### Getting classes from a bundle

- [classNamed(\_:)](classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [didLoadNotification](didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [didLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
- [Bundle.DidLoadMessage](didloadmessage.md): A message a bundle sends when it dynamically loads a class.

# principalClass (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bundle’s principal class.

## Declaration

```objectivec
@property (readonly, nullable) Class principalClass;
```

<a id="Discussion"></a>

## Discussion

This property is set after ensuring that the code containing the definition of the class is dynamically loaded. If the bundle encounters errors in loading or if it can’t find the executable code file in the bundle directory, this property is `nil`.

The principal class typically controls all the other classes in the bundle; it should mediate between those classes and classes external to the bundle. Classes (and categories) are loaded from just one file within the bundle directory. The bundle obtains the name of the code file to load from the dictionary returned from [infoDictionary](infodictionary.md), using “`NSExecutable`” as the key. The bundle determines its principal class in one of two ways:

- It first looks in its own information dictionary, which extracts the information encoded in the bundle’s property list (`Info.plist`). The bundle obtains the principal class from the dictionary using the key `NSPrincipalClass`. For non-loadable bundles (applications and frameworks), if the principal class is not specified in the property list, this property is `nil`.
- If the principal class is not specified in the information dictionary, the bundle identifies the first class loaded as the principal class. When several classes are linked into a dynamically loadable file, the default principal class is the first one listed on the `ld` command line. In the following example, Reporter would be the principal class:

```objc
ld -o myBundle -r Reporter.o NotePad.o QueryList.o
```

The order of classes in Xcode’s project browser is the order in which they will be linked. To designate the principal class, control-drag the file containing its implementation to the top of the list.

As a side effect of code loading, the receiver posts [NSBundleDidLoadNotification](didloadnotification.md) after all classes and categories have been loaded; see `Notifications` for details.

The following method obtains a bundle by specifying its path ([bundleWithPath:](../nsbundle/bundlewithpath_.md)), then loads the bundle with [principalClass](principalclass.md) and uses the principal class object to allocate and initialize an instance of that class:

```objc
- (void)loadBundle:(id)sender
{
    Class exampleClass;
    id newInstance;
    NSString *path = @"/tmp/Projects/BundleExample/BundleExample.bundle";
    NSBundle *bundleToLoad = [NSBundle bundleWithPath:path];
    if (exampleClass = bundleToLoad.principalClass) {
        newInstance = [[exampleClass alloc] init];
        [newInstance doSomething];
    }
}
```

## See Also

### Related Documentation

- [load](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.
- [infoDictionary](infodictionary.md): A dictionary, constructed from the bundle’s `Info.plist` file, that contains information about the receiver.

### Getting classes from a bundle

- [classNamed:](classnamed%28__%29.md): Returns the `Class` object for the specified name.
- [NSBundleDidLoadNotification](didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [NSBundleDidLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
