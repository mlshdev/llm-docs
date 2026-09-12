> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webscriptobject/webscriptvalue(at:)](https://developer.apple.com/documentation/webkit/webscriptobject/webscriptvalue(at:))

# webScriptValue(at:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the value of a property at the specified index.

## Declaration

```swift
func webScriptValue(at index: UInt32) -> Any!
```

## Parameters

- `index`: The index of the property.

<a id="return-value"></a>

## Return Value

The value of a property at `index`. Returns [WebUndefined](../webundefined.md) if an exception is thrown in the JavaScript environment.

<a id="Discussion"></a>

## Discussion

Accessing property values by index is dependent on the scripting environment.

## See Also

### Getting and setting properties

- [jsObject()](jsobject%28%29.md): Deprecated. Returns the JavaScript object corresponding to the receiver.
- [removeWebScriptKey(\_:)](removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [setWebScriptValueAt(\_:value:)](setwebscriptvalueat%28__value_%29.md): Deprecated. Sets the value of a property at the specified index.

# webScriptValueAtIndex: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.14)

Returns the value of a property at the specified index.

## Declaration

```objectivec
- (id) webScriptValueAtIndex:(unsigned int) index;
```

## Parameters

- `index`: The index of the property.

<a id="return-value"></a>

## Return Value

The value of a property at `index`. Returns [WebUndefined](../webundefined.md) if an exception is thrown in the JavaScript environment.

<a id="Discussion"></a>

## Discussion

Accessing property values by index is dependent on the scripting environment.

## See Also

### Getting and setting properties

- [JSObject](jsobject%28%29.md): Deprecated. Returns the JavaScript object corresponding to the receiver.
- [removeWebScriptKey:](removewebscriptkey%28__%29.md): Deprecated. Removes a property from a scripting environment.
- [setWebScriptValueAtIndex:value:](setwebscriptvalueat%28__value_%29.md): Deprecated. Sets the value of a property at the specified index.
