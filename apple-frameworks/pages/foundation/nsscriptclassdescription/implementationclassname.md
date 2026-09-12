> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/implementationclassname](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/implementationclassname)

# implementationClassName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the Objective-C class instantiated to implement the scripting class.

## Declaration

```swift
var implementationClassName: String? { get }
```

<a id="return-value"></a>

## Return Value

An Objective-C class name.

<a id="Discussion"></a>

## Discussion

The name returned by the [className](classname.md) method for an instance of `NSScriptClassDescription` resulting from an sdef class declaration is the human-readable name for the class—that is, the name that is used in a script. To obtain the name of the Objective-C class instantiated to implement the class, use `implementationClassName`.

## See Also

### Getting basic information about the script class

- [className](classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [defaultSubcontainerAttributeKey](defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [isLocationRequiredToCreate(forKey:)](islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.

# implementationClassName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the Objective-C class instantiated to implement the scripting class.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * implementationClassName;
```

<a id="return-value"></a>

## Return Value

An Objective-C class name.

<a id="Discussion"></a>

## Discussion

The name returned by the [className](classname.md) method for an instance of `NSScriptClassDescription` resulting from an sdef class declaration is the human-readable name for the class—that is, the name that is used in a script. To obtain the name of the Objective-C class instantiated to implement the class, use `implementationClassName`.

## See Also

### Getting basic information about the script class

- [className](classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [defaultSubcontainerAttributeKey](defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [isLocationRequiredToCreateForKey:](islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.
