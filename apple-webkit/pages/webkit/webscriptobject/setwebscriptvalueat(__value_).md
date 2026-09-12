> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/setwebscriptvalueat(_:value:)](https://developer.apple.com/documentation/webkit/webscriptobject/setwebscriptvalueat(_:value:))

# setWebScriptValueAt(\_:value:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Sets the value of a property at the specified index.

## Declaration

```swift
func setWebScriptValueAt(_ index: UInt32, value: Any!)
```

## Parameters

- `index`: The index of the property.
- `value`: The value of the property.

## See Also

### Getting and setting properties

- [jsObject()](jsobject%28%29.md): Deprecated. Returns the JavaScript object corresponding to the receiver.
- [removeWebScriptKey(\_:)](removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [webScriptValue(at:)](webscriptvalue%28at_%29.md): Deprecated. Returns the value of a property at the specified index.

# setWebScriptValueAtIndex:value: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Sets the value of a property at the specified index.

## Declaration

```objectivec
- (void) setWebScriptValueAtIndex:(unsigned int) index value:(id) value;
```

## Parameters

- `index`: The index of the property.
- `value`: The value of the property.

## See Also

### Getting and setting properties

- [JSObject](jsobject%28%29.md): Deprecated. Returns the JavaScript object corresponding to the receiver.
- [removeWebScriptKey:](removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [webScriptValueAtIndex:](webscriptvalue%28at_%29.md): Deprecated. Returns the value of a property at the specified index.
