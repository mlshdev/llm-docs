> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsclassdescription/invalidateclassdescriptioncache()](https://developer.apple.com/documentation/foundation/nsclassdescription/invalidateclassdescriptioncache())

# invalidateClassDescriptionCache() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes all `NSClassDescription` objects from the cache.

## Declaration

```swift
class func invalidateClassDescriptionCache()
```

<a id="Discussion"></a>

## Discussion

You should rarely need to invoke this method. Use it whenever a registered `NSClassDescription` object might be replaced by a different version, such as when you have loaded a new provider of `NSClassDescription` objects, or when you are about to remove a provider of `NSClassDescription` objects.

## See Also

### Working with class descriptions

- [init(for:)](init%28for_%29.md): Returns the class description for a given class.
- [register(\_:for:)](register%28__for_%29.md): Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.

# invalidateClassDescriptionCache (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes all `NSClassDescription` objects from the cache.

## Declaration

```objectivec
+ (void) invalidateClassDescriptionCache;
```

<a id="Discussion"></a>

## Discussion

You should rarely need to invoke this method. Use it whenever a registered `NSClassDescription` object might be replaced by a different version, such as when you have loaded a new provider of `NSClassDescription` objects, or when you are about to remove a provider of `NSClassDescription` objects.

## See Also

### Working with class descriptions

- [classDescriptionForClass:](init%28for_%29.md): Returns the class description for a given class.
- [registerClassDescription:forClass:](register%28__for_%29.md): Registers an `NSClassDescription` object for a given class in the `NSClassDescription` cache.
