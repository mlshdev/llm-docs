> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/init(for:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/init(for:))

# init(for:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.

## Declaration

```swift
init?(for aClass: AnyClass)
```

## Parameters

- `aClass`: The class whose description is needed.

<a id="return-value"></a>

## Return Value

The class description for the class specified by `aClass` or, if that class isn’t scriptable, for the class description for the first superclass that is. Returns `nil` if it doesn’t find a scriptable class.

## See Also

### Getting a Script Class Description

- [forKey(\_:)](forkey%28__%29.md): Returns the class description instance for the class type of the specified attribute or relationship.
- [superclass](superclass.md): Returns the class description instance for the superclass of the receiver’s class.

# classDescriptionForClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.

## Declaration

```objectivec
+ (NSScriptClassDescription *) classDescriptionForClass:(Class) aClass;
```

## Parameters

- `aClass`: The class whose description is needed.

<a id="return-value"></a>

## Return Value

The class description for the class specified by `aClass` or, if that class isn’t scriptable, for the class description for the first superclass that is. Returns `nil` if it doesn’t find a scriptable class.

## See Also

### Getting a Script Class Description

- [classDescriptionForKey:](forkey%28__%29.md): Returns the class description instance for the class type of the specified attribute or relationship.
- [superclassDescription](superclass.md): Returns the class description instance for the superclass of the receiver’s class.
