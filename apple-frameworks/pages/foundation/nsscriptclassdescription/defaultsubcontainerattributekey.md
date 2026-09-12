> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/defaultsubcontainerattributekey](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/defaultsubcontainerattributekey)

# defaultSubcontainerAttributeKey (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.

## Declaration

```swift
var defaultSubcontainerAttributeKey: String? { get }
```

<a id="return-value"></a>

## Return Value

The value of the default subcontainer attribute entry. Returns `nil` if the there was no such entry.

## See Also

### Getting basic information about the script class

- [className](classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [implementationClassName](implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [isLocationRequiredToCreate(forKey:)](islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.

# defaultSubcontainerAttributeKey (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * defaultSubcontainerAttributeKey;
```

<a id="return-value"></a>

## Return Value

The value of the default subcontainer attribute entry. Returns `nil` if the there was no such entry.

## See Also

### Getting basic information about the script class

- [className](classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [implementationClassName](implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [isLocationRequiredToCreateForKey:](islocationrequiredtocreate%28forkey_%29.md): Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.
