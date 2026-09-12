> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptclassdescription/islocationrequiredtocreate(forkey:)](https://developer.apple.com/documentation/foundation/nsscriptclassdescription/islocationrequiredtocreate(forkey:))

# isLocationRequiredToCreate(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.

## Declaration

```swift
func isLocationRequiredToCreate(forKey toManyRelationshipKey: String) -> Bool
```

## Parameters

- `toManyRelationshipKey`: The key for the to-many relationship that may require an insertion location.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an insertion location must be specified; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A script command object that creates a new object in a to-many relationship needs to know whether an explicitly specified insertion location is required. It can get this information from an instance of `NSScriptClassDescription`. For example, `NSMakeCommand` uses this method to determine whether or not a specific `make` AppleScript command must have an `at` parameter.

## See Also

### Getting basic information about the script class

- [className](classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [defaultSubcontainerAttributeKey](defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [implementationClassName](implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.

# isLocationRequiredToCreateForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a Boolean value indicating whether an insertion location must be specified when creating a new object in the specified to-many relationship of the receiver.

## Declaration

```objectivec
- (BOOL) isLocationRequiredToCreateForKey:(NSString *) toManyRelationshipKey;
```

## Parameters

- `toManyRelationshipKey`: The key for the to-many relationship that may require an insertion location.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if an insertion location must be specified; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A script command object that creates a new object in a to-many relationship needs to know whether an explicitly specified insertion location is required. It can get this information from an instance of `NSScriptClassDescription`. For example, `NSMakeCommand` uses this method to determine whether or not a specific `make` AppleScript command must have an `at` parameter.

## See Also

### Getting basic information about the script class

- [className](classname.md): Returns the name of the class the receiver describes, as provided at initialization time.
- [defaultSubcontainerAttributeKey](defaultsubcontainerattributekey.md): Returns the value of the `DefaultSubcontainerAttribute` entry of the class dictionary from which the receiver was instantiated.
- [implementationClassName](implementationclassname.md): Returns the name of the Objective-C class instantiated to implement the scripting class.
- [suiteName](suitename.md): Returns the name of the receiver’s suite.
