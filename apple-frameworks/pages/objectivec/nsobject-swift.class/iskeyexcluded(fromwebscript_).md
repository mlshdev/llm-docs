> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/iskeyexcluded(fromwebscript:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/iskeyexcluded(fromwebscript:))

# isKeyExcluded(fromWebScript:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns whether a key should be hidden from the scripting environment.

## Declaration

```swift
class func isKeyExcluded(fromWebScript name: UnsafePointer<CChar>!) -> Bool
```

## Parameters

- `name`: The name of the attribute.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the attribute specified by `name` should be hidden from the scripting environment; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The default value is [YES](../yes.md).

## See Also

### Getting attributes

- [webScriptName(forKey:)](webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [webScriptName(for:)](webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isSelectorExcluded(fromWebScript:)](isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.

# isKeyExcludedFromWebScript: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns whether a key should be hidden from the scripting environment.

## Declaration

```objectivec
+ (BOOL) isKeyExcludedFromWebScript:(const char *) name;
```

## Parameters

- `name`: The name of the attribute.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the attribute specified by `name` should be hidden from the scripting environment; otherwise, [NO](../no.md).

<a id="Discussion"></a>

## Discussion

The default value is [YES](../yes.md).

## See Also

### Getting attributes

- [webScriptNameForKey:](webscriptname%28forkey_%29.md): Returns the scripting environment name for an attribute specified by a key.
- [webScriptNameForSelector:](webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isSelectorExcludedFromWebScript:](isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
