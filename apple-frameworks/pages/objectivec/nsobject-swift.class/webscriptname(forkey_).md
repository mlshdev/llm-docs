> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/webscriptname(forkey:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/webscriptname(forkey:))

# webScriptName(forKey:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns the scripting environment name for an attribute specified by a key.

## Declaration

```swift
class func webScriptName(forKey name: UnsafePointer<CChar>!) -> String!
```

## Parameters

- `name`: The name of the attribute.

<a id="return-value"></a>

## Return Value

The name used to represent the attribute in the scripting environment.

## See Also

### Getting attributes

- [webScriptName(for:)](webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isSelectorExcluded(fromWebScript:)](isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
- [isKeyExcluded(fromWebScript:)](iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.

# webScriptNameForKey: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Returns the scripting environment name for an attribute specified by a key.

## Declaration

```objectivec
+ (NSString *) webScriptNameForKey:(const char *) name;
```

## Parameters

- `name`: The name of the attribute.

<a id="return-value"></a>

## Return Value

The name used to represent the attribute in the scripting environment.

## See Also

### Getting attributes

- [webScriptNameForSelector:](webscriptname%28for_%29.md): Returns the scripting environment name for a selector.
- [isSelectorExcludedFromWebScript:](isselectorexcluded%28fromwebscript_%29.md): Returns whether a selector should be hidden from the scripting environment.
- [isKeyExcludedFromWebScript:](iskeyexcluded%28fromwebscript_%29.md): Returns whether a key should be hidden from the scripting environment.
