> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/scriptingproperties](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/scriptingproperties)

# scriptingProperties (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An `NSString`-keyed dictionary of the receiver’s scriptable properties.

## Declaration

```swift
var scriptingProperties: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

An `NSString`-keyed dictionary of the receiver’s scriptable properties, including all of those that are declared as Attributes and ToOneRelationships in the `.scriptSuite` property list entries for the class and its scripting superclasses, with the exception of ones keyed by “scriptingProperties.” Each key in the dictionary must be identical to the key for an Attribute or ToOneRelationship. The values of the dictionary must be Objective-C objects that are convertible to `NSAppleEventDescriptor` objects.

## See Also

### Scripting

- [classCode](classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [className](classname.md): A string containing the name of the class.
- [copyScriptingValue(\_:forKey:withProperties:)](copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObject(of:forValueForKey:withContentsValue:properties:)](newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingValue(for:)](scriptingvalue%28for_%29.md): Given an object specifier, returns the specified object or objects in the receiving container.

# scriptingProperties (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

An `NSString`-keyed dictionary of the receiver’s scriptable properties.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * scriptingProperties;
```

<a id="Discussion"></a>

## Discussion

An `NSString`-keyed dictionary of the receiver’s scriptable properties, including all of those that are declared as Attributes and ToOneRelationships in the `.scriptSuite` property list entries for the class and its scripting superclasses, with the exception of ones keyed by “scriptingProperties.” Each key in the dictionary must be identical to the key for an Attribute or ToOneRelationship. The values of the dictionary must be Objective-C objects that are convertible to `NSAppleEventDescriptor` objects.

## See Also

### Scripting

- [classCode](classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [className](classname.md): A string containing the name of the class.
- [copyScriptingValue:forKey:withProperties:](copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObjectOfClass:forValueForKey:withContentsValue:properties:](newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingValueForSpecifier:](scriptingvalue%28for_%29.md): Given an object specifier, returns the specified object or objects in the receiving container.
