> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/jsobject()](https://developer.apple.com/documentation/webkit/webscriptobject/jsobject())

# jsObject() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the JavaScript object corresponding to the receiver.

## Declaration

```swift
func jsObject() -> JSObjectRef!
```

<a id="return-value"></a>

## Return Value

The JavaScript object corresponding to the receiver in the JavaScriptCore C API.

## See Also

### Getting and setting properties

- [removeWebScriptKey(\_:)](removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [webScriptValue(at:)](webscriptvalue%28at_%29.md): Deprecated. Returns the value of a property at the specified index.
- [setWebScriptValueAt(\_:value:)](setwebscriptvalueat%28__value_%29.md): Deprecated. Sets the value of a property at the specified index.

# JSObject (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+ (deprecated in 10.14)

Returns the JavaScript object corresponding to the receiver.

## Declaration

```objectivec
- (JSObjectRef) JSObject;
```

<a id="return-value"></a>

## Return Value

The JavaScript object corresponding to the receiver in the JavaScriptCore C API.

## See Also

### Getting and setting properties

- [removeWebScriptKey:](removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [webScriptValueAtIndex:](webscriptvalue%28at_%29.md): Deprecated. Returns the value of a property at the specified index.
- [setWebScriptValueAtIndex:value:](setwebscriptvalueat%28__value_%29.md): Deprecated. Sets the value of a property at the specified index.
