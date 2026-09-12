> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsobjectmakefunction(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/javascriptcore/jsobjectmakefunction(_:_:_:_:_:_:_:_:))

# JSObjectMakeFunction(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a function with a specified script as its body.

## Declaration

```swift
func JSObjectMakeFunction(_ ctx: JSContextRef!, _ name: JSStringRef!, _ parameterCount: UInt32, _ parameterNames: UnsafePointer<JSStringRef?>!, _ body: JSStringRef!, _ sourceURL: JSStringRef!, _ startingLineNumber: Int32, _ exception: UnsafeMutablePointer<JSValueRef?>!) -> JSObjectRef!
```

## Parameters

- `ctx`: The execution context to use.
- `name`: A [JSStringRef](jsstringref.md) that contains the function’s name. The system uses this when converting the function to a string. Pass `NULL` to create an anonymous function.
- `parameterCount`: An integer count of the number of parameter names in `parameterNames`.
- `parameterNames`: A [JSStringRef](jsstringref.md) array that contains the names of the function’s parameters. Pass `NULL` if `parameterCount` is `0`.
- `body`: A [JSStringRef](jsstringref.md) that contains the script to use as the function’s body.
- `sourceURL`: A [JSStringRef](jsstringref.md) that contains a URL for the script’s source file. The system only uses this when reporting exceptions. Pass `NULL` if you don’t want to include source file information in exceptions.
- `startingLineNumber`: An integer value that specifies the script’s starting line number in the file at `sourceURL`. The system only uses this when reporting exceptions.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is a function, or `NULL` if either `body` or `parameterNames` contains a syntax error. The object’s prototype is the default function prototype.

<a id="Discussion"></a>

## Discussion

Use this method when you want to execute a script repeatedly to avoid the cost of reparsing the script before each execution.

## See Also

### Working with Objects

- [JSObjectCallAsConstructor(\_:\_:\_:\_:\_:)](jsobjectcallasconstructor%28__________%29.md): Calls an object as a constructor.
- [JSObjectCallAsFunction(\_:\_:\_:\_:\_:\_:)](jsobjectcallasfunction%28____________%29.md): Calls an object as a function.
- [JSObjectCopyPropertyNames(\_:\_:)](jsobjectcopypropertynames%28____%29.md): Gets the names of an object’s enumerable properties.
- [JSObjectDeleteProperty(\_:\_:\_:\_:)](jsobjectdeleteproperty%28________%29.md): Deletes a property from an object.
- [JSObjectGetPrivate(\_:)](jsobjectgetprivate%28__%29.md): Gets an object’s private data.
- [JSObjectGetProperty(\_:\_:\_:\_:)](jsobjectgetproperty%28________%29.md): Gets a property from an object.
- [JSObjectGetPropertyAtIndex(\_:\_:\_:\_:)](jsobjectgetpropertyatindex%28________%29.md): Gets a property from an object by numeric index.
- [JSObjectGetPrototype(\_:\_:)](jsobjectgetprototype%28____%29.md): Gets an object’s prototype.
- [JSObjectHasProperty(\_:\_:\_:)](jsobjecthasproperty%28______%29.md): Tests whether an object has a specified property.
- [JSObjectIsConstructor(\_:\_:)](jsobjectisconstructor%28____%29.md): Tests whether you can call an object as a constructor.
- [JSObjectIsFunction(\_:\_:)](jsobjectisfunction%28____%29.md): Tests whether you can call an object as a function.
- [JSObjectMake(\_:\_:\_:)](jsobjectmake%28______%29.md): Creates a JavaScript object.
- [JSObjectMakeArray(\_:\_:\_:\_:)](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor(\_:\_:\_:)](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate(\_:\_:\_:\_:)](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.

# JSObjectMakeFunction (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a function with a specified script as its body.

## Declaration

```objectivec
JSObjectRefJSObjectMakeFunction(JSContextRef ctx, JSStringRef name, unsigned int parameterCount, JSStringRef const parameterNames[], JSStringRef body, JSStringRef sourceURL, int startingLineNumber, JSValueRef*exception);
```

## Parameters

- `ctx`: The execution context to use.
- `name`: A [JSStringRef](jsstringref.md) that contains the function’s name. The system uses this when converting the function to a string. Pass `NULL` to create an anonymous function.
- `parameterCount`: An integer count of the number of parameter names in `parameterNames`.
- `parameterNames`: A [JSStringRef](jsstringref.md) array that contains the names of the function’s parameters. Pass `NULL` if `parameterCount` is `0`.
- `body`: A [JSStringRef](jsstringref.md) that contains the script to use as the function’s body.
- `sourceURL`: A [JSStringRef](jsstringref.md) that contains a URL for the script’s source file. The system only uses this when reporting exceptions. Pass `NULL` if you don’t want to include source file information in exceptions.
- `startingLineNumber`: An integer value that specifies the script’s starting line number in the file at `sourceURL`. The system only uses this when reporting exceptions.
- `exception`: A pointer to a [JSValueRef](jsvalueref.md) to store an exception in, if any. Pass `NULL` to discard any exception.

<a id="return-value"></a>

## Return Value

A [JSObjectRef](jsobjectref.md) that is a function, or `NULL` if either `body` or `parameterNames` contains a syntax error. The object’s prototype is the default function prototype.

<a id="Discussion"></a>

## Discussion

Use this method when you want to execute a script repeatedly to avoid the cost of reparsing the script before each execution.

## See Also

### Working with Objects

- [JSObjectCallAsConstructor](jsobjectcallasconstructor%28__________%29.md): Calls an object as a constructor.
- [JSObjectCallAsFunction](jsobjectcallasfunction%28____________%29.md): Calls an object as a function.
- [JSObjectCopyPropertyNames](jsobjectcopypropertynames%28____%29.md): Gets the names of an object’s enumerable properties.
- [JSObjectDeleteProperty](jsobjectdeleteproperty%28________%29.md): Deletes a property from an object.
- [JSObjectGetPrivate](jsobjectgetprivate%28__%29.md): Gets an object’s private data.
- [JSObjectGetProperty](jsobjectgetproperty%28________%29.md): Gets a property from an object.
- [JSObjectGetPropertyAtIndex](jsobjectgetpropertyatindex%28________%29.md): Gets a property from an object by numeric index.
- [JSObjectGetPrototype](jsobjectgetprototype%28____%29.md): Gets an object’s prototype.
- [JSObjectHasProperty](jsobjecthasproperty%28______%29.md): Tests whether an object has a specified property.
- [JSObjectIsConstructor](jsobjectisconstructor%28____%29.md): Tests whether you can call an object as a constructor.
- [JSObjectIsFunction](jsobjectisfunction%28____%29.md): Tests whether you can call an object as a function.
- [JSObjectMake](jsobjectmake%28______%29.md): Creates a JavaScript object.
- [JSObjectMakeArray](jsobjectmakearray%28________%29.md): Creates a JavaScript array object.
- [JSObjectMakeConstructor](jsobjectmakeconstructor%28______%29.md): Creates a JavaScript constructor.
- [JSObjectMakeDate](jsobjectmakedate%28________%29.md): Creates a JavaScript date object as though invoking the built-in date constructor.
