> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/classname](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/classname)

# className (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the class the receiver describes, as provided at initialization time.

## Declaration

```swift
var className: String? { get }
```

<a id="return-value"></a>

## Return Value

A class name. This may be either the human-readable name for the class—that is, the name that is used in a script—or the name of the Objective-C class that is instantiated to implement the class. To reliably obtain the implementation name, use [implementationClassName](implementationclassname.md).

## See Also

### Getting basic information about the script class

- [defaultSubcontainerAttributeKey](defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [implementationClassName](implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [isLocationRequiredToCreate(forKey:)](islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.

# className (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the name of the class the receiver describes, as provided at initialization time.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * className;
```

<a id="return-value"></a>

## Return Value

A class name. This may be either the human-readable name for the class—that is, the name that is used in a script—or the name of the Objective-C class that is instantiated to implement the class. To reliably obtain the implementation name, use [implementationClassName](implementationclassname.md).

## See Also

### Getting basic information about the script class

- [defaultSubcontainerAttributeKey](defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [implementationClassName](implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [isLocationRequiredToCreateForKey:](islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.
