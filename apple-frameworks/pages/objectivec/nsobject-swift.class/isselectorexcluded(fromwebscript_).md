> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/isselectorexcluded(fromwebscript:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/isselectorexcluded(fromwebscript:))

# isSelectorExcluded(fromWebScript:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns whether a selector should be hidden from the scripting environment.

## Declaration

```swift
class func isSelectorExcluded(fromWebScript selector: Selector!) -> Bool
```

## Parameters

- `selector`: The selector.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the selector specified by `aSelector` should be hidden from the scripting environment; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Only methods with valid parameters and return types are exported to the WebKit JavaScript environment. The valid types are Objective-C objects and scalars. The default value is [YES](../yes.md).

## See Also

### Getting attributes

- [webScriptName(forKey:)](webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [webScriptName(for:)](webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isKeyExcluded(fromWebScript:)](iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.

# isSelectorExcludedFromWebScript: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns whether a selector should be hidden from the scripting environment.

## Declaration

```objectivec
+ (BOOL) isSelectorExcludedFromWebScript:(SEL) selector;
```

## Parameters

- `selector`: The selector.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the selector specified by `aSelector` should be hidden from the scripting environment; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Only methods with valid parameters and return types are exported to the WebKit JavaScript environment. The valid types are Objective-C objects and scalars. The default value is [YES](../yes.md).

## See Also

### Getting attributes

- [webScriptNameForKey:](webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [webScriptNameForSelector:](webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isKeyExcludedFromWebScript:](iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.
