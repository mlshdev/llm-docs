> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/classnamed(_:)](https://developer.apple.com/documentation/foundation/bundle/classnamed(_:))

# classNamed(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `Class` object for the specified name.

## Declaration

```swift
func classNamed(_ className: String) -> AnyClass?
```

## Parameters

- `className`: The name of a class.

<a id="return-value"></a>

## Return Value

The `Class` object for `className`. Returns `nil` if `className` is not one of the classes associated with the receiver or if there is an error loading the executable code containing the class implementation.

<a id="Discussion"></a>

## Discussion

If the bundle’s executable code is not yet loaded, this method dynamically loads it into memory. Classes (and categories) are loaded from just one file within the bundle directory; this code file has the same name as the directory, but without the extension (”`.bundle`”, “`.app`”, “`.framework`”). As a side effect of code loading, the receiver posts [didLoadNotification](didloadnotification.md) after all classes and categories have been loaded; see `Notifications` for details.

## See Also

### Related Documentation

- [load()](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.

### Getting classes from a bundle

- [principalClass](principalclass.md): The bundle’s principal class.
- [didLoadNotification](didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [didLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
- [Bundle.DidLoadMessage](didloadmessage.md): A message a bundle sends when it dynamically loads a class.

# classNamed: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the `Class` object for the specified name.

## Declaration

```objectivec
- (Class) classNamed:(NSString *) className;
```

## Parameters

- `className`: The name of a class.

<a id="return-value"></a>

## Return Value

The `Class` object for `className`. Returns `nil` if `className` is not one of the classes associated with the receiver or if there is an error loading the executable code containing the class implementation.

<a id="Discussion"></a>

## Discussion

If the bundle’s executable code is not yet loaded, this method dynamically loads it into memory. Classes (and categories) are loaded from just one file within the bundle directory; this code file has the same name as the directory, but without the extension (”`.bundle`”, “`.app`”, “`.framework`”). As a side effect of code loading, the receiver posts [NSBundleDidLoadNotification](didloadnotification.md) after all classes and categories have been loaded; see `Notifications` for details.

## See Also

### Related Documentation

- [load](load%28%29.md): Dynamically loads the bundle’s executable code into a running program, if the code has not already been loaded.

### Getting classes from a bundle

- [principalClass](principalclass.md): The bundle’s principal class.
- [NSBundleDidLoadNotification](didloadnotification.md): A notification that lets observers know when classes are dynamically loaded.
- [NSLoadedClasses](../nsloadedclasses.md): A constant used as a key for the `userInfo` dictionary of a [NSBundleDidLoadNotification](didloadnotification.md) notification that corresponds to an array of names of each class that was loaded.
