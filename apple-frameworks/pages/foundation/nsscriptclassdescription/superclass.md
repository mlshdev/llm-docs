> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/superclass](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/superclass)

# superclass (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description instance for the superclass of the receiver’s class.

## Declaration

```swift
var superclass: NSScriptClassDescription? { get }
```

<a id="return-value"></a>

## Return Value

A class description instance that describes the superclass of the receiver’s class. Returns `nil` if the class has no superclass.

<a id="Discussion"></a>

## Discussion

The instance of `NSScriptClassDescription` that describes the superclass can be in the same suite as the receiver or in a different suite.

## See Also

### Getting a Script Class Description

- [init(for:)](init%28for_%29.md): Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.
- [forKey(\_:)](forkey%28__%29.md): Returns the class description instance for the class type of the specified attribute or relationship.

# superclassDescription (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the class description instance for the superclass of the receiver’s class.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSScriptClassDescription * superclassDescription;
```

<a id="return-value"></a>

## Return Value

A class description instance that describes the superclass of the receiver’s class. Returns `nil` if the class has no superclass.

<a id="Discussion"></a>

## Discussion

The instance of `NSScriptClassDescription` that describes the superclass can be in the same suite as the receiver or in a different suite.

## See Also

### Getting a Script Class Description

- [classDescriptionForClass:](init%28for_%29.md): Returns the class description for the specified class or, if it is not scriptable, for the first superclass that is.
- [classDescriptionForKey:](forkey%28__%29.md): Returns the class description instance for the class type of the specified attribute or relationship.
