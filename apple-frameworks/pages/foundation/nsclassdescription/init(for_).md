> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription/init(for:)](https://developer.apple.com/documentation/foundation/nsclassdescription/init(for:))

# init(for:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description for a given class.

## Declaration

```swift
init?(for aClass: AnyClass)
```

## Parameters

- `aClass`: The class for which to return a class description. See note below for important details.

<a id="return-value"></a>

## Return Value

The class description for `aClass`, or `nil` if a class description cannot be found.

<a id="Discussion"></a>

## Discussion

If a class description for `aClass` is not found, the method posts an NSClassDescriptionNeededForClassNotification on behalf of `aClass`, allowing an observer to register a class description. The method then checks for a class description again. Returns `nil` if a class description is still not found.

If you have an instance of the receiver’s class, you can use the `NSObject` instance method [classDescription](../../objectivec/nsobject-swift.class/classdescription.md) instead.

> **Note**

>  In macOS 10.6 and later, this method (and as a result [classDescription](../../objectivec/nsobject-swift.class/classdescription.md) methods of any object) will return `nil` when the sdef contains no `<class>` element for the Cocoa class, but there is a `<class>` element defined for a superclass.
>
> This is incorrect, as object instances should never be required to be exactly a given class, any class should be allowed to be a subclass of the required class and receive the correct `<class>` value.
>
> This situation can have a serious impact on Cocoa Scripting, and there is no plan on changing this behavior.
>
> Instead of using this method, you should use the [init(for:)](../nsscriptclassdescription/init%28for_%29.md) method of [NSScriptClassDescription](../nsscriptclassdescription.md) instead.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

### Working with class descriptions

- [invalidateClassDescriptionCache()](invalidateclassdescriptioncache%28%29.md): Removes all `NSClassDescription` objects from the cache.
- [register(\_:for:)](register%28__for_%29.md): Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.

# classDescriptionForClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description for a given class.

## Declaration

```objectivec
+ (NSClassDescription *) classDescriptionForClass:(Class) aClass;
```

## Parameters

- `aClass`: The class for which to return a class description. See note below for important details.

<a id="return-value"></a>

## Return Value

The class description for `aClass`, or `nil` if a class description cannot be found.

<a id="Discussion"></a>

## Discussion

If a class description for `aClass` is not found, the method posts an NSClassDescriptionNeededForClassNotification on behalf of `aClass`, allowing an observer to register a class description. The method then checks for a class description again. Returns `nil` if a class description is still not found.

If you have an instance of the receiver’s class, you can use the `NSObject` instance method [classDescription](../../objectivec/nsobject-swift.class/classdescription.md) instead.

> **Note**

>  In macOS 10.6 and later, this method (and as a result [classDescription](../../objectivec/nsobject-swift.class/classdescription.md) methods of any object) will return `nil` when the sdef contains no `<class>` element for the Cocoa class, but there is a `<class>` element defined for a superclass.
>
> This is incorrect, as object instances should never be required to be exactly a given class, any class should be allowed to be a subclass of the required class and receive the correct `<class>` value.
>
> This situation can have a serious impact on Cocoa Scripting, and there is no plan on changing this behavior.
>
> Instead of using this method, you should use the [classDescriptionForClass:](../nsscriptclassdescription/init%28for_%29.md) method of [NSScriptClassDescription](../nsscriptclassdescription.md) instead.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
- [Key-Value Coding Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueCoding/index.html#//apple_ref/doc/uid/10000107i)

### Working with class descriptions

- [invalidateClassDescriptionCache](invalidateclassdescriptioncache%28%29.md): Removes all `NSClassDescription` objects from the cache.
- [registerClassDescription:forClass:](register%28__for_%29.md): Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.
