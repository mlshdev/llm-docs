> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription/register(_:for:)](https://developer.apple.com/documentation/foundation/nsclassdescription/register(_:for:))

# register(\_:for:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.

## Declaration

```swift
class func register(_ description: NSClassDescription, for aClass: AnyClass)
```

## Parameters

- `description`: The class description to register.
- `aClass`: The class for which to register `description`.

<a id="Discussion"></a>

## Discussion

You should rarely need to directly invoke this method.

## See Also

### Working with class descriptions

- [init(for:)](init%28for_%29.md): Returns the class description for a given class.
- [invalidateClassDescriptionCache()](invalidateclassdescriptioncache%28%29.md): Removes all `NSClassDescription` objects from the cache.

# registerClassDescription:forClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.

## Declaration

```objectivec
+ (void) registerClassDescription:(NSClassDescription *) description forClass:(Class) aClass;
```

## Parameters

- `description`: The class description to register.
- `aClass`: The class for which to register `description`.

<a id="Discussion"></a>

## Discussion

You should rarely need to directly invoke this method.

## See Also

### Working with class descriptions

- [classDescriptionForClass:](init%28for_%29.md): Returns the class description for a given class.
- [invalidateClassDescriptionCache](invalidateclassdescriptioncache%28%29.md): Removes all `NSClassDescription` objects from the cache.
