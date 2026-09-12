> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/classname](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/classname)

# className (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A string containing the name of the class.

## Declaration

```swift
var className: String { get }
```

## See Also

### Scripting

- [classCode](classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [copyScriptingValue(\_:forKey:withProperties:)](copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObject(of:forValueForKey:withContentsValue:properties:)](newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingProperties](scriptingproperties.md): An `NSString`-keyed dictionary of the receiver’s scriptable properties.
- [scriptingValue(for:)](scriptingvalue%28for_%29.md): Given an object specifier, returns the specified object or objects in the receiving container.

# className (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A string containing the name of the class.

## Declaration

```objectivec
@property (copy, readonly) NSString * className;
```

## See Also

### Scripting

- [classCode](classcode.md): The receiver’s Apple event type code, as stored in the `NSScriptClassDescription` object for the object’s class.
- [copyScriptingValue:forKey:withProperties:](copyscriptingvalue%28__forkey_withproperties_%29.md): Creates and returns one or more scripting objects to be inserted into the specified relationship by copying the passed-in value and setting the properties in the copied object or objects.
- [newScriptingObjectOfClass:forValueForKey:withContentsValue:properties:](newscriptingobject%28of_forvalueforkey_withcontentsvalue_properties_%29.md): Creates and returns an instance of a scriptable class, setting its contents and properties, for insertion into the relationship identified by the key.
- [scriptingProperties](scriptingproperties.md): An `NSString`-keyed dictionary of the receiver’s scriptable properties.
- [scriptingValueForSpecifier:](scriptingvalue%28for_%29.md): Given an object specifier, returns the specified object or objects in the receiving container.
