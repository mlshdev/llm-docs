> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/scriptingbridge/sbapplication/class(forscriptingclass:)](https://developer.apple.com/documentation/scriptingbridge/sbapplication/class(forscriptingclass:))

# class(forScriptingClass:) (Swift)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns a class object that represents a particular class in the target application.

## Declaration

```swift
func `class`(forScriptingClass className: String) -> AnyClass?
```

## Parameters

- `className`: The name of the scripting class, as it appears in the scripting interface. For example, “document”.

<a id="return-value"></a>

## Return Value

A `Class` object representing the scripting class.

<a id="discussion"></a>

## Discussion

You invoke this method on an instance of a scriptable application. Once you have the class object, you may allocate an instance of the class and appropriately the raw instance. Or you may use it in a call to [isKind(of:)](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/iskind%28of:%29) to determine the class type of an object.

# classForScriptingClass: (Objective-C)

**Framework:** Scripting Bridge  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Returns a class object that represents a particular class in the target application.

## Declaration

```objectivec
- (Class) classForScriptingClass:(NSString *) className;
```

## Parameters

- `className`: The name of the scripting class, as it appears in the scripting interface. For example, “document”.

<a id="return-value"></a>

## Return Value

A `Class` object representing the scripting class.

<a id="discussion"></a>

## Discussion

You invoke this method on an instance of a scriptable application. Once you have the class object, you may allocate an instance of the class and appropriately the raw instance. Or you may use it in a call to [isKindOfClass:](https://developer.apple.com/documentation/objectivec/nsobjectprotocol/iskind%28of:%29) to determine the class type of an object.
