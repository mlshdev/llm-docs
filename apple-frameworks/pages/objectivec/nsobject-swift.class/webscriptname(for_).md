> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webscriptname(for:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webscriptname(for:))

# webScriptName(for:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns the scripting environment name for a selector.

## Declaration

```swift
class func webScriptName(for selector: Selector!) -> String!
```

## Parameters

- `selector`: The selector.

<a id="return-value"></a>

## Return Value

The name used to represent the selector in the scripting environment.

<a id="Discussion"></a>

## Discussion

It is your responsibility to ensure that the returned name is unique to the script invoking this method. If this method returns `nil` or you do not implement it, the default name for the selector is constructed as follows:

- A colon (”:”) in the Objective-C selector is replaced by an underscore (”\_”).
- An underscore in the Objective-C selector is prefixed with a dollar sign (”$”).
- A dollar sign in the Objective-C selector is prefixed with another dollar sign.

The following table shows examples of how the default name is constructed:

| Objective-C selector | Default script name for selector |
| --- | --- |
| `setFlag:` | `setFlag_` |
| `setFlag:forKey:withAttributes:` | `setFlag_forKey_withAttributes_` |
| `propertiesForExample_Object:` | `propertiesForExample$_Object_` |
| `set_$_forKey:withDictionary:` | `set$_$$_$_forKey_withDictionary_` |

Since the default construction for a method name can be confusing depending on its Objective-C name, you should implement this method and return a more human-readable name.

## See Also

### Getting attributes

- [webScriptName(forKey:)](webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [isSelectorExcluded(fromWebScript:)](isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
- [isKeyExcluded(fromWebScript:)](iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.

# webScriptNameForSelector: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns the scripting environment name for a selector.

## Declaration

```objectivec
+ (NSString *) webScriptNameForSelector:(SEL) selector;
```

## Parameters

- `selector`: The selector.

<a id="return-value"></a>

## Return Value

The name used to represent the selector in the scripting environment.

<a id="Discussion"></a>

## Discussion

It is your responsibility to ensure that the returned name is unique to the script invoking this method. If this method returns `nil` or you do not implement it, the default name for the selector is constructed as follows:

- A colon (”:”) in the Objective-C selector is replaced by an underscore (”\_”).
- An underscore in the Objective-C selector is prefixed with a dollar sign (”$”).
- A dollar sign in the Objective-C selector is prefixed with another dollar sign.

The following table shows examples of how the default name is constructed:

| Objective-C selector | Default script name for selector |
| --- | --- |
| `setFlag:` | `setFlag_` |
| `setFlag:forKey:withAttributes:` | `setFlag_forKey_withAttributes_` |
| `propertiesForExample_Object:` | `propertiesForExample$_Object_` |
| `set_$_forKey:withDictionary:` | `set$_$$_$_forKey_withDictionary_` |

Since the default construction for a method name can be confusing depending on its Objective-C name, you should implement this method and return a more human-readable name.

## See Also

### Getting attributes

- [webScriptNameForKey:](webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [isSelectorExcludedFromWebScript:](isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
- [isKeyExcludedFromWebScript:](iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.
