> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/scriptingvalue(for:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/scriptingvalue(for:))

# scriptingValue(for:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Given an object specifier, returns the specified object or objects in the receiving container.

## Declaration

```swift
func scriptingValue(for objectSpecifier: NSScriptObjectSpecifier) -> Any?
```

## Parameters

- `objectSpecifier`: An object specifier to be evaluated.

<a id="return-value"></a>

## Return Value

The specified object or objects in the receiving container.

<a id="discussion"></a>

## Discussion

This method might successfully return an object, an array of objects, or `nil`, depending on the kind of object specifier. Because `nil` is a valid return value, failure is signaled by invoking the object specifier’s `setEvaluationError:` method before returning.

<a id="Discussion"></a>

## Discussion

You can override this method to customize the evaluation of object specifiers without requiring that the scripting container make up indexes for contained objects that don’t naturally have indexes (as can be the case if you implement [indicesOfObjects(byEvaluatingObjectSpecifier:)](indicesofobjects%28byevaluatingobjectspecifier_%29.md) instead).

Your override of this method doesn’t need to also invoke any of the `NSScriptCommand` error signaling methods, though it can, to record very specific information. The `NSUnknownKeySpecifierError` and `NSInvalidIndexSpecifierError` numbers are special, in that Cocoa may continue evaluating an outer specifier if they’re encountered, for the convenience of scripters.

## See Also

### Scripting

- [classCode](classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [className](classname.md): A string containing the name of the class.
- [copyScriptingValue(\_:forKey:withProperties:)](copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObject(of:forValueForKey:withContentsValue:properties:)](newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingProperties](scriptingproperties.md): An `NSString`-keyed dictionary of the receiver’s scriptable properties.

# scriptingValueForSpecifier: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Given an object specifier, returns the specified object or objects in the receiving container.

## Declaration

```objectivec
- (id) scriptingValueForSpecifier:(NSScriptObjectSpecifier *) objectSpecifier;
```

## Parameters

- `objectSpecifier`: An object specifier to be evaluated.

<a id="return-value"></a>

## Return Value

The specified object or objects in the receiving container.

<a id="discussion"></a>

## Discussion

This method might successfully return an object, an array of objects, or `nil`, depending on the kind of object specifier. Because `nil` is a valid return value, failure is signaled by invoking the object specifier’s `setEvaluationError:` method before returning.

<a id="Discussion"></a>

## Discussion

You can override this method to customize the evaluation of object specifiers without requiring that the scripting container make up indexes for contained objects that don’t naturally have indexes (as can be the case if you implement [indicesOfObjectsByEvaluatingObjectSpecifier:](indicesofobjects%28byevaluatingobjectspecifier_%29.md) instead).

Your override of this method doesn’t need to also invoke any of the `NSScriptCommand` error signaling methods, though it can, to record very specific information. The `NSUnknownKeySpecifierError` and `NSInvalidIndexSpecifierError` numbers are special, in that Cocoa may continue evaluating an outer specifier if they’re encountered, for the convenience of scripters.

## See Also

### Scripting

- [classCode](classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [className](classname.md): A string containing the name of the class.
- [copyScriptingValue:forKey:withProperties:](copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObjectOfClass:forValueForKey:withContentsValue:properties:](newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingProperties](scriptingproperties.md): An `NSString`-keyed dictionary of the receiver’s scriptable properties.
